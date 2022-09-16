import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryTitle } from "../util/spotify";
import { getCategoryPlaylists } from "../util/spotify";
import CategoriesView from "../components/CategoriesView";

export default function CategoriesPage(props) {
  const { id } = useParams();
  const [categoryType, setCategoryType] = useState();
  const [categoryPlaylists, setCategoryPlaylists] = useState();

  useEffect(() => {
    getCategoryTitle(id)
      .then((data) => {
        setCategoryType(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    getCategoryPlaylists(id)
      .then((data) => {
        setCategoryPlaylists(data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!categoryType) {
    return "Loading...";
  }

  if (!categoryPlaylists) {
    return "Loading...";
  }

  return (
    <CategoriesView
      CategoryType={categoryType}
      CategoryPlaylists={categoryPlaylists}
    />
  );
}
