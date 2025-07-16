import { useEffect } from 'react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import Card from '../components/card';
import CategoryCard from '../components/CategoryCard';
import Container from '../components/Container';
import FooterMessage from '../components/FooterMessage';
import Silder from '../components/Silder';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts } from '../store/slice/product';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <AnnouncementBanner />
      <Silder />
      <FooterMessage />
      <Container className='mt-8'>
        <h3 className='text-3xl font-semibold my-6 px-3'>Categories</h3>
        <div className='flex flex-wrap gap-y-4'>
          <CategoryCard label="Men's Fashion" imageName='men.jpg' path='men' />
          <CategoryCard
            label="Women's Fashion"
            imageName='women.jpg'
            path='women'
          />
          <CategoryCard
            label='Electronics'
            imageName='electronics.jpg'
            path='electronics'
          />
          <CategoryCard
            label='Kitchen & Furniture'
            imageName='kitchen.jpg'
            path='others/all-household'
          />
          <CategoryCard
            label='Motor'
            imageName='motor.jpg'
            path='others/all-motor'
          />
          <CategoryCard
            label='Sports & Sun glasses'
            imageName='sport.jpg'
            path='others/all-sports'
          />
        </div>
      </Container>

      <Container className='mb-8'>
        <h3 className='text-3xl font-semibold mt-6 mb-3 px-3'>
          Latest Products
        </h3>
        <div className='flex md:flex-wrap overflow-x-auto hide-scrollbar show-scrollbar-on-hover hide-mz-scroll show-mz-scroll'>
          {products.slice(0, 15).map((item) => (
            <Card product={item} key={item.id} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
