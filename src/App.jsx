import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const App = (props) => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const { name } = props;
  return (
    <div className="w-full min-h-screen bg-indigo-900">
      <Navbar />
      <h1 className="px-4 m-6 text-3xl font-bold text-indigo-100">
        Hello {name}
      </h1>
      <p className="px-4 m-6 text-indigo-100 text-l">
        Opened for <code>{count}</code> seconds.
      </p>
    </div>
  );
};

export default App;
