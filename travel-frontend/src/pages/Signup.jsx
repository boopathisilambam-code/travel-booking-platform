import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Signup() {
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        password,
      });

      setSuccess('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Signup failed. Try again.');
      }
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
    maxWidth: '400px',
    margin: '150px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f5f7fa',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  }}
>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>

  <form onSubmit={handleSignup} style={{ width: '100%' }}>
    
    <div style={{ marginBottom: '15px' }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '90%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: '90%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <button 
      type="submit"
      style={{
         width: '90%',
      padding: '10px',
      backgroundColor: '#d9fdd3',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginLeft:'10px'
      }}
    >
      Signup
    </button>
  </form>

  {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
  {success && <p style={{ color: 'green', marginTop: '15px' }}>{success}</p>}

  <p style={{ marginTop: '15px' }}>
    Already have an account?{' '}
    <span 
      style={{ color: 'blue', cursor: 'pointer' }} 
      onClick={() => navigate('/login')}
    >
      Login here
    </span>
  </p>
</div>
</>

  );
}
