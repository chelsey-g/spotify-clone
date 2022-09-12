import React, { useEffect, useState } from "react";
// import { getSearchItems } from "../util/spotify";
import { getBrowseCategories } from "../util/spotify";
import MainBody from "../components/MainBody";
import LibraryView from "../components/LibraryView";

export default function LibraryPage(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getBrowseCategories()
      .then((data) => {
        setCategories(data.categories.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!categories) {
    return "Loading...";
  }

  return <LibraryView categories={categories} />;
}
