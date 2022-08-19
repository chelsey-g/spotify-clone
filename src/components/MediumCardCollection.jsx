import MediumCard from "./MediumCard";
import "./MediumCardCollection.css";

export default function MediumCardCollection({ playlists }) {
  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <MediumCard
          key={playlist.id}
          playlist={playlist}
        />
      ))}
    </div>
  );
}
