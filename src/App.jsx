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
    <div className="p-2">
      <h1 className="text-4xl p-2 rounded-md shadow-md text-white bg-black mb-5">
        Hello {name}
      </h1>
      <p className="text-xl p-2 rounded-md shadow-md text-green-200 bg-green-800">
        Opened for <code>{count}</code> seconds.
      </p>
    </div>
  );
};

export default App;
