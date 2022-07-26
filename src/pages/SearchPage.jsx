import React, { useEffect, useState } from "react";
import { getBrowseCategories } from "../util/spotify";
import SearchView from "../components/SearchView";

export default function SearchPage(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getBrowseCategories()
      .then((data) => {
        setCategories(data.categories.items);
      })

      .catch((err) => {
        debugger;
        console.log(err);
      });
  }, []);

  if (!categories) {
    return "Loading...";
  }

  return <SearchView categories={categories} />;
}
