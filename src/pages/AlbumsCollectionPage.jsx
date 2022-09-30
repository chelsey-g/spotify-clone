import React, { useEffect, useState } from "react";
import { getSavedAlbums } from "../util/spotify";
import AlbumsCollectionView from "../components/AlbumsCollectionView";
import PropTypes from "prop-types";

export default function AlbumsCollectionPage(props) {
  const [savedAlbums, setSavedAlbums] = useState(null);

  useEffect(() => {
    getSavedAlbums()
      .then((data) => {
        setSavedAlbums(data.items.map((item) => item.album));
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!savedAlbums) {
    return "Loading, bitch...";
  }

  return (
    <AlbumsCollectionView savedAlbums={savedAlbums} albums={props.albums} />
  );
}
