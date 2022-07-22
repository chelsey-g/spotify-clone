import React, { useEffect, useState } from "react";
import "./app.css";
import Player from "../player/player";
import sideBar from "../player/sidebar/sideBar";
import SidebarOption from "../player/sidebar/SidebarOption";
import { getUserSavedTracks, getUserTopArtists } from "../../util/spotify";
import SavedTracks from "../SavedTracks/SavedTracks";
import TopArtists from "../TopArtists";

import { FaSpotify } from "react-icons/fa";

function App() {
  const CLIENT_ID = "d5872995816a4caaa9030ff6663ffc5d";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

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

  let scopes = ["user-top-read", "user-library-read"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FaSpotify /> Spotify React
        </h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
              " "
            )}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </header>
      <div>
        <SavedTracks tracks={tracks} name="Chelsey" />;
        <TopArtists artists={artists} />;
      </div>
    </div>
  );
}

export default App;
