import { useState } from 'react';

const ProductImages = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className='h-80'>
        <img src={images[index]} alt='' className='rounded-md h-full w-full' />
      </div>
      <div className='flex gap-2 mt-2'>
        {images.map((img, i) => (
          <div
            className='w-1/4 h-24 cursor-pointer hover:shadow-md hover:rounded-md'
            key={i}
            onClick={() => setIndex(i)}
          >
            <img src={img} alt='' className='rounded-md w-full h-24' />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
