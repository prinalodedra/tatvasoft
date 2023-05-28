import './App.css';


import Register from './Pages/Register';
import Login from './Pages/Login';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
       
        <Route path='/register' Component={Register} />
        <Route path='/' Component={Register} />
        <Route path='/productList' Component={ProductList} />
        <Route path='/login' Component={Login} />
        
      </Routes>
      
    </BrowserRouter>
    <ToastContainer />
    
    </>
  );
}

export default App;