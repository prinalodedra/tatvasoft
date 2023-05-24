
import './App.css';


import Register from './Pages/Register';
import Login from './Pages/Login';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
       
        <Route path='/Register' Component={Register} />
        <Route path='/' Component={Register} />
        <Route path='/ProductList' Component={ProductList} />
        <Route path='/Login' Component={Login} />
        
      </Routes>
    </BrowserRouter>
  
   
    </>
  );
}

export default App;