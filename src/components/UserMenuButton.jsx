import "./UserMenuButton.css";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

export default function UserMenuButton(props) {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className="user-menu-button-cont">
      <div className="user-menu-image" onClick={handleClick}>
        <img src="https://tinyurl.com/mvkkvyd2" alt="user image" />
        Chelsey Gowac
        {/* {hidden && <IoMdArrowDropdown />}
        {!hidden && <IoMdArrowDropup />} */}
        {hidden ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </div>
      {!hidden && (
        <nav className="user-menu-dropdown">
          <a href="#">
            Account
            <MdOutlineOpenInNew size={16} className="new-window-nav" />
          </a>
          <a href="#">Profile</a>
          <a href="#">
            Support
            <MdOutlineOpenInNew size={16} className="new-window-nav" />
          </a>
          <a href="#">
            Download
            <MdOutlineOpenInNew size={16} className="new-window-nav" />
          </a>
          <a href="#">Logout</a>
        </nav>
      )}
    </div>
  );
}
