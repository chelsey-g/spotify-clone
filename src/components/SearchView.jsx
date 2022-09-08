import "./SearchView.css";
import UserMenuButton from "./UserMenuButton";

export default function SearchView(props) {
  let { categories } = props;

  if (!categories) {
    return "Loading...";
  }

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-header-right"></div>
        <div className="search-info">
          <span className="search-title-header">Browse All</span>

          <div className="categories-section">
            {categories.map((category) => {
              return (
                <div className="category-item">
                  <img className="category-image" src={category.icons[0].url} />
                  <span className="category-name">
                    {category.name.replace("/", " / ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
