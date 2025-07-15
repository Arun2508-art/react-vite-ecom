import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProductLayout;
