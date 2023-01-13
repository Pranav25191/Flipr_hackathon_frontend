import { useState } from 'react'
import './App.css'
import CompanyDetails from './components/CompanyDetails'
import NiftyBSE from './components/NiftyBSE.jsx'

function App() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center mb-20 gap-20">
      <NiftyBSE/>
    </div>
  )
}

export default App
