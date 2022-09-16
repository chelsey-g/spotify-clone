import React, { useEffect, useState } from "react";
// import { getSearchItems } from "../util/spotify";
import { getLikedSongs } from "../util/spotify";
import MainBody from "../components/MainBody";
import PlaylistCollectionView from "../components/PlaylistCollectionView";

export default function PlaylistCollectionPage(props) {
  const [likedSongs, setlikedSongs] = useState(null);

  useEffect(() => {
    getLikedSongs()
      .then((data) => {
        setlikedSongs(data.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!likedSongs) {
    return "Loading...";
  }

  return (
    <PlaylistCollectionView
      likedSongs={likedSongs}
      playlists={props.playlists}
    />
  );
}
