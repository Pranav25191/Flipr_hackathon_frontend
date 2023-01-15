import React from 'react';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import NiftyBSE from './components/NiftyBSE.jsx';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login.jsx';
import Loader from './components/Loader.jsx';
import SignUp from './SignUp.jsx';
import {PublicRoute,PrivateRoute} from "./ProtectedRoutes"
function App() {
  console.log('x');
  return (

    <div className="w-full min-h-screen h-fit flex flex-col items-center justify-center gap-5">
      <Navbar/>
      <Routes>
            <Route
            path="/"
            element={
                <PrivateRoute>
                    <NiftyBSE />
                </PrivateRoute>
            }
        />
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signUp' element={<SignUp/>}></Route>
      </Routes>
      <div className='w-full mt-auto'>
        <Footer/>
      </div>
    </div>

    
  )
}
export default App;





