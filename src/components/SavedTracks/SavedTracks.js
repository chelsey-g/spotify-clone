export default function SavedTracks(props) {
  return (
    <div>
      <h1>Liked Songs</h1>
      <ul>
        {props.tracks?.map((track) => {
          return (
            <li>
              {track.track.name} - {track.track.artists[0].name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
