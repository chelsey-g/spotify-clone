import MediumCard from "./MediumCard";
import "./RecentlyPlayed.css";

export default function RecentlyPlayed({ playlists }) {
  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <MediumCard
          coverUrl={playlist.coverUrl}
          name={playlist.name}
          artists={playlist.artists}
        />
      ))}
    </div>
  );
}
