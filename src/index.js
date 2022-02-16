import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tw-elements';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Idcard from './containers/idcard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route index element={<App />} />
      <Route path="/idcards" element={<Idcard />} />
    </Routes>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

