import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from './Book';

const Rating = ({ rating, book }) => {
    return (
        <div className='book__rating'>
            {new Array(Math.floor(rating)).fill(0).map((_, index) => (
             <FontAwesomeIcon icon="star" key={index} />
            ))}
            {!Number.isInteger(book.rating) && (
             <FontAwesomeIcon icon="star-half-alt"/>
            )}
        </div>
    );
}

export default Rating;