import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from './Book';

const Rating = ({ rating, book }) => {
  const safeRating = Number(rating) || 0; // ensure rating is a valid number
  
  return (
    <div className='book__rating'>
      {new Array(Math.floor(safeRating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}

      {!Number.isInteger(safeRating) && (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
    </div>
  );
}

export default Rating;