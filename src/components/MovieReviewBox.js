import React from 'react';

const MovieReviewBox = ({ movieName, releaseDate, review }) => {
    return (
        <div className="movie-review-box">
            <h3>{movieName}</h3>
            <p>Released: {releaseDate}</p>
            <p>{review}</p>
        </div>
    );
};

export default MovieReviewBox;
