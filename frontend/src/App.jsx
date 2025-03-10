import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from './SignInComponents/CreateAccount';
import Signin from './Singin'
import Home from './Home'
import "./App.css"
import SignInForm from './SignInComponents/SignInForm';
import Profile from './Profile';





const App = () =>{


  return(
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path='SignIn' element={<SignInForm/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Profile" element={<Profile/>}/>
      </Routes>
  </Router>
  )
}
export default App;
