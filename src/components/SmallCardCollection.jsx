import SmallCard from "./SmallCard";
import "./SmallCardCollection.css";

export default function SmallCardCollection({ playlists }) {
  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <SmallCard name={playlist.name} coverUrl={playlist.coverUrl} />
      ))}
    </div>
  );
}
