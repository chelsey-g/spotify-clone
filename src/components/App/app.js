import React from "react";
import SideBarNav from "../SideBarNav";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import AlbumPage from "../../pages/AlbumPage";
import HomePage from "../../pages/HomePage";
import { getPlaylistData, getAlbumData } from "../../util/data";

function App() {
  let playlists = getPlaylistData();
  let albumData = getAlbumData();

  return (
    <div id="main" className="">
      <SideBarNav playlists={playlists} className="left" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* {/* <Route path="expenses" element={<Expenses />} /> */}
        <Route path="albums/:id" element={<AlbumPage />} /> */
      </Routes>
    </div>
  );
}

export default App;
