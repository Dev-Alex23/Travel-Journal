import React from "react";
import "./card.scss";

const Card = ({ tite, location, startDate, endDate, description, imageUrl }) => {
  return (
    <div className='container'>
      <div className='card-container'>
        <div className='img-container'>
          <img src={imageUrl} alt={tite} />
        </div>
        <div className='info-container'>
          <div className='location'>
            <p>{location}</p>
          </div>
          <h2>{tite}</h2>
          <div className='time'>
            <p>
              {startDate} - {endDate}
            </p>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
