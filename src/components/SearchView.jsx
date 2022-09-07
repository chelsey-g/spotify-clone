import "./SearchView.css";
import MenuNav from "./MenuNav";

export default function SearchView(props) {
    let { album, tracks } = props;

    if (!album || !tracks) {
      return "Loading...";
    }

  return (
    <div className="search-view">
      <div className="search-view-header">
        <h1>Recent Searches</h1>
        <div class="recent-searches">
            {/* insert medium cards here */}
      </div>
      <div className="search-view-content">
        <div className="search-view-options">
          <div className="search-view-buttons">
            <MenuNav />
          </div>
        </div>
      </div>
    </div>
  );
}
