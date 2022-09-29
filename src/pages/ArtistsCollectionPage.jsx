import React, { useEffect, useState } from "react";
import { getUserFollowedArtists } from "../util/spotify";
import ArtistsCollectionView from "../components/ArtistsCollectionView";
import PropTypes from "prop-types";

export default function ArtistsCollectionPage(props) {
  const [followedArtists, setfollowedArtists] = useState(null);

  useEffect(() => {
    getUserFollowedArtists()
      .then((data) => {
        setfollowedArtists(data.artists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!followedArtists) {
    return "Loading, bitch...";
  }

  return (
    <ArtistsCollectionView
      followedArtists={followedArtists}
      artists={props.artists}
    />
  );
}
