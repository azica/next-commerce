"use client"
import { useState } from 'react';

import StarIcon from '@/assets/icons/star.svg';
import StarFilledIcon from '@/assets/icons/starFilled.svg';
import StarHalfIcon from '@/assets/icons/starHalf.svg';

const Rating = ({ stars }: { stars: number }) => {

    const [rating, setRating] = useState(stars);

    const handleHover = (value) => {
        setRating(value);
    };

    const handleClick = (value) => {
        setRating(value);
        // if (onChange) {
        //     onChange(value);
        // }
    };

    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((index) => {
                const roundedRating = Math.round(rating * 2) / 2;
                let icon;
                if (index <= roundedRating) {
                    icon = <StarFilledIcon className="w-6 h-6 fill-yellow-500 cursor-pointer" />;
                } else if (index - 0.5 === roundedRating) {
                    icon = <StarHalfIcon className="w-6 h-6 fill-yellow-500 cursor-pointer" />;
                } else {
                    icon = <StarIcon className="w-6 h-6 stroke-gray-400 cursor-pointer" />;
                }
                return (
                    <div
                        key={index}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(stars)}
                        onClick={() => handleClick(index)}
                    >
                        {icon}
                    </div>
                );
            })}
        </div>
    );
};

export default Rating;
