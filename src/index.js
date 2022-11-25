import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './context/Store';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#FF6600',
  secondaryColor: '#FBAF7D',
  grayColor: '#F7F8F9',
  liteBlackColor: '#00000026',
  whiteColor: '#ffffff',
  blackColor: '#000000'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App key='app_key' />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
