import './login.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'http://localhost:5000/auth/login',
        credentials
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='login'>
        <div className='lContainer'>
          <h1 className='lTitle'>Login</h1>
          <div className='item'>
            <label>User name</label>
            <input
              type='text'
              placeholder='username'
              id='username'
              onChange={handleChange}
              className='lInput'
            ></input>
          </div>
          <div className='item'>
            <label>Password</label>
            <input
              type='password'
              placeholder='password'
              id='password'
              onChange={handleChange}
              className='lInput'
            ></input>
          </div>
          <button disabled={loading} className='lButton' onClick={handleClick}>
            Login
          </button>
          {error && <span> {error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
