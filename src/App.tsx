import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Cart from './pages/Cart';
import HomePage from './pages/Home';
import Men from './pages/Men';
import ProductDetail from './pages/ProductDetail';
import WomenHomepage from './pages/WomenHomepage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<WomenHomepage />} />
        <Route path='product/:productId' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
      </Route>
      <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
