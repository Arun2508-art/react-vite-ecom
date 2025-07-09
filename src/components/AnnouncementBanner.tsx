import { Link } from 'react-router-dom';
import Container from './Container';

const AnnouncementBanner = () => {
  return (
    <Container className='bg-black text-white font-normal py-2 tracking-wider lg:pr-0'>
      <div className='text-center'>
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        <Link
          to='/'
          className='underline-offset-5 underline decoration-1 font-medium text-orange-200 px-2 cursor-pointer hover:tracking-widest'
        >
          Shop Now
        </Link>
      </div>
    </Container>
  );
};

export default AnnouncementBanner;
