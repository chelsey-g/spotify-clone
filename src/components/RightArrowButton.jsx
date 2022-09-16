import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function RightArrowButton(props) {
  const [rightArrowClass, setrightArrowClass] = useState("");
  const handleButtonClick = () => {
    if (rightArrowClass !== "") {
      setrightArrowClass("");
    } else {
      setrightArrowClass("button-highlighted");
    }
  };

  return (
    <span
      className={`right-arrow-button ${rightArrowClass}`}
      onClick={handleButtonClick}
    >
      <IoIosArrowDroprightCircle
        size={37}
        className={`right-arrow-button ${rightArrowClass}`}
        onClick={handleButtonClick}
        color="white"
      ></IoIosArrowDroprightCircle>{" "}
    </span>
  );
}
