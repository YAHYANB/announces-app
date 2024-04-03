import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {faFacebook } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/img/houses/login1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { fetchLogin } from '../redux/AuthReducer';

//  bax tbdl f icon 2la 7sab ila  password kayban ola la2
const EyeIcon = ({ handleClick, isPasswordVisible }) => (
  <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={handleClick}>
    <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash } className="text-gray-500" />
  </div>
);

function LoginPage() {
  const dispatch = useDispatch()
  const location = useNavigate()
    const isLogin =  useSelector(i => i.auth.isLogin);
    const response =  useSelector(i => i.auth.response);
    const status =  useSelector(i => i.auth.status);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const handleForm = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchLogin(userInfo))
  }
  useEffect(()=>{
    console.log(response)
  },[response])
  useEffect(() => {
    if (isLogin) {
      location('/');
    }
  }, [isLogin]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="bg-gray min-h-screen flex items-center justify-center m-4 mb-16">
      <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-4xl w-full lg:w-5/6 p-5 items-center">
        <div className="md:w-1/2 px-4 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
          {response.message && <span className='text-sm text-red-500'>{response.message}</span>}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="p-2 mt-8 rounded-xl border w-full outline-none" type="email" name="email" value={userInfo.email} onChange={handleForm} placeholder="email" />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full outline-none" type={isPasswordVisible ? "text" : "password"} name="password" value={userInfo.password} onChange={handleForm} placeholder="Password" />
              <EyeIcon handleClick={togglePasswordVisibility} isPasswordVisible={isPasswordVisible} />
            </div>
            <button type={status === 'loading' ? 'button' : 'submit'} className="bg-violet-500 rounded-xl text-white py-2 hover:scale-105 duration-300 flex justify-center items-center">
            {status === 'loading' ? '....' :'Login' }
            </button>
            <button className="bg-[#1877F2] rounded-xl text-white py-2 hover:scale-105 duration-300 flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebook} className="mr-3" />
              Login with Facebook
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400 w-full" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400 w-full" />
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to='/register' className="py-2 px-5 bg-white hover:bg-violet-500 hover:text-white border rounded-xl duration-300">Register</Link>
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

export default LoginPage;