import React, { useEffect, useState } from "react";
import { getMyPodcasts } from "../util/spotify";
import PodcastCollectionView from "../components/PlaylistCollectionView";
import PropTypes from "prop-types";

export default function PodcastCollectionPage(props) {
  const [podcasts, setPodcasts] = useState(null);

  useEffect(() => {
    getMyPodcasts()
      .then((data) => {
        setPodcasts(data.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!podcasts) {
    return "Loading...";
  }

  return <PodcastCollectionView podcasts={podcasts} />;
}

PodcastCollectionPage.propTypes = {
  podcasts: PropTypes.array,
};
