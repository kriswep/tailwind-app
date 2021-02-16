import React from 'react';

export const Button = () => {
  return (
    <button className="p-2 px-5 m-1 font-bold text-pink-900 transition-colors duration-300 border-4 border-pink-800 rounded-lg hover:border-pink-600">
      Click
    </button>
  );
};

const ButtonPage = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-start flex-1 gap-6 px-2 py-8">
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default ButtonPage;
