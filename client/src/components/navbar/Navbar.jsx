import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = e => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <span className='logo'>Booking</span>
        </Link>
        {user ? (
          <div className='navItems'>
            <span>{user?.details.email}</span>
            <Link
              to='/transactions'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <button className='navButton'>Transactions</button>
            </Link>
            <button className='navButton' onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className='navItems'>
            <Link
              to='/signup'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <button className='navButton'>Sign Up</button>
            </Link>
            <Link
              to='/login'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <button className='navButton'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
