import ArtistsMediumCard from "./ArtistsMediumCard";
import "./ArtistMediumCardCollection.css";
import PropTypes from "prop-types";

export default function ArtistMediumCardCollection(artists) {
  return (
    <div className="artists-collection">
      {artists.followedArtists.map((artist) => (
        <ArtistsMediumCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

ArtistMediumCardCollection.propTypes = {
  artists: PropTypes.array.isRequired,
};
