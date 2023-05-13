import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plates from './components/Plates';
import Login from './components/Login';

function getToken() {
  return sessionStorage.getItem('token');
}

export default function App() {
  const [user, setUser] = React.useState({});
  React.useEffect(
    () => setUser({firstname: "", token: getToken()}),
    []
  );

  if (!user.token) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Plates user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}