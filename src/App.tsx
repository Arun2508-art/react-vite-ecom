import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
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
import WomenHomepage from './pages/WomenHomepage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<WomenHomepage />} />
        <Route path='electronics' element={<Electronics />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='others'>
          <Route path='all-sports' element={<Sports />} />
          <Route path='all-household' element={<Household />} />
          <Route path='all-lifestyle' element={<Lifestyle />} />
          <Route path='all-motor' element={<Motor />} />
        </Route>
        <Route
          path='product/:categoryName/:productId'
          element={<ProductDetail />}
        />
      </Route>
      <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
