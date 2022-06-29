import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home/Home'
import Loader from './components/Loader/Loader'
import Form from './components/Form/Form'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      { loading ? (
        <Loader setLoading={setLoading} />
      ) : (
       <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/form' element={<Form />} /> 
       </Routes>
      )}
    </div>
  );
}

export default App;
