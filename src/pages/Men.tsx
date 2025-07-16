import { useEffect, useState } from 'react';
import Container from '../components/Container';
import Filter from '../components/Filter';
import Loading from '../components/Loding';
import Card from '../components/card';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts, type ProductListProps } from '../store/slice/product';
import {
  allowedMensCategories,
  FilterMensCategories
} from '../utils/categories';
import { handleSort, type SortOption } from '../utils/helper';

const Men = () => {
  const [items, setItems] = useState<ProductListProps[]>([]);
  const [selectOption, setSelectedOption] = useState<string>('');
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  const handleFilter = (value: string) => {
    if (selectOption === value) {
      setSelectedOption('');
      setItems(products);
    } else {
      setSelectedOption(value);
      setItems(products.filter((item) => item.category === value));
    }
  };

  const handleSortChange = (option: SortOption) => {
    const sorted = handleSort(option, items, products);
    setItems(sorted);
  };

  return (
    <Container className='mb-10'>
      {/* <div className='mt-8'>
        <h1 className='font-semibold text-3xl'>Men's Clothing</h1>
      </div> */}
      <div className='pb-4 h-80 rounded-md'>
        <img
          src='/images/banner/h1_hero1.jpg'
          alt=''
          className='h-full w-full rounded-md'
        />
      </div>
      <Filter
        category={FilterMensCategories}
        onClick={handleFilter}
        onChange={handleSortChange}
        active={selectOption}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap'>
          {items.length > 0 ? (
            items
              .filter((product) =>
                allowedMensCategories.includes(product.category)
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

export default Men;
