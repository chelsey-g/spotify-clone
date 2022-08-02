import "./SmallCard.css";

export default function SmallCard({ coverUrl, name }) {
  return (
    <div className="small-card">
      <div className="small-card-info">
        <img src={coverUrl} />
        <span className="small-card-title">{name}</span>
      </div>
    </div>
  );
}
