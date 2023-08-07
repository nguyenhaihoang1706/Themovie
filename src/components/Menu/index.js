import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import ContentWrap from "../ContentWrap/ContentWrap";
import MenuItems from "./MenuItems";
import { useState } from "react";

import "./Menu.module.scss";
import Header from "./Header";

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      offset={(10, 10)}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <ContentWrap className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItem()}
          </ContentWrap>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} //quay về trang đầu tiên
    >
      {children}
    </Tippy>
  );
}

export default Menu;
