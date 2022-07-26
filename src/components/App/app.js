import "./app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSpotify, getPlaylists, Login } from "../../util/spotify";
import SideBarNav from "../SideBarNav";
import AlbumPage from "../../pages/AlbumPage";
import HomePage from "../../pages/HomePage";
import PlaylistPage from "../../pages/PlaylistPage";
import LikedSongsPage from "../../pages/LikedSongsPage";
import SearchPage from "../../pages/SearchPage";
import CategoriesPage from "../../pages/CategoriesPage";
import PlaylistCollectionPage from "../../pages/PlaylistCollectionPage";
import PodcastCollectionPage from "../../pages/PodcastCollectionPage";
import ArtistsCollectionPage from "../../pages/ArtistsCollectionPage";
import AlbumsCollectionPage from "../../pages/AlbumsCollectionPage";

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
        <Route path="/collection/tracks" element={<LikedSongsPage />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        <Route
          path="/collection/playlists"
          element={<PlaylistCollectionPage playlists={playlists} />}
        />
        <Route
          path="/collection/podcasts"
          element={<PodcastCollectionPage />}
        />
        <Route path="/collection/artists" element={<ArtistsCollectionPage />} />
        <Route path="/collection/albums" element={<AlbumsCollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
