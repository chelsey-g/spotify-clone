import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAlbum, getAlbumTracks } from "../util/spotify"
import AlbumList from "../components/AlbumList"

export default function AlbumPage(props) {
  let params = useParams()
  const albumId = params.id
  const [album, setAlbum] = useState(albumId)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getAlbum(albumId)
      .then((data) => {
        setAlbum(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [albumId])

  useEffect(() => {
    getAlbumTracks(albumId)
      .then((data) => {
        setTracks(data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [albumId])

  if (!album || !tracks) {
    return "Loading..."
  }

  return <AlbumList album={album} tracks={tracks} />
}
