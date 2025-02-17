import React from 'react'
import { createBrowser, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavBar from './component/NavBar'
import Filter from './component/Filter'
import NoteCardContainer from './component/NoteCardContainer'
import HomePage from './pages/HomePage'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route index element = {<HomePage />} />
  ))
  return <RouterProvider router={router} />
}

export default App