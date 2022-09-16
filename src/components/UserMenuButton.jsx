import "./UserMenuButton.css";
import { useState } from "react";
import { Login } from "../util/spotify";
import useLocalStorage from "../hooks/useLocalStorage";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

export default function UserMenuButton(props) {
  const [hidden, setHidden] = useState(true);
  const [token, setToken] = useLocalStorage(
    "token",
    window.localStorage.getItem("token")
  );

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      {token ? (
        <div className="user-menu-button-cont">
          <div className="user-menu-image" onClick={handleClick}>
            <img src="https://tinyurl.com/3825xbnt" alt="user art" />
            Chelsey Gowac
            {/* {hidden && <IoMdArrowDropdown />}
        {!hidden && <IoMdArrowDropup />} */}
            {hidden ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </div>
          {!hidden && (
            <nav className="user-menu-dropdown">
              <a>
                Account
                <MdOutlineOpenInNew size={16} className="new-window-nav" />
              </a>
              <a>Profile</a>
              <a>
                Support
                <MdOutlineOpenInNew size={16} className="new-window-nav" />
              </a>
              <a>
                Download
                <MdOutlineOpenInNew size={16} className="new-window-nav" />
              </a>
              <a>Logout</a>
            </nav>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
