import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import FetchPosts from './components/FetchPosts'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <h1>Titulo do Menu</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/fetch-posts" element={<FetchPosts/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
