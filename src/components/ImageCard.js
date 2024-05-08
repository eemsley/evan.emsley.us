import React from 'react';

function ImageCard({ title, description, image }) {
  return (
    <div className="flex flex-col justify-center items-center border-gray-400 border-3 bg-gray-400 p-3 rounded-3xl shadow-lg m-4">
      <div className="flex flex-col items-center rounded-2xl shadow md:flex-row md:max-w-xl bg-gray-800">
        <img className=" rounded-l-2xl h-auto w-48" src={require(`../assets/${image}`)} alt="Coming"/>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
        </div>
      </div> 
    </div>
  );
}

export default ImageCard;