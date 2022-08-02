import "./PlaylistCards.css";
import LeftArrowButton from "../components/LeftArrowButton";
import RightArrowButton from "../components/RightArrowButton";
import UserMenuButton from "../components/UserMenuButton";

export default function PlaylistCards(props) {
  return (
    <div className="main-header">
      <div className="section-header">
        <div className="arrow-buttons">
          <LeftArrowButton />
          <RightArrowButton />
        </div>
        <div className="user-menu-button">
          <UserMenuButton />
        </div>
      </div>
    </div>
  );
}
