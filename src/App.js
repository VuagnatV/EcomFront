import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar/navbar';
import navbarBulma from './components/NavBar/navbarBulma';
import { Product } from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='product/:id' element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
