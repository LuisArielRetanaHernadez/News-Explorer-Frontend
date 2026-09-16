import { useState } from 'react'

import { Routes, Route } from 'react-router'

import './App.css'

function App() {

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/save-news" element={<h1>Save News</h1>} />
      </Routes>
    </section>
  )
}

export default App
