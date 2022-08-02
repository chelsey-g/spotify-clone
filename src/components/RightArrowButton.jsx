import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function RightArrowButton(props) {
  const [RightArrowClass, setRightArrowClass] = useState("");
  const handleButtonClick = () => {
    if (RightArrowClass !== "") {
      setRightArrowClass("");
    } else {
      setRightArrowClass("button-highlighted");
    }
  };

  return (
    <span
      className={`right-arrow-button ${RightArrowClass}`}
      onClick={handleButtonClick}
    >
      <IoIosArrowDroprightCircle
        size={37}
        className={`right-arrow-button ${RightArrowClass}`}
        onClick={handleButtonClick}
      ></IoIosArrowDroprightCircle>{" "}
    </span>
  );
}
