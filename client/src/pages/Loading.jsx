import React from 'react';
import { Loader } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { Startloading,Stoploading } from '../redux/sclice/LodingSlice';


const Loading = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.loading); // Accessing loading from state

  return (
    <div className='flex justify-center items-center'>
      {/* Show loader if loading is true */}
      {loading ? (
        <Loader color="blue" />
      ) : (
        <p>Loading complete!</p> // Optional message after loading stops
      )}

      <div className="ml-4">
        {/* Buttons to start and stop loading */}
        <button 
          onClick={() => dispatch(Startloading())} 
          disabled={loading} // Disable button if loading is true
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start
        </button>
        <button 
          onClick={() => dispatch(Stoploading())} 
          disabled={!loading} // Disable button if loading is false
          className="px-4 py-2 bg-red-500 text-white rounded ml-2"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Loading;
