import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AddNotesPage from './pages/AddNotesPage'
import NoteDetailPage from './pages/NoteDetailPage'

import ErrorPage from './pages/ErrorPage'



const App = () => {
  
  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<MainLayout />} errorElement = {<ErrorPage />}>
   <Route 
  index 
  element={<HomePage />} 
/>
    <Route path='/add-note' element = {<AddNotesPage  />} /> {/* here the path must be same in the nav bar addnotes link */}
    <Route path='/notes/:slug' element = {<NoteDetailPage /> } />
    
  </Route> 
  ))
  return <RouterProvider router={router} />
}

export default App