import React from 'react';
import { useState } from 'react';
function Profile() {
  const [isEditing, srtIsEditing] = useState(false)
  const handleEditClick = () => {
    srtIsEditing(!isEditing);
  };

  return (
    <div className='flex justify-center mt-5'>
      <div className="bg-white shadow-lg w-full rounded lg:w-2/4 m-5 p-5">
        <div className="flex justify-center">
          <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="mt-2 rounded-full mx-auto w-32 h-32 shadow-md border-4 border-white" />
        </div>
        <div className="w-full mt-5">
          <div className="overflow-hidden text-sm">
            {isEditing ? (<div className="pb-6">
              <label htmlFor="username" className="font-semibold text-gray-700 block pb-1">Profile PictureS</label>
              <input
                id="username"
                className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-700 focus:outline-none dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-400 p-2'
                type="file"
                accept='image/*'
              />
            </div>) : ("")}
            <div className="pb-6">
              <label htmlFor="username" className="font-semibold text-gray-700 block pb-1">Username</label>
              <input
                id="username"
                className={`h-10 outline-none w-full bg-violet-100 border-1 rounded px-4 py-2 ${isEditing ? '' : 'cursor-not-allowed opacity-50'}`}
                type="text"
                defaultValue="yahya"
                disabled={!isEditing}
              />
            </div>
            <div className="pb-6">
              <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email</label>
              <input
                id="email"
                className={`h-10 outline-none w-full bg-violet-100 border-1 rounded px-4 py-2 ${isEditing ? '' : 'cursor-not-allowed opacity-50'}`}
                type="email"
                defaultValue="example@example.com"
                disabled={!isEditing}
              />
            </div>
            <div className="pb-6">
              <label htmlFor="city" className="font-semibold text-gray-700 block pb-1">City</label>
              <input
                id="city"
                className={`h-10 outline-none w-full bg-violet-100 border-1 rounded px-4 py-2 ${isEditing ? '' : 'cursor-not-allowed opacity-50'}`}
                type="text"
                defaultValue="New York"
                disabled={!isEditing}
              />
            </div>
            <div className="pb-6">
              <label htmlFor="phone" className="font-semibold text-gray-700 block pb-1">Phone Number</label>
              <input
                id="phone"
                className={`h-10 outline-none w-full bg-violet-100 border-1 rounded px-4 py-2 ${isEditing ? '' : 'cursor-not-allowed opacity-50'}`}
                type="text"
                defaultValue="123-456-7890"
                disabled={!isEditing}
              />
            </div>
            <div className="pb-6">
              <label htmlFor="password" className="font-semibold text-gray-700 block pb-1">Password</label>
              <input
                id="password"
                className={`h-10 outline-none w-full bg-violet-100 border-1 rounded px-4 py-2 ${isEditing ? '' : 'cursor-not-allowed opacity-50'}`}
                type="password"
                defaultValue="********"
                disabled={!isEditing}
              />
            </div>
            <div className="mt-4 text-center">
              <button onClick={handleEditClick} className="-mt-2 text-md rounded-sm font-bold text-white bg-violet-500 px-5 py-2 hover:bg-gray-800">
                {isEditing ? 'Save Changes' : 'Edit Informations'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;