import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import CardPage from './components/Card';

const Home = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <>
      <h1 className="px-4 m-6 text-3xl font-bold text-indigo-100">Hello</h1>
      <p className="px-4 m-6 text-indigo-100 text-l">
        Opened for <code>{count}</code> seconds.
      </p>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-indigo-900">
        <Navbar />

        <Switch>
          <Route path="/card">
            <CardPage />
          </Route>
          <Route path="/pricing">{/* <About /> */}</Route>
          <Route path="/signin">{/* <About /> */}</Route>
          <Route path="/signup">{/* <About /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
