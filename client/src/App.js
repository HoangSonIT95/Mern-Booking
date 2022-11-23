import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import Hotels from './pages/hotels/Hotels';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Transaction from './pages/transaction/Transaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/transactions' element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
