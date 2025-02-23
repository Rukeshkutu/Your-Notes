import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavBar from './component/NavBar'
import Filter from './component/Filter'
import NoteCardContainer from './component/NoteCardContainer'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AddNotesPage from './pages/AddNotesPage'
import NoteDetailPage from './pages/NoteDetailPage'
//import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element = {<HomePage />} />
    <Route path='/add-note' element = {<AddNotesPage />} /> {/* here the path must be same in the nav bar addnotes link */}
    <Route path = '/note-detail' element={<NoteDetailPage />} />
  </Route>
  ))
  return <RouterProvider router={router} />
}

export default App