import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLikedSongs } from "../util/spotify";
import LikedSongsView from "../components/LikedSongsView";

export default function LikedSongsPage(props) {
  const { id } = useParams();
  const [likedSongs, setLikedSongs] = useState();

  useEffect(() => {
    getLikedSongs(id)
      .then((data) => {
        console.log("data loaded");
        setLikedSongs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!likedSongs) {
    return "Loading...";
  }

  return (
    <LikedSongsView tracks={likedSongs.items} totalTracks={likedSongs.total} />
  );
}
