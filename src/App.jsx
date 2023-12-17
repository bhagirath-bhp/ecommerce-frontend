import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/Productpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} ></Route>
          <Route path='/product' element={<ProductsPage/>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
