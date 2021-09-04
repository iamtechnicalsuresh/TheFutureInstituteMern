import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, link, imageClass }) => {
  return (
    <div className="card">
      <img
        src={`/images/${image}`}
        alt={title}
        className={imageClass ? "card__img-rounded" : "card__img"}
      />
      <div className="card__details">
        <h2 className="secondary-heading">{title}</h2>
        <p className="secondary-description">{description}</p>
      </div>
      {link ? (
        <Link to="/course-details" className="btn btn-primary width-100">
          More About This Course
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
