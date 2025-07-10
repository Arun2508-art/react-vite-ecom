interface StarRatingProps {
  totalStars?: number;
  rating?: number;
}

const StarRating = ({ totalStars = 5, rating = 0 }: StarRatingProps) => {
  return (
    <div className='flex items-center gap-1'>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        let fill = 'none';

        if (rating >= starNumber) {
          fill = 'gold';
        } else if (rating > starNumber - 1 && rating < starNumber) {
          fill = 'url(#half-gradient)';
        } else {
          fill = 'lightgray';
        }

        return (
          <svg
            key={index}
            height='16'
            width='16'
            viewBox='0 0 24 24'
            fill={fill}
            strokeWidth='1'
            style={{ cursor: 'pointer' }}
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient id='half-gradient'>
                <stop offset='50%' stopColor='gold' />
                <stop offset='50%' stopColor='lightgray' />
              </linearGradient>
            </defs>
            <path d='M12 .587l3.668 7.571L24 9.748l-6 5.849L19.335 24 12 20.202 4.665 24 6 15.597 0 9.748l8.332-1.59L12 .587z' />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
