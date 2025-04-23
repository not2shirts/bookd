import React, { useState } from 'react'
import { Star } from "lucide-react";


function StarRating({ totalStars = 5, initialRating = 0, onChange }) {

    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);
    const handleClick = (starValue) => {
        if (onChange) {
            onChange(starValue);
          }
        setRating(starValue);

      };

    const StarIcon = ({ filled }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={filled ? "#FFD700" : "#D3D3D3"}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m3.1 11.3 3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1L8.7 8.2 4 8.7h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
        </svg>
      );

  return (
    <div className="flex flex-row items-center">
       {
        [...Array(totalStars)].map((_, index) => {
            const starValue = index +1;

            return (
                <button
                type='button'
                key={index}
                className='bg-transparent border-none outline-none cursor-pointer p-1'
                onClick={() => handleClick(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                >
                <StarIcon filled={starValue <= (hover || rating)}/>
                </button>
            )
        })
       }
       <span className='ml-2 text-gray-600'>{rating} of {totalStars}</span>
    </div>
  )
}

export default StarRating
