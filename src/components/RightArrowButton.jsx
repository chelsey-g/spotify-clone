import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function RightArrowButton(props) {
  const [rightArrowClass, setrightArrowClass] = useState("");
  const navigate = useNavigate();

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
      onClick={() => navigate(1)}
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
