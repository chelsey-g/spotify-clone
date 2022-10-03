import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function LeftArrowButton(props) {
  const [leftArrowClass, setleftArrowClass] = useState("");
  const navigate = useNavigate();

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
      onClick={() => navigate(-1)}
    >
      <IoIosArrowDropleftCircle color="#FFFFFF" size={37} />
    </span>
  );
}
