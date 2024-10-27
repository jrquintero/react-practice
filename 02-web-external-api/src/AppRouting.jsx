import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Characters from './pages/Characters';

function Layout() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
    </nav>
    <Outlet />
    </>
  );
}

function AppRouting() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="characters" element={<Characters />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouting