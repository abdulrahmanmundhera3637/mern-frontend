import React from 'react';
import { IoMdClose } from 'react-icons/io';

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50'>
      <div className='bg-white shadow-lg rounded max-w-[30vw] max-h-[70vh] relative p-4'>
        <div
          className="absolute top-2 right-2 cursor-pointer text-2xl hover:text-red-600"
          onClick={onClose}
        >
          <IoMdClose />
        </div>
        <div className='flex justify-center items-center h-full'>
          <img
            src={imgUrl}
            className='max-w-full max-h-full object-contain'
            alt='Enlarged view'
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
