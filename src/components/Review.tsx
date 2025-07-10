import StarRating from './StarRating';

interface ReviewListProps {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ReviewProps {
  data: ReviewListProps[];
}

const Review = ({ data }: ReviewProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (
    <div>
      <h4 className='font-medium text-xl mb-5'>Rating & Reviews</h4>
      {data.map((review) => (
        <div
          className='flex gap-4 pb-4 mb-4 border-b border-gray-200'
          key={review.reviewerEmail}
        >
          <div className='w-10 h-10 rounded-full bg-red-500 text-white font-bold flex items-center justify-center mt-1'>
            {review.reviewerName.charAt(0).toUpperCase()}
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <div className='text-lg font-medium capitalize'>
                {review.reviewerName}
              </div>
              <div className='text-gray-500'>
                {new Intl.DateTimeFormat('en-US', options).format(
                  new Date(review.date)
                )}
              </div>
            </div>
            <StarRating rating={review.rating} />
            <div className='text-gray-500'>{review.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
