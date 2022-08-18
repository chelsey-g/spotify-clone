import "./app.css"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { useSpotify, getPlaylists, getMyAlbums } from "../../util/spotify"

import SideBarNav from "../SideBarNav"
import AlbumPage from "../../pages/AlbumPage"
import HomePage from "../../pages/HomePage"

function App() {
  useSpotify()
  const [playlists, setPlaylists] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getPlaylists().then((data) => {
      setPlaylists(data.items)
    })
    getMyAlbums().then((data) => {
      setAlbums(data.items)
    })
  }, [])

  console.log({ albums, playlists })

  if (!playlists) {
    return <div>Loading...</div>
  }

  return (
    <div id="main" className="">
      <SideBarNav playlists={playlists} className="left" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
      </Routes>
    </div>
  )
}

export default App
