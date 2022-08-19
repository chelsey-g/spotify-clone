import React, { useEffect, useState } from "react"
import { getMyAlbums } from "../util/spotify"

import MainBody from "../components/MainBody"

export default function HomePage(props) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getMyAlbums().then((data) => {
      setAlbums(data.items.map((item) => item.album))
    })
  }, [])

  if (!albums) {
    return "Loading..."
  }

  return <MainBody jumpBackInPlaylist={albums} forYouPlaylist={albums} />
}
