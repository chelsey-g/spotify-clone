import React, { useEffect, useState } from "react";
import { getSearchItems } from "../util/spotify";

import MainBody from "../components/MainBody";

export default function SearchPage(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getSearchItems().then((data) => {
      setAlbums(data.items.map((item) => item.album));
    });
  }, []);

  if (!albums) {
    return "Loading...";
  }

  return <MainBody jumpBackInPlaylist={albums} forYouPlaylist={albums} />;
}
