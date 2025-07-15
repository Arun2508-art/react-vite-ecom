import Container from './Container';

const data = [
  {
    label: 'Fast & Free Delivery',
    image: 'services1.svg'
  },
  {
    label: 'Secure Payment',
    image: 'services2.svg'
  },
  {
    label: 'Money Back Guarantee',
    image: 'services3.svg'
  },
  {
    label: 'Online Support',
    image: 'services4.svg'
  }
];

const FooterMessage = () => {
  return (
    <Container className='hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6'>
      {data.map((item) => (
        <div
          className='flex flex-col items-center justify-center text-center p-4 sm:p-8 rounded-md group'
          key={item.label}
        >
          <div className='p-2 rounded-full bg-primary/10'>
            <img src={`/images/footerMessage/${item.image}`} alt={item.label} />
          </div>
          <div className='text-lg font-normal group-hover:text-red-500'>
            {item.label}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FooterMessage;
