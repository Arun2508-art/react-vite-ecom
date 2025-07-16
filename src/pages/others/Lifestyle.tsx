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
import { handleSort, type SortOption } from '../../utils/helper';

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

  const handleSortChange = (option: SortOption) => {
    const sorted = handleSort(option, item, products);
    setItem(sorted);
  };

  return (
    <Container className='mb-10'>
      <div className='pb-4 h-80 rounded-md'>
        <img
          src='/images/banner/men_banner.jpg'
          alt=''
          className='h-full w-full rounded-md'
        />
      </div>
      <Filter
        category={FilterLifestyleCategories}
        onChange={handleSortChange}
        onClick={handleFilter}
        active={selectOption}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap'>
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
