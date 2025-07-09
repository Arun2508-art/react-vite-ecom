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
    <Container className='flex items-center gap-4 my-4'>
      {data.map((item) => (
        <div
          className='flex items-center justify-center p-8 flex-1 bg-primary/10 rounded-md flex-col gap-2'
          key={item.label}
        >
          <div className='p-2 rounded-full bg-primary/10'>
            <img src={`/images/footerMessage/${item.image}`} alt={item.label} />
          </div>
          <div className='text-lg font-semibold'>{item.label}</div>
        </div>
      ))}
    </Container>
  );
};

export default FooterMessage;
