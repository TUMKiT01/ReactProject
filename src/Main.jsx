import Login from './components/Login';
import App from './App';   
import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";



function  Main() {
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Login />
  // }
  return (
        // <div><App /></div>
    <Router>
      <Routes>
        <Route path="/login.com" caseSensitive={false} element={<Login />} />
        <Route path="/" caseSensitive={true} element={<App />} />
       
      </Routes>
    </Router>
  );
};

export default Main;