import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/images/banner/h1_hero2.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50'
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/images/banner/h1_hero1.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50'
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/images/banner/h1_hero2.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50'
  },
  {
    id: 4,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/images/banner/h1_hero1.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50'
  }
];

const Silder = () => {
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   });

  return (
    <div className='h-[calc(100vh-161px)] relative overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 md:flex-row`}
            style={{ transform: `translateX(-${current * 100}vw)` }}
            key={slide.id}
          >
            {/* Text Container */}
            <div
              className={`absolute ${
                index % 2 === 0 ? 'right-14' : 'left-8'
              } h-full text-center flex gap-4 flex-col justify-center`}
            >
              <h2 className='text-red-500 text-2xl tracking-wider'>
                Fashion Sale
              </h2>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <a href={slide.url}>
                <button className='rounded-md bg-primary text-white bg-black py-3 px-4'>
                  SHOP NOW
                </button>
              </a>
            </div>
            {/* Image Container */}
            <div className='h-full w-full flex items-center justify-center'>
              <img src={slide.img} alt='' width='100%' height={300} />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute mt-auto left-1/2 bottom-4 flex gap-4'>
        {slides.map((slide, index) => (
          <div
            className={`w-2 h-2 rounded-full ring-1 ring-green-700 cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className='w-[6px] h-[6px] bg-red-600 rounded-full'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Silder;
