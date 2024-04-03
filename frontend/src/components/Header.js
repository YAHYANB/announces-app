import React, { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import Avatar from '../assets/img/agents/agent1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { fetchLogout } from '../redux/AuthReducer';
const Header = () => {

  const isLogin =  useSelector(i => i.auth.isLogin) || JSON.parse(localStorage.getItem('token'));
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  const location = useNavigate()


  const handleLogout = () => {
    setShowMenu(false);
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    if (token) {
      dispatch(fetchLogout(token))
      localStorage.removeItem('token')
      location('/')
    }
  };

  return (
    <header className='py-5 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {!isLogin ? (
          <div className='flex items-center gap-6'>
            <Link
              to='/login'
              className='hover:text-violet-900 transition'
            >
              Log in
            </Link>
            <Link
              to='/register'
              className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className='flex items-center gap-10'>
            <div className='flex gap-x-6 mr-11'>
              <Link
                to='/'
                className='hover:text-violet-900 transition hidden md:flex lg:flex'
              >
                Home
              </Link>
              <Link
                to='/my-announces'
                className='hover:text-violet-900 transition hidden md:flex lg:flex'
              >
                My Announces
              </Link>
              <Link
                to='/add-announce'
                className='hover:text-violet-900 transition hidden md:flex lg:flex'
              >
                Create Announce
              </Link>
            </div>
            <div
              className='relative'
              onClick={() => setShowMenu(!showMenu)}
            >
              <Link
                className='transition block items-center justify-center text-center'
              >
                <img
                  src={Avatar}
                  alt=''
                  className='rounded-full w-14'
                />
                <div>Anna</div>
              </Link>
              {showMenu && (
                <div className='absolute top-full right-0 bg-white shadow-md rounded-lg py-4 w-60 px-4 z-10 text-start'>
                  <ul>
                    <li>
                      <Link
                        to='/'
                        className='hover:text-violet-900 transition md:hidden'
                      >
                        Home
                      </Link>

                    </li>
                    <li>
                      <Link
                        to='/add-announce'
                        className='hover:text-violet-900 transition md:hidden'
                      >
                        Create Announce
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/my-announces'
                        className='hover:text-violet-900 transition md:hidden'
                      >
                        My Announces
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/profile'
                        className='hover:text-violet-900'
                      >
                        Profile
                      </Link>  
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className='hover:text-violet-900'
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
