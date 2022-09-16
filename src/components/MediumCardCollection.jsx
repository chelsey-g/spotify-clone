import { getCategoryPlaylists } from "../util/spotify";
import MediumCard from "./MediumCard";
import "./MediumCardCollection.css";
import PropTypes from "prop-types";

export default function MediumCardCollection({ playlists, leadingCard }) {
  return (
    <div className="playlists">
      {leadingCard}
      {playlists.map((playlist) => (
        <MediumCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}

MediumCardCollection.propTypes = {
  playlists: PropTypes.array.isRequired,
};
