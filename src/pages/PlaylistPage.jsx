import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../util/spotify";
import PlaylistView from "../components/PlaylistView";

export default function PlaylistPage(props) {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    getPlaylist(id)
      .then((data) => {
        setPlaylist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!playlist) {
    return "Loading...";
  }

  return <PlaylistView playlist={playlist} tracks={playlist.tracks} />;
}
