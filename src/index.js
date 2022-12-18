import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from './Components/Button';
import { UserBox } from './Components/Userbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='login-box'>
      <h2>LOGIN</h2>
      <form>
        <UserBox type="text" label="User" />
        <UserBox type="password" label="Password" />
        <Button content="ENTER" />
      </form>
    </div>
  </React.StrictMode>
);
