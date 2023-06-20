import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="relative flex flex-col md:flex-row rounded-xl shadow-lg max-w-xs md:max-w-2xl mx-auto border border-blue-500 border-2 bg-white">
          <div className="w-full md:w-2/5 bg-blue-500 rounded-xl">
            <img src="https://appinventiv.com/wp-content/uploads/sites/1/2021/06/Blockchain-in-Agriculture-And-Food-Industry.png" alt="tailwind logo" className="rounded-xl h-full object-cover" />
          </div>
          <div className="w-full md:w-3/5 bg-white flex justify-center content-center rounded-xl flex-col p-6">
           
            <div className="flex-grow flex justify-center items-center">
              <h3 className="font-black text-blue-500 md:text-3xl text-xl">Oh, you're stuck? Don't worry</h3>
            </div>
            <div className="flex pt-7 md:pt-0 justify-center items-center">
              <p className="text-xl font-black">
                <span className="bg-blue-500 rounded-lg text-white px-6 py-3">
                    Take Help !
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyComponent;
