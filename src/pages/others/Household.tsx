import { useEffect } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loding';
import Card from '../../components/card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts } from '../../store/slice/product';

const Household = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allowedHouseholdCategories = [
    'furniture',
    'groceries',
    'home-decoration',
    'kitchen-accessories'
  ];

  return (
    <Container className='mb-10'>
      <div className='my-8'>
        <h1 className='font-semibold text-3xl'>Kitchen & Furniture</h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap gap-y-8'>
          {products.length > 0 ? (
            products
              .filter((product) =>
                allowedHouseholdCategories.includes(product.category)
              )
              .map((item) => <Card product={item} key={item.id} />)
          ) : (
            <div>No Product</div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Household;
