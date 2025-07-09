import { IconGardenCart, IconHeart } from '@tabler/icons-react';

interface CardListProps {
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  value: CardListProps;
}

const Card = ({ value }: CardProps) => {
  const handleCart = (item: CardListProps) => {
    console.log('cart', item);
  };

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='bg-white border border-gray-300 cursor-pointer m-3 rounded-lg group hover:shadow-md'>
        <div className='overflow-hidden rounded-t-lg relative'>
          <img
            src={value.image}
            className='w-full p-4 h-52 object-contain transition-all ease-out duration-300 hover:scale-110'
          />
          <div className='absolute top-4 right-0 rounded-lg bg-blue-500 text-white p-2 transition-all ease-in duration-300 invisible opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100 group-hover:right-3'>
            <IconHeart width={16} height={16} />
          </div>
        </div>
        <div className='pt-0 p-4 flex flex-col gap-2 border-t border-gray-300 group-hover:bg-gray-200'>
          <h1 className='line-clamp-2 h-16 overflow-hidden pt-4'>
            {value.title}
          </h1>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl font-medium justify-end'>${value.price}</h3>
            <button
              className='rounded-lg bg-blue-500 text-white p-2 transition-all ease-in duration-300 invisible opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100'
              onClick={() => {
                handleCart(value);
              }}
            >
              <IconGardenCart width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
