import React, { useState } from 'react'
import AuthPage from './pages/AuthPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [user ,setUser] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App