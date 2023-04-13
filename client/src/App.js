import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Plates from './components/Plates';

class App extends Component {
  render() {
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
}

export default App;