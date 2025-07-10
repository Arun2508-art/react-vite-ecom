interface InfoProps {
  brand?: string;
  category?: string;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}

const ProductInfo = ({
  brand,
  category,
  warrantyInformation,
  shippingInformation,
  returnPolicy
}: InfoProps) => {
  return (
    <div className='space-y-3'>
      <div className='flex items-start gap-2'>
        <span className='text-gray-500 font-medium w-32'>Brand</span>
        <span className='font-semibold'>{brand}</span>
      </div>
      <div className='flex items-start gap-2'>
        <span className='text-gray-500 font-medium w-32'>Category</span>
        <span className='font-semibold'>{category}</span>
      </div>
      <div className='flex items-start gap-2'>
        <span className='text-gray-500 font-medium w-32'>Warranty</span>
        <span className='font-semibold'>{warrantyInformation}</span>
      </div>
      <div className='flex items-start gap-2'>
        <span className='text-gray-500 font-medium w-32'>Shipping</span>
        <span className='font-semibold'>{shippingInformation}</span>
      </div>
      <div className='flex items-start gap-2'>
        <span className='text-gray-500 font-medium w-32'>Return Policy</span>
        <span className='font-semibold'>{returnPolicy}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
