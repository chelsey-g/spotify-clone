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
      console.log("TopArtists", res.items);
      setArtists(res.items);
    });
  }, []);

  return (
    <div>
      <div id="main">
        fdgfdgdf
        <div id="left">
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
          </ul>
          <hr />
          <div>Playlist #1</div>
        </div>
        <div>Center</div>
        <div id="activity">
          Friend Activity
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </div>
      </div>
      <div id="stickyFooter">Player</div>
    </div>
  );
}
