import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/img/houses/sign.jpg'
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { fetchRegister } from '../redux/AuthReducer';

//  bax tbdl f icon 2la 7sab ila  password kayban ola la2
const EyeIcon = ({ handleClick, isPasswordVisible }) => (
  <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={handleClick}>
    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} className="text-gray-500" />
  </div>
);

function SignPage() {
  const dispatch = useDispatch()
  const location = useNavigate()
  const isLogin =  useSelector(i => i.auth.isLogin);
  const response =  useSelector(i => i.auth.response);
  const status =  useSelector(i => i.auth.status);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    phone_num: '',
    password: '',
    city: ''
  })

  const handleForm = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (isLogin) {
      location('/');
    }
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchRegister(userInfo))
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="bg-gray min-h-screen flex items-center justify-center mb-16 m-4">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl w-full lg:w-5/6 p-5 items-center">
        <div className="md:w-1/2 px-4 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="p-2 mt-8 rounded-xl border w-full outline-none" type="text" name="username" value={userInfo.username} onChange={handleForm} placeholder="Full name" />
            {response.error && response.error.username && <span className='text-[12px] text-red-700'>{response.error.username[0]}</span>}

            <input className="p-2 rounded-xl border w-full outline-none" type="email" name="email" value={userInfo.email} onChange={handleForm} placeholder="Email" />
            {response.error && response.error.email && <span className='text-[12px] text-red-700'>{response.error.email[0]}</span>}
            
            <input className="p-2 rounded-xl border w-full outline-none" type='number' name="phone_num" value={userInfo.phone_num} onChange={handleForm} placeholder="Phone Number" />
            {response.error && response.error.phone_num && <span className='text-[12px] text-red-700'>{response.error.phone_num[0]}</span>}
            <div className="relative">
              <input className="p-2 rounded-xl border w-full outline-none" type={isPasswordVisible ? "text" : "password"} name="password" value={userInfo.password} onChange={handleForm} placeholder="Password" />
              <EyeIcon handleClick={togglePasswordVisibility} isPasswordVisible={isPasswordVisible} />
            </div>
            {response.error && response.error.password && <span className='text-[12px] text-red-700'>{response.error.password[0]}</span>}
            <select name="city" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" value={userInfo.city} onChange={handleForm} required>
              <option value="">Select City</option>
              <option value="agadir">Agdair</option>
              <option value="rabat">Rabat</option>
              <option value="marakech">Marakech</option>
            </select>
            {response.error && response.error.city && <span className='text-[12px] text-red-700'>{response.error.city[0]}</span>}
          
            <button type={status === 'loading' ? 'button' : 'submit'} className="bg-violet-500 rounded-xl text-white py-2 hover:scale-105 duration-300 flex justify-center items-center">
              {status === 'loading' ? '....' : 'Sin Up'}
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
