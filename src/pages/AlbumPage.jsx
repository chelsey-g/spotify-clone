import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../util/spotify";
import AlbumView from "../components/AlbumView";

export default function AlbumPage(props) {
  const { id } = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    getAlbum(id)
      .then((data) => {
        setAlbum(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!album) {
    return "Loading...";
  }

  return <AlbumView album={album} tracks={album.tracks.items} />;
}
