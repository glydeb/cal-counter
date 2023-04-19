import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plates from './components/Plates';
import Login from './components/Login';

function getToken() {
  return sessionStorage.getItem('token');
}

export default function App() {
  const [token, setToken] = React.useState('');
  React.useEffect(
    () => setToken(getToken()),
    []
  );

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" Component={Plates} />
        </Routes>
      </Router>
    </div>
  );
}