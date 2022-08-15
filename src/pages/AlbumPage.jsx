import { getAlbumData } from "../util/data";
import AlbumList from "../components/AlbumList";

export default function AlbumPage(props) {
  let albumData = getAlbumData();

  return (
    <AlbumList playlists={albumData.playlists} tracks={albumData.tracks} />
  );
}
