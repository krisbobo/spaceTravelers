import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';

import Nav from './Nav';
import Rockets from './Rockets';
import Missions from './Missions';
import Dragons from './Dragons';
import Profile from './Profile';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <>
          <Nav />
        </>
      </div>
      <div className="container">

        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/rockets" replace />}
          />
          <Route
            path="/rockets"
            element={<Rockets />}
            exact
          />
          <Route
            path="/missions"
            element={<Missions />}
            exact
          />
          <Route
            path="/dragons"
            element={<Dragons />}
            exact
          />
          <Route
            path="/profile"
            element={<Profile />}
            exact
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
