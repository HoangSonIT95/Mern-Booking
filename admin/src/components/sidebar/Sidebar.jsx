import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { dispatchAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchAuth({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Booking Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>{' '}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>{' '}
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/hotels' style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className='icon' />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to='/rooms' style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className='icon' />
              <span>Rooms</span>
            </li>
          </Link>
          <Link to='/transactions' style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Transactions</span>
            </li>{' '}
          </Link>
          <p className='title'>USER</p>
          <li>
            <ExitToAppIcon className='icon' />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
