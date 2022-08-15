import "./SmallCard.css";

export default function SmallCard({ coverUrl, name }) {
  return (
    <div className="small-card">
      <div className="small-card-info">
        <img src={coverUrl} alt="cover art" />
        <span className="small-card-title">{name}</span>
      </div>
    </div>
  );
}
