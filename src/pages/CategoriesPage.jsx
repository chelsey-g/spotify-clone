import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryTitle } from "../util/spotify";
import { getCategoryPlaylists } from "../util/spotify";
import CategoriesView from "../components/CategoriesView";

export default function CategoriesPage(props) {
  const { id } = useParams();
  const [CategoryType, setCategoryType] = useState();
  const [CategoryPlaylists, setCategoryPlaylists] = useState();

  useEffect(() => {
    getCategoryTitle(id)
      .then((data) => {
        console.log("data loaded 1");
        setCategoryType(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    getCategoryPlaylists(id)
      .then((data) => {
        console.log("data loaded");

        setCategoryPlaylists(data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!CategoryType) {
    return "Loading...";
  }

  if (!CategoryPlaylists) {
    return "Loading...";
  }

  return (
    <CategoriesView
      CategoryType={CategoryType}
      CategoryPlaylists={CategoryPlaylists}
    />
  );
}
