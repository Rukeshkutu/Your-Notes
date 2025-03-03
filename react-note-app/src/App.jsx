import React, {useEffect, useState} from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavBar from './component/NavBar'
import Filter from './component/Filter'
import NoteCardContainer from './component/NoteCardContainer'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AddNotesPage from './pages/AddNotesPage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from 'axios'
import {TbError404Off} from 'react-icons/tb'
import ErrorPage from './pages/ErrorPage'
//import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

const App = () => {
  const[notes, setNotes] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  const fetchNotes = async() => {
    try {
      const response = await api.get('/notes/');
      setNotes(response.data.data);
      console.log(response.data.data)
      setError(null);
    }catch (err) {
      setError(err.message);
      console.error('Error fetching Notes.', err.response?.data || err.message);
    } finally{
      setLoading(false);
    }
  };

  useEffect(() =>{
    fetchNotes();

  }, []);
  /*useEffect(()=> {
    axios.get('http://127.0.0.1:8000/notes/')
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
    })
    .catch(err =>{
      console.log(err.message)
    })
  }, [])*/


  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<MainLayout />} errorElement = {<ErrorPage />}>
    <Route index element = {<HomePage notes = {notes} loading={loading} error = {error} />} />
    <Route path='/add-note' element = {<AddNotesPage refreshNotes = {fetchNotes} />} /> {/* here the path must be same in the nav bar addnotes link */}
    
    <Route path='/notes/:slug' element = {<NoteDetailPage />} 
      loader = {async(params) => {
        try{
          const response = await api.get(`/notes/${params.slug}/`);
          return response.data;
        }catch(err){
          throw new Response('Not Found', {status:404});
        }
      }}
    />

    <Route path = '/notes/:slug/edit' element={<EditNotePage refreshNotes={fetchNotes} />} 
      loader = {async({params}) => {
        try{
          const response =await api.get(`/notes/${params.slug}/`);
          return response.data;

        }catch(err){
          throw new Response('Not Found', {status:404});
        }
      }}
    />
  </Route>
  ))
  return <RouterProvider router={router} />
}

export default App