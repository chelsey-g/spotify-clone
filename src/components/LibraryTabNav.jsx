import "./LibraryTabNav.css";
import { Link } from "react-router-dom";

export default function LibraryTabNav(props) {
  return (
    <div className="library-view-tabs">
      <div className="library-playlist-tab">
        <Link to="/collection/playlists">Playlists</Link>
      </div>
      <div className="library-podcast-tab">
        <Link to="/collection/podcasts">Podcasts</Link>
      </div>
      <div className="library-artist-tab">
        <Link to="/collection/artists">Artists</Link>
      </div>
      <div className="library-album-tab">
        <Link to="/collection/albums">Albums</Link>
      </div>
    </div>
  );
}
