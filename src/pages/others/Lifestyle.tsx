import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import Loading from '../../components/Loding';
import Card from '../../components/card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchProducts,
  type ProductListProps
} from '../../store/slice/product';
import {
  allowedLifestyleCategories,
  FilterLifestyleCategories
} from '../../utils/categories';

const Lifestyle = () => {
  const [item, setItem] = useState<ProductListProps[]>([]);
  const [selectOption, setSelectedOption] = useState<string>('');
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setItem(products);
  }, [products]);

  const handleFilter = (value: string) => {
    if (selectOption === value) {
      setSelectedOption('');
      setItem(products);
    } else {
      setSelectedOption(value);
      setItem(products.filter((item) => item.category === value));
    }
  };

  const handleFilterChange = (value: string) => {
    let sortedItems = [...item];
    if (value === 'ascprice') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (value === 'descprice') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else {
      sortedItems = [...products];
    }
    setItem(sortedItems);
  };

  return (
    <Container className='mb-10'>
      <div className='my-8'>
        <h1 className='font-semibold text-3xl'>Beauty And Grooming</h1>
      </div>
      <Filter
        category={FilterLifestyleCategories}
        onChange={handleFilterChange}
        onClick={handleFilter}
        active={selectOption}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap gap-y-8'>
          {item.length > 0 ? (
            item
              .filter((product) =>
                allowedLifestyleCategories.includes(product.category)
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

export default Lifestyle;
