import "./CategoriesView.css";
import { Link } from "react-router-dom";
import MediumCardCollection from "./MediumCardCollection";

export default function CategoriesView(props) {
  let { CategoryType, CategoryPlaylists } = props;

  if (!CategoryType || !CategoryPlaylists) {
    return "Loading...";
  }

  return (
    <div className="category-playlist-view">
      <span className="category-title-header">{CategoryType.name}</span>
      <div className="category-description">
        <div className="category-title-subheader-1">Made For You</div>
        <MediumCardCollection
          playlists={CategoryPlaylists}
          className="playlist-card"
        />
        <div className="category-title-subheader-2">Classics</div>
        <MediumCardCollection
          playlists={CategoryPlaylists}
          className="playlist-card"
        />
      </div>
    </div>
  );
}
