import "./searchbar.css";
import { useState } from "react";

import Spotify from "../../util/Spotify";
import Playlist from "../Playlist";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [token, setToken] = useState("");

  if (!token) {
    let token = Spotify.getAccessToken();
    setToken(token);
  }

//   window.history.pushState({}, "", "/");

  const search = async () => {
    let deviceId = await Spotify.getDevices(token);
    let results = await Spotify.search(term, token);
    props.onSearchResults(results);
    console.log({ results });
    // await Spotify.play(token, {
    //   deviceId: deviceId.devices[0].id,
    //   uris: [results[0].id],
    // });
  };

  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new window.Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(
          "BQBYztsbE6jOFWxTU7FSwtpVHdWpcxErsEQsTIXyu70yCcJrblCMYiGqs6ZEB0NMQKh-5NWyGRcyaB5kOD3UHHFhEDp05IArQVOOQW5VarwEhG_FKg1IbDC5W_OGSGdHRItFwMPsmwCCzr6QdBKwwhGf7NK_PUaCx_dx8tANhBKD7dqduBin3uFzjoBI1f0wkz84"
        );
      },
      volume: 0.5,
    });
    player.connect();
  };

  const next = async () => {
    let deviceId = await Spotify.getDevices(token);
    Spotify.next(token, deviceId.devices[0].id);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>{" "}