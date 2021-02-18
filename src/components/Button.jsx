import React from 'react';

export const OutlineButton = () => {
  return (
    <button className="p-2 px-5 m-1 font-bold text-pink-900 transition-colors duration-300 border-4 border-pink-800 rounded-lg hover:border-pink-600">
      Click
    </button>
  );
};

export const FullButton = () => {
  return (
    <button className="p-3 px-6 m-1 font-bold text-pink-200 transition-colors duration-300 bg-purple-700 rounded-lg hover:bg-purple-900">
      Click
    </button>
  );
};

const ButtonPage = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-start flex-1 gap-6 px-2 py-8">
      <OutlineButton />
      <FullButton />
      <OutlineButton />
    </div>
  );
};

export default ButtonPage;
