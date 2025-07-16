import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProductLayout from './layouts/ProductLayout';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Electronics from './pages/Electronics';
import HomePage from './pages/Home';
import Men from './pages/Men';
import Household from './pages/others/Household';
import Lifestyle from './pages/others/Lifestyle';
import Motor from './pages/others/Motor';
import Sports from './pages/others/Sports';
import ProductDetail from './pages/ProductDetail';
import Women from './pages/Women';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='electronics' element={<Electronics />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='others'>
          <Route path='all-sports' element={<Sports />} />
          <Route path='all-household' element={<Household />} />
          <Route path='all-lifestyle' element={<Lifestyle />} />
          <Route path='all-motor' element={<Motor />} />
        </Route>
      </Route>
      <Route element={<ProductLayout />}>
        <Route
          path='product/:categoryName/:productId'
          element={<ProductDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
