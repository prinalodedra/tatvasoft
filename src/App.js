import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={Register} />
          <Route path='/productlist' Component={ProductList} />
          <Route path='/Cart' Component={Cart} />
          <Route path='/' Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
