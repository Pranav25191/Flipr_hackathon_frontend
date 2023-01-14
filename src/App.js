import React from 'react';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import NiftyBSE from './components/NiftyBSE.jsx';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login.jsx';
import Loader from './components/Loader.jsx';
import SignUp from './SignUp.jsx';
function App() {
  console.log('x');
  return (

    <div className="w-full min-h-screen h-fit flex flex-col items-center justify-center gap-5">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<NiftyBSE/>}></Route>
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


// function App() {
//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center mb-20 gap-4 border-2 border-red-700">
//       <Navbar/>
//       <Routes>
//         <Route path ='/company' element={<NiftyBSE/>}></Route>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App;



