import React, { useEffect, useState } from "react";
import { getUserSavedTracks, getUserTopArtists } from "../util/spotify";
import SavedTracks from "./SavedTracks/SavedTracks";
import TopArtists from "./TopArtists";

export default function MainLayout() {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getUserSavedTracks().then((res) => {
      console.log(res);
      setTracks(res.items);
    });

    getUserTopArtists().then((res) => {
      console.log(res);
      setArtists(res.items);
    });
  }, []);

  return (
    <div>
      <SavedTracks tracks={tracks} name="Chelsey" />;
      <TopArtists artists={artists} />;
    </div>
  );
}
