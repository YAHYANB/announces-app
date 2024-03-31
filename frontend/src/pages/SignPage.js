import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/img/houses/sign.jpg'
import { Link } from 'react-router-dom';

//  bax tbdl f icon 2la 7sab ila  password kayban ola la2
const EyeIcon = ({ handleClick, isPasswordVisible }) => (
  <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={handleClick}>
    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} className="text-gray-500" />
  </div>
);

function SignPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="bg-gray min-h-screen flex items-center justify-center mb-16 m-4">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl w-full lg:w-5/6 p-5 items-center">
        <div className="md:w-1/2 px-4 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
          <form className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border w-full outline-none" type="text" name="name" placeholder="full name" />
            <input className="p-2 rounded-xl border w-full outline-none" type="email" name="email" placeholder="email" />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full outline-none" type={isPasswordVisible ? "text" : "password"} name="password" placeholder="Password" />
              <EyeIcon handleClick={togglePasswordVisibility} isPasswordVisible={isPasswordVisible} />
            </div>
            <select name="propertyType" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required>
                <option value="">Select City</option>
                <option value="house">Agdair</option>
                <option value="apartment">Rabat</option>
                <option value="villa">Marakech</option>
              </select>
            <button className="bg-violet-500 rounded-xl text-white py-2 hover:scale-105 duration-300 flex justify-center items-center">
              Sin Up
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400 w-full" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400 w-full" />
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>I have an account!</p>
            <Link to='/login' className="py-2 px-5 bg-white hover:bg-violet-500 hover:text-white border rounded-xl duration-300">Login</Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src={Image}
            alt="Login"
          />
        </div>
      </div>
    </section>
  );
}

export default SignPage;
