import { Link } from 'react-router-dom';

export type CategoryCardProps = {
  imageName: string;
  label: string;
};

const CategoryCard = ({ imageName, label }: CategoryCardProps) => {
  return (
    <div className='relative group px-2 w-full md:w-1/2 lg:w-1/3'>
      <div className='relative'>
        <div className='rounded-md h-70 overflow-hidden before:bg-[linear-gradient(to_bottom,rgba(41,38,33,0)_0%,#292621_100%)] before:rounded-md before:absolute before:bottom-0 before:h-1/2 before:w-full before:z-20'>
          <img
            src={`/images/category/${imageName}`}
            alt='men fashion'
            height={160}
            className='transform-[scale(1)] group-hover:transform-[scale(1.02)] transition-all ease-out duration-300 w-full'
          />
        </div>
      </div>
      <div className='text-center absolute bottom-0 group-hover:bottom-10 left-[25%] text-white transition-all duration-700 ease-out z-30'>
        <h1 className='font-bold text-2xl mb-6'>{label}</h1>
        <Link
          to='/men'
          className='text-xl underline-offset-5 underline tracking-wide cursor-pointer decoration-1 font-semibold text-orange-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 hover:tracking-wider'
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
