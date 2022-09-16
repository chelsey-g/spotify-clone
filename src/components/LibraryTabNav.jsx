import "./LibraryTabNav.css";

export default function LibraryTabNav(props) {
  return (
    <div className="library-view-tabs">
      <div className="library-playlist-tab">Playlists</div>
      <div className="library-podcast-tab">Podcasts</div>
      <div className="library-artist-tab">Artists</div>
      <div className="library-album-tab">Albums</div>
    </div>
  );
}
