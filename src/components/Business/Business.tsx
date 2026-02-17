import "./Business.scss";
import { BusinessConfig } from "../App/App";

interface BusinesssProps {
  business: BusinessConfig;
}

const Business = ({ business }: BusinesssProps) => {
  return (
    <article className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
        <p className="Business-category-badge">{business.category}</p>
      </div>
      <div className="Business-body">
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3 className="rating">{business.rating.toFixed(1)} rating</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Business;
