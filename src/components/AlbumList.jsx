import "./AlbumList.css";
import PlayButton from "./PlayButton";
import LikeButton from "./LikeButton";
import MenuButton from "./MenuButton";
import DurationButton from "./DurationButton";

export default function AlbumList({ coverUrl, name, artists, trackList }) {
  let tracks = [
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "1",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "2",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "3",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "4",
    },
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "5",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "6",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "7",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "8",
    },
    {
      name: "Serve The Servants",
      artist: "Nirvana",
      number: "9",
    },
    {
      name: "Scentless Apprentice",
      artist: "Nirvana",
      number: "10",
    },
    {
      name: "Heart-shaped Box",
      artist: "Nirvana",
      number: "11",
    },
    {
      name: "Rape Me",
      artist: "Nirvana",
      number: "12",
    },
  ];

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          className="album-image"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg/220px-In_Utero_%28Nirvana%29_album_cover.jpg"
        />
        <div className="album-text">
          <p>Album</p>
          <h1>In Utero - 20th Anniversary Remastered</h1>
          <div className="artist-album-info">
            <span className="artist-name">Nirvana • </span>
            <span className="album-year">1993 • </span>
            <span className="track-total">12 songs, </span>
            <span className="album-time-total">41 min 27 sec</span>
          </div>
        </div>
      </div>

      <div className="album-content">
        <div className="album-options">
          <div className="album-buttons">
            <span className="play-button">
              <PlayButton />
            </span>
            <span className="like-button">
              <LikeButton />
            </span>
            <span className="menu-button">
              <MenuButton />
            </span>
          </div>
        </div>

        <div className="tracks-list">
          <div className="tracks-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="track-duration">
              <DurationButton />
            </div>

            <div className="album-tracks">
              {tracks.map((track) => (
                <div className="album-tracks-info">
                  <div className="album-track-number">{track.number}</div>
                  <div className="album-track-name">
                    {track.name}
                    <span className="album-track-artist">{track.artist}</span>
                  </div>
                  <div className="album-track-duration">3:27</div>
                </div>
              ))}
            </div>
          </div>
          <div class="album-cr">© 2013 Geffen Records</div>
        </div>
      </div>
    </div>
  );
}
