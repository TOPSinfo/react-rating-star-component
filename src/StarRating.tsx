import React, { useState } from 'react';

export interface StarRatingProps {
  totalStars?: number; // Total number of stars
  initialRating?: number; // Initial rating
  onChange?: (rating: number) => void; // Callback function when rating changes
  activeColor?: string;   // Active color of the stars
  inactiveColor?: string; // Inactive color of the stars
  size?: string | number; // Size of the stars
  gap?: string | number;  // Gap between the stars
  className?: string;    // Additional class name
  tooltipTexts?: string[];  // Tooltip texts for each star
  ariaLabel?: string;   // Aria label for the star rating
}

export function StarRating({
  totalStars = 5,
  initialRating = 0,
  onChange,
  activeColor = 'yellow',
  inactiveColor = 'gray',
  size = '2rem',
  gap = '5px',
  className = '',
  tooltipTexts = [],
  ariaLabel = 'Star rating',
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onChange) onChange(index);
  };

  return (
    <div
      className={`star-rating-container ${className}`}
      style={{ display: 'flex', gap }}
      aria-label={ariaLabel}
    >
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        const tooltip = tooltipTexts[index - 1] || `${index} Star${index > 1 ? 's' : ''}`;
        return (
          <button
            key={index}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: size,
              color: index <= (hover || rating) ? activeColor : inactiveColor,
              transition: 'color 0.2s',
            }}
            className="star-button"
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            title={tooltip}
            aria-label={tooltip}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
}

