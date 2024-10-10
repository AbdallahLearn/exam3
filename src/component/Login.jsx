import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/users';

  const validation = () => {
    if (!email) {
      setMessage("Email is required");
      return false;
    }
    if (!password) {
      setMessage("Password is required");
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return false;
    }
    setMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await axios.get(url);
        const foundUser = response.data.find(user => user.email === email && user.password === password);
        
        if (foundUser) {
          alert('Login successful');
          localStorage.setItem('username',user.name )
          navigate('/home');
        } else {
          setMessage("Invalid email or password");
        }
      } catch (error) {
        console.error("Error during login:", error);
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="shadow-lg w-[60%] m-auto p-20 flex items-center mt-40 bg-center bg-no-repeat max-sm:w-[95%]" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/18/f5/df/18f5dfd7d6b71e85718e83386f194114.jpg)' }}>
        <div className="container w-96 m-auto">
          <h1 className="text-3xl text-center max-sm:text-lg text-white font-bold">Log<span className="text-black">in</span></h1>
          
          <label className="input input-bordered flex items-center gap-2 mt-5 opacity-90">
            <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-5 opacity-90">
            <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {message && <p className="text-red-500 text-center">{message}</p>}
          <p className="text-white">Create account? <Link to='/' className="text-blue-400 font-bold">Signup</Link></p>
          <button className="btn w-full mt-5 text-lg bg-blue-400 text-white" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
