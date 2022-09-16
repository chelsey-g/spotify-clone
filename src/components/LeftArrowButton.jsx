import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function LeftArrowButton(props) {
  const [LeftArrowClass, setLeftArrowClass] = useState("");
  const handleButtonClick = () => {
    if (LeftArrowClass !== "") {
      setLeftArrowClass("");
    } else {
      setLeftArrowClass("button-highlighted");
    }
  };

  return (
    <span
      className={`left-arrow-button ${LeftArrowClass}`}
      onClick={handleButtonClick}
    >
      <IoIosArrowDropleftCircle color="#FFFFFF" size={37} />
    </span>
  );
}
