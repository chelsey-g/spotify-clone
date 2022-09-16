import "./SearchView.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

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
                <Link
                  className="category-item"
                  to={`/categories/${category.id}`}
                >
                  <img
                    className="category-image"
                    alt="category-art"
                    src={category.icons[0].url}
                  />
                  <span className="category-name">
                    {category.name.replace("/", " / ")}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

SearchView.propTypes = {
  categories: PropTypes.array,
};
