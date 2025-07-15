import { Link } from 'react-router-dom';

export type CategoryCardProps = {
  imageName: string;
  label: string;
  path: string;
};

const CategoryCard = ({ imageName, label, path }: CategoryCardProps) => {
  return (
    <Link
      to={path}
      className='block relative group px-2 w-full sm:w-1/3 lg:w-1/6'
    >
      <div className='relative'>
        <div className='h-32 rounded-md overflow-hidden before:bg-[linear-gradient(to_bottom,rgba(41,38,33,0)_0%,#292621_100%)] before:rounded-md before:absolute before:bottom-0 before:h-2/3 before:w-full before:z-20'>
          <img
            src={`/images/category/${imageName}`}
            alt='men fashion'
            className='h-full transform-[scale(1)] group-hover:transform-[scale(1.02)] transition-all ease-out duration-300 w-full'
          />
        </div>
        <div className='w-full text-center absolute bottom-0 group-hover:bottom-5 text-white transition-all duration-300 ease-out z-30'>
          <h1 className='font-semibold mb-2'>{label}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
