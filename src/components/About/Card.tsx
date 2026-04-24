import "./Card.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <span className="card-icon">{icon}</span>
      <div className="card-title">{title}</div>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default Card;
