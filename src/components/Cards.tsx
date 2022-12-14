import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import cardLogo from "../images/card-logo.svg";
import { FormValues } from "./Form";

interface Props {
  values: FormValues | null;
}

export default function Cards({ values }: Props) {
  return (
    <>
      <div className="card-front">
        <div className="image-card-front">
          <img src={cardFront} alt="Card front" />
        </div>
        <img src={cardLogo} alt="Card logo" className="image-card-logo" />
        {values && (
          <>
            <div className="card-number">{values.cardNumber}</div>
            <div className="cardholder">{values.cardholder}</div>
            <div className="month-year-card">
              {values.mm}/{values.yy}
            </div>
          </>
        )}
      </div>
      <div className="card-back">
        <img src={cardBack} alt="Card back" className="image-card-back" />
        {values && <div className="cvc-card">{values.cvc}</div>}
      </div>
    </>
  );
}
