import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import OneProduct from './pages/OneProduct'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import WishlistPage from './pages/WishlistPage'
import AllOrdersPage from './pages/AllOrdersPage'
import OrderDetails from './pages/OrderDetails'
import AddressPage from './pages/AddressPage'
import Error500 from './pages/Error500'
import SuccessPage from './pages/SucessPage'
import ProfilePage from './pages/ProfilePage'
import ProductPageByCollection from './pages/ProductPageByCollection'

import CustomToaster from './components/CustomToaster'

import AddProductPage from './pages/admin/AddProductPage'
import EditProductPage from './pages/admin/EditProductPage'
import AdminCatalogPage from './pages/admin/AdminCatalogPage'
import AllOrdersAdminPage from './pages/admin/AllOrdersAdminPage'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} ></Route>
          <Route path='/products' element={<ProductsPage/>} ></Route>
          <Route path='/collection/:collectionId' element={<ProductPageByCollection/>} ></Route>
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
          <Route path='/error/:eid' element={ <Error500/> } ></Route>
          <Route path='/success' element={ <SuccessPage/> } ></Route>
          <Route path='/profile' element={ <ProfilePage/> } ></Route>
          <Route path='/admin/orders' element={<AllOrdersAdminPage/>} ></Route>
        </Routes>
      </BrowserRouter>
      <CustomToaster/>
    </>
  )
}

export default App
