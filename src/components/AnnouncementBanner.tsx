import Container from './Container';

const AnnouncementBanner = () => {
  return (
    <Container className='bg-black text-white font-normal py-2 tracking-wider lg:pr-0'>
      <div className='text-center text-xs sm:text-base'>
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
      </div>
    </Container>
  );
};

export default AnnouncementBanner;
