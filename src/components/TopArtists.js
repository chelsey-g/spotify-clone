export default function TopArtists({ artists }) {
  return (
    <div>
      <h1>Top Artists</h1>
      <ul>
        {artists?.map((artist) => {
          return (
            <li>
              {artist.name}
              <img src={artist.images[2].url} alt="artist image"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
