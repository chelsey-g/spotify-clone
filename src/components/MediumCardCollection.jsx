import MediumCard from "./MediumCard";
import "./MediumCardCollection.css";

export default function MediumCardCollection({ playlists }) {
  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <MediumCard
          key={playlist.id}
          id={playlist.id}
          coverUrl={playlist.coverUrl}
          name={playlist.name}
          artists={playlist.artists}
        />
      ))}
    </div>
  );
}
