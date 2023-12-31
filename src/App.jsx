import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/Productpage'
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
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} ></Route>
          <Route path='/products' element={<ProductsPage/>} ></Route>
          <Route path='/oneproduct' element={<OneProduct/>} ></Route>
          <Route path='/signup' element={<SignUpPage/>} ></Route>
          <Route path='/login' element={<LoginPage/>} ></Route>
          <Route path='/cart' element={<CartPage/>} ></Route>
          <Route path='/about' element={<AboutPage/>} ></Route>
          <Route path='/wishlist' element={<WishlistPage/>} ></Route>
          <Route path='/allorders' element={<AllOrdersPage/>} ></Route>
          <Route path='/orderdetails' element={<OrderDetails/>} ></Route>
          <Route path='/admin/add-product/' element={<AddProductPage/>} ></Route>
          <Route path="/admin/edit-product/:productId" element={<EditProductPage />}></Route>
          <Route path="/admin/catalog/" element={<AdminCatalogPage />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
