import React, { useEffect, useState } from "react";
import { getMyPodcasts } from "../util/spotify";
import PlaylistCollectionView from "../components/PlaylistCollectionView";

export default function PodcastCollectionPage(props) {
  const [myPodcasts, setMyPodcasts] = useState(null);

  useEffect(() => {
    getMyPodcasts()
      .then((data) => {
        setMyPodcasts(data.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!myPodcasts) {
    return "Loading...";
  }

  return <PlaylistCollectionView myPodcasts={myPodcasts} />;
}
