import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function LeftArrowButton(props) {
  const [leftArrowClass, setleftArrowClass] = useState("");
  const handleButtonClick = () => {
    if (leftArrowClass !== "") {
      setleftArrowClass("");
    } else {
      setleftArrowClass("button-highlighted");
    }
  };

  return (
    <span
      className={`left-arrow-button ${leftArrowClass}`}
      onClick={handleButtonClick}
    >
      <IoIosArrowDropleftCircle color="#FFFFFF" size={37} />
    </span>
  );
}
