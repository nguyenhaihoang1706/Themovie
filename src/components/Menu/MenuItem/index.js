import { Button } from "antd";
import "../style.scss";

function MenuItems({ data, onClick }) {
  return <Button onClick={onClick}>{data.title}</Button>;
}

export default MenuItems;
