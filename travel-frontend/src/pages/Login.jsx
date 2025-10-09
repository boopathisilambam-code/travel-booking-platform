import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setSuccess('');
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);

      setSuccess('Login successful! Redirecting to Home...');
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <><Header/>
    <div 
      className="container" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '450px',
        margin: '150px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f5f7fa',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        paddingRight:'35px'
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Login</h2>

      <div style={{ width: '90%', marginBottom: '10px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div style={{ width: '90%', marginBottom: '15px' }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <button 
        onClick={handleLogin} 
        style={{
          width: '90%',
          padding: '10px',
          backgroundColor: '#d9fdd3',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginLeft:'20px'
        }}
      >
        Login
      </button>

      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '15px' }}>{success}</p>}

      <p style={{ marginTop: '15px' }}>
        Don’t have an account?{' '}
        <span 
          style={{ color: 'blue', cursor: 'pointer' }} 
          onClick={() => navigate('/signup')}
        >
          Signup here
        </span>
      </p>
    </div>
    </>
  );
}
