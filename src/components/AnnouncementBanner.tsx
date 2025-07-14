import Container from './Container';

const AnnouncementBanner = () => {
  return (
    <div className='bg-black'>
      <Container className='py-2 lg:pr-0'>
        <div className='text-white font-normal text-center tracking-wider text-xs sm:text-base'>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        </div>
      </Container>
    </div>
  );
};

export default AnnouncementBanner;
