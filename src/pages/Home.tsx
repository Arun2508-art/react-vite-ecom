import AnnouncementBanner from '../components/AnnouncementBanner';
import CategoryCard from '../components/CategoryCard';
import Container from '../components/Container';
import FooterMessage from '../components/FooterMessage';
import Silder from '../components/Silder';

const HomePage = () => {
  return (
    <>
      <AnnouncementBanner />
      <Silder />

      {/* <div className='mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Products</h1>
        <ProductList products={[]} />
      </div> */}
      <Container className='flex flex-wrap mt-8 gap-y-4'>
        <CategoryCard label="Men's Fashion" imageName='items1.jpg' />
        <CategoryCard label="Women's Fashion" imageName='items3.jpg' />
        <CategoryCard label='Electronics' imageName='items2.jpg' />
      </Container>
      <FooterMessage />
    </>
  );
};

export default HomePage;
