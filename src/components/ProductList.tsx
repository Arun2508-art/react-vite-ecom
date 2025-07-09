export interface ProductListProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductProps {
  products: ProductListProps[];
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <div className='mt-4 pt-3 flex gap-x-8 gap-y-16 flex-wrap'>
      {/* <Link
        href='/'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className='absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className='absolute rounded-md object-cover'
          />
        </div>
        <div className='flex items-center justify-between gap-8'>
          <h3 className='font-semibold'>Product Name</h3>
          <div className='font-medium'>$49</div>
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <div className=''>
          <button className='rounded-2xl py-2 px-4 ring-1 ring-fram text-fram text-xs hover:bg-fram hover:text-white'>
            Add Cart
          </button>
        </div>
      </Link>
       */}
      {products
        .filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        )
        .map((item) => (
          <>
            <div className='relative w-full h-60' key={item.id}>
              <img
                src={item.image}
                alt=''
                className='absolute rounded-md object-cover'
              />
            </div>
            <div className=''>
              <h3 className='font-semibold line-clamp-1'>{item.title}</h3>
            </div>
            <div className='text-sm text-gray-500 line-clamp-2'>
              {item.description}
            </div>
            <div className='flex items-center justify-between gap-8'>
              <button className='rounded-2xl py-2 px-4 ring-1 ring-fram text-fram text-xs hover:bg-fram hover:text-white'>
                Add Cart
              </button>
              <div className='font-medium'>${item.price}</div>
            </div>
          </>
        ))}
    </div>
  );
};

export default ProductList;
