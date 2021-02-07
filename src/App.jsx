import React, { useState, useEffect } from 'react';

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
    <div className="w-full min-h-screen p-2 bg-blue-900">
      <h1 className="p-2 mb-5 text-3xl font-bold text-blue-100">
        Hello {name}
      </h1>
      <p className="p-2 text-xl text-blue-100">
        Opened for <code>{count}</code> seconds.
      </p>
    </div>
  );
};

export default App;
