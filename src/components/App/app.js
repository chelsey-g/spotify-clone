import "./app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSpotify, getPlaylists, Login } from "../../util/spotify";

import SideBarNav from "../SideBarNav";
import AlbumPage from "../../pages/AlbumPage";
import HomePage from "../../pages/HomePage";
import PlaylistPage from "../../pages/PlaylistPage";
import SearchPage from "../../pages/SearchPage";

function App() {
  let token = useSpotify();

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylists().then((data) => {
      setPlaylists(data.items);
    });
  }, []);

  if (!token) {
    return <Login />;
  }

  if (!playlists) {
    return <div>Loading...</div>;
  }

  return (
    <div id="main" className="">
      <SideBarNav playlists={playlists} className="left" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
