import React from 'react';

const Card = () => {
  return (
    // <div className="flex justify-center min-w-full min-h-screen pt-8 bg-gray-300">
    <section className="m-1 transition-shadow duration-300 bg-gray-200 shadow-sm hover:shadow-2xl w-72 rounded-2xl">
      <div className="relative">
        <img
          src={`https://source.unsplash.com/400x300/?house,${Math.random()}`}
          alt="a nice house"
          className="w-full h-56 bg-gray-400 rounded-t-2xl"
        />
        <button
          className="absolute p-1 bg-gray-200 rounded-md shadow top-4 right-4"
          aria-label="save object"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-600 "
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-start p-4 pt-6 space-y-2">
        <p className="p-1 pl-3 pr-3 text-xs text-yellow-800 bg-red-200 rounded-xl">
          House
        </p>
        <h2 className="text-lg font-bold">Living your dream</h2>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-light text-gray-600">Berlin, Germany</p>
        </div>
        <div className="flex self-stretch justify-between pt-4 space-x-4">
          <div className="flex space-x-2">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-yellow-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-bold">4</span>
            </div>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-yellow-600"
              >
                <path
                  fillRule="evenodd"
                  d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <p className="font-bold">
            $2100 <span className="font-light text-gray-600">per month</span>
          </p>
        </div>
      </div>
    </section>
    // </div>
  );
};

const CardPage = () => {
  return (
    <div className="flex flex-wrap items-baseline justify-center flex-1 min-w-full gap-6 px-2 py-8 bg-purple-500 from-purple-300 to-purple-500 bg-gradient-to-br">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardPage;
