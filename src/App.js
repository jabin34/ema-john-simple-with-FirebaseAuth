
import { AccordionButton } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Boot from './components/Boot/Boot';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Orders/Order';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Shop></Shop>}> </Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path='/product' element={<Order/>}> </Route>
        <Route path='/inventory' element={<Inventory/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<Signup/>}> </Route>
      </Routes>
     
    {/* <Boot></Boot> */}
    </div>
  );
}

export default App;
