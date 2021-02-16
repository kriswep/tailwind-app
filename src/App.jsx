import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import CardPage from './components/Card';
import ButtonPage from './components/Button';

const Home = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div>
      <h1 className="px-4 m-6 text-3xl font-bold text-indigo-900">Hello</h1>
      <p className="px-4 m-6 text-indigo-900 text-l">
        Opened for <code>{count}</code> seconds.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen bg-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <Navbar />
        <div className="flex justify-center flex-1 text-center">
          <Switch>
            <Route path="/card">
              <CardPage />
            </Route>
            <Route path="/button">
              <ButtonPage />
            </Route>
            <Route path="/signin">{/* <About /> */}</Route>
            <Route path="/signup">{/* <About /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
