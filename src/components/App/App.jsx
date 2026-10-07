import './App.css'

import Home from '../Home/Home.jsx'

import LayoutHeader from '../layouts/LayoutHeader/LayoutHeader.jsx'

import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route element={<LayoutHeader />}>
          <Route index element={<Home />} />
          <Route path="save-news" element={<h1>Save News</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
