import "./CategoriesView.css";
import MediumCardCollection from "./MediumCardCollection";

export default function CategoriesView(props) {
  let { categoryType, categoryPlaylists } = props;

  if (!categoryType || !categoryPlaylists) {
    return "Loading...";
  }

  return (
    <div className="category-playlist-view">
      <span className="category-title-header">{categoryType.name}</span>
      <div className="category-description">
        <div className="category-title-subheader-1">Made For You</div>
        <MediumCardCollection
          playlists={categoryPlaylists}
          className="playlist-card"
        />
        <div className="category-title-subheader-2">Classics</div>
        <MediumCardCollection
          playlists={categoryPlaylists}
          className="playlist-card"
        />
      </div>
    </div>
  );
}
