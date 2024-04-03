import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import { configureStore } from '@reduxjs/toolkit';
import AnnounceReducer from './redux/AnnounceReducer';
import { Provider } from 'react-redux';
import AuthReducer from './redux/AuthReducer';

const store = configureStore({
  reducer:{
    announces: AnnounceReducer,
    auth: AuthReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </HouseContextProvider>
  
);
