import {Routes, Route, Navigate} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Cart from './components/Cart'
import Restaurants from './components/Restaurants'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/restaurants' element={<Restaurants/>}/>
      <Route path='*' element={<Navigate to="/not-found"/>} />
      <Route path='/not-found' element={<NotFound/>} />
    </Routes>
    
  );
}

export default App;
