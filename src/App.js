import React from 'react';
import './App.css';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import UsersList from './components/dashboard/usersList';

function App() {
  return (
    <div className="App">
      <Login />   
      <Register />  
      <UsersList /> 
    </div>
  );
}

export default App;
