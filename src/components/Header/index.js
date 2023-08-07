import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faLanguage,
  faUserCircle,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

import ContentWrap from "../ContentWrap/ContentWrap";
import logo from "../../assets/logo/movix-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { code: "en", title: "English" },
        { code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
];

const Header = () => {
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //Handle change language
        break;
      default:
    }
  };

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrap>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
          <ul className="menuItems">
            <li className="menuItem" onClick={() => navigationHandler("movie")}>
              Movies
            </li>
            <li className="menuItem" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>
          </ul>
        </div>
        <div className="menuItems">
          <ul className="menuItems">
            <li className="menuItem" onClick={() => navigate("/signin")}>
              <FontAwesomeIcon
                style={{ paddingRight: 5, fontSize: 24 }}
                icon={faUserCircle}
              />
              Login
            </li>
            <Tippy delay={[0, 200]} content="Language" placement="bottom">
              <li className="menuItem">
                <FontAwesomeIcon icon={faLanguage} />
              </li>
            </Tippy>

            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
        </div>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrap>
      {showSearch && (
        <div className="searchBar">
          <ContentWrap>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrap>
        </div>
      )}
    </header>
  );
};

export default Header;
