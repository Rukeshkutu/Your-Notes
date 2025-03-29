import React, { useState } from 'react'
import './AddNotesPage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify';

const AddNotesPage = () => {
  const [title, setTitle] = useState('')
  const[body, setBody] = useState('')
  const[category, setCategory] = useState('')
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    setError('');

    const newNote = {
      title,
      body, 
      category
    };
    //console.log('sending data:' , newNote)
    axios.post('http://127.0.0.1:8000/notes/', newNote)
    .then(response => {
      if(response.status === 201){
        navigate('/');
      }
      toast.success("A new note has been added.")
    })
    .catch(err => {
      setError(err.response?.data?.message || "Failed to create note.");
      //console.error("Error creating notes:", err);
    })
    .finally(() => {
      setLoading(false);
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Note</h5>
      {error && <div className='alert alert-danger'>{error}</div>}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          ></textarea>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note's category
        </label>
      <select className="form-select" aria-label="Default select example" style={{height: "40px"}} value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option selected>Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

        


      <button type='submit' className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}} disabled={loading}>
        {loading ? (
            <>
              <span 
                className="spinner-border spinner-border-sm" 
                role="status" 
                aria-hidden="true"
              ></span>
              <span className="ms-2">Adding Note...</span>
            </>
          ) : (
            'Add Note'
          )}

      </button>
    </form>
  )
}

export default AddNotesPage