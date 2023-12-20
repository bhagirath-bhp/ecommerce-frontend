import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/Productpage'
import OneProduct from './pages/OneProduct'
import AddProductPage from './pages/admin/AddProductPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} ></Route>
          <Route path='/product' element={<ProductsPage/>} ></Route>
          <Route path='/oneproduct' element={<OneProduct/>} ></Route>
          <Route path='/admin/:authid' element={<AddProductPage/>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
