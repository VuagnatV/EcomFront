import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Navbar from './components/NavBar/navbar';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
        <Route path='orders' element={<Order />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
