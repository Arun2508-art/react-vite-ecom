import { Link } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
  return (
    <Container className='bg-black text-white text-sm py-8'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link to='/' className='flex gap-4 items-center'>
            <img src='/loder.webp' alt='' width={45} height={45} />
            <div className='text-2xl tracking-wide'>MATHI</div>
          </Link>
          {/* <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className='font-semibold'>hello@lama.dev</span>
          <span className='font-semibold'>+1 234 567 890</span>
          <div className='flex gap-6'>
            <IconBrandFacebookFilled stroke={1.5} width={16} height={16} />
            <IconBrandInstagram stroke={1.5} width={16} height={16} />
            <IconBrandYoutubeFilled stroke={1.5} width={16} height={16} />
            <IconBrandPinterestFilled stroke={1.5} width={16} height={16} />
            <IconBrandX width={16} height={16} />
          </div> */}
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col gap-8'>
            <h1 className='font-medium text-xl'>Men</h1>
            <div className='flex flex-col gap-6 text-base'>
              <Link to=''>Clothing Fashion</Link>
              <Link to=''>Winter</Link>
              <Link to=''>Summer</Link>
              <Link to=''>Formal</Link>
              <Link to=''>Casual</Link>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='font-medium text-xl'>Women</h1>
            <div className='flex flex-col gap-6 text-base'>
              <Link to=''>Clothing Fashion</Link>
              <Link to=''>Winter</Link>
              <Link to=''>Summer</Link>
              <Link to=''>Formal</Link>
              <Link to=''>Casual</Link>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='font-medium text-xl'>Baby Collection</h1>
            <div className='flex flex-col gap-6 text-base'>
              <Link to=''>Clothing Fashion</Link>
              <Link to=''>Winter</Link>
              <Link to=''>Summer</Link>
              <Link to=''>Formal</Link>
              <Link to=''>Casual</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='p-4 w-3/4 border border-white rounded-md'
            />
            <button className='w-1/4 bg-fram text-white'>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex justify-between'>
            <img src='/discover.png' alt='' width={40} height={20} />
            <img src='/skrill.png' alt='' width={40} height={20} />
            <img src='/paypal.png' alt='' width={40} height={20} />
            <img src='/mastercard.png' alt='' width={40} height={20} />
            <img src='/visa.png' alt='' width={40} height={20} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
