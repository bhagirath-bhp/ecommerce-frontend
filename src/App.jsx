import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import OneProduct from './pages/OneProduct'
import AddProductPage from './pages/admin/AddProductPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import EditProductPage from './pages/admin/EditProductPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import AdminCatalogPage from './pages/admin/AdminCatalogPage'
import WishlistPage from './pages/WishlistPage'
import AllOrdersPage from './pages/AllOrdersPage'
import OrderDetails from './pages/OrderDetails'
import AddressPage from './pages/AddressPage'
import CustomToaster from './components/CustomToaster'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} ></Route>
          <Route path='/products' element={<ProductsPage/>} ></Route>
          <Route path="/product/:productId" element={<OneProduct />} />
          <Route path='/signup' element={<SignUpPage/>} ></Route>
          <Route path='/login' element={<LoginPage/>} ></Route>
          <Route path='/cart' element={<CartPage/>} ></Route>
          <Route path='/about' element={<AboutPage/>} ></Route>
          <Route path='/wishlist' element={<WishlistPage/>} ></Route>
          <Route path='/orders' element={<AllOrdersPage/>} ></Route>
          <Route path='/address' element={<AddressPage/>} ></Route>
          <Route path='/ordersdetails' element={<OrderDetails/>} ></Route>
          <Route path='/admin/product/add' element={<AddProductPage/>} ></Route>
          <Route path="/admin/product/edit:productId" element={<EditProductPage />}></Route>
          <Route path="/admin/catalog/" element={<AdminCatalogPage />}></Route>

        </Routes>
      </BrowserRouter>
      <CustomToaster/>
    </>
  )
}

export default App
