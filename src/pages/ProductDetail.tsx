import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Add from '../components/Add';
import Container from '../components/Container';
import Loading from '../components/Loding';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import Review from '../components/Review';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProduct } from '../store/slice/product';
import { getOriginalPrice } from '../utils/helper';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const { isLoading, selectedProduct } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [dispatch, productId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container className='my-8 relative flex flex-col lg:flex-row gap-16'>
          {/* Image */}
          <div className='w-full lg:w-1/3 lg:sticky top-20 h-max'>
            {selectedProduct?.images && (
              <ProductImages images={selectedProduct?.images} />
            )}
          </div>
          {/* Text */}
          <div className='w-full lg:w-2/3 flex flex-col gap-3'>
            <h1 className='text-4xl font-medium'>{selectedProduct?.title}</h1>
            <p className='text-gray-500'>{selectedProduct?.description}</p>
            <div className='h-[2px] bg-gray-100' />
            <div className='flex items-center gap-4'>
              <h2 className='text-2xl font-medium'>
                ${selectedProduct?.price}
              </h2>

              {selectedProduct?.price !== undefined &&
                selectedProduct?.discountPercentage !== undefined && (
                  <h3 className='text-xl text-gray-500 line-through'>
                    $
                    {getOriginalPrice(
                      selectedProduct.price,
                      selectedProduct.discountPercentage
                    ).toFixed(2)}
                  </h3>
                )}

              <h2 className='text-red-500 font-medium'>
                {selectedProduct?.discountPercentage}% Off
              </h2>
            </div>
            <div className='h-[2px] bg-gray-100' />
            <Add product={selectedProduct} />

            <div className='h-[2px] bg-gray-100' />
            <h4 className='font-medium mb-3 text-xl'>Product Details</h4>
            <ProductInfo
              brand={selectedProduct?.brand}
              category={selectedProduct?.category}
              warrantyInformation={selectedProduct?.warrantyInformation}
              shippingInformation={selectedProduct?.shippingInformation}
              returnPolicy={selectedProduct?.returnPolicy}
            />

            <div className='h-[2px] bg-gray-100' />
            {selectedProduct?.reviews && (
              <Review data={selectedProduct?.reviews} />
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
