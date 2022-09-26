import React, { useEffect, useState } from "react";
import { getMyPodcasts } from "../util/spotify";
import PodcastCollectionView from "../components/PodcastCollectionView";

export default function PodcastCollectionPage(props) {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    getMyPodcasts()
      .then((data) => {
        setEpisodes(data.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!episodes) {
    return "Loading...";
  }

  return <PodcastCollectionView episodes={episodes} />;
}
