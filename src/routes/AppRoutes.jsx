import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
         <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes