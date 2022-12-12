import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";

export default function Cards() {
  return (
    <>
      <img src={cardFront} alt="Card front" className="card-front" />
      <img src={cardBack} alt="Card back" />
    </>
  );
}
