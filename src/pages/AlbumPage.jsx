import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAlbum, getAlbumTracks } from "../util/spotify"
import AlbumView from "../components/AlbumView"

export default function AlbumPage(props) {
  const { id } = useParams()
  const [album, setAlbum] = useState()
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getAlbum(id)
      .then((data) => {
        setAlbum(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  useEffect(() => {
    getAlbumTracks(id)
      .then((data) => {
        setTracks(data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  if (!album || !tracks) {
    return "Loading..."
  }

  return <AlbumView album={album} tracks={tracks} />
}
