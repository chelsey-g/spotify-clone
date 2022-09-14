import React, { useEffect, useState } from "react";
// import { getSearchItems } from "../util/spotify";
import { getBrowseCategories } from "../util/spotify";
import MainBody from "../components/MainBody";
import PlaylistCollectionView from "../components/PlaylistCollectionView";

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

  return <PlaylistCollectionView categories={categories} />;
}
