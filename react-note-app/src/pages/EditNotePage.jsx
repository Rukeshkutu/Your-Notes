import React ,{useState, useEffect} from 'react'
import './AddNotesPage.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditNotePage = () => {
  const {slug} = useParams()
  const [title, setTitle] = useState('')
  const[body, setBody] = useState('')
  const[category, setCategory] = useState('')
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState('')
  const navigate = useNavigate()

  //Fetch existing note data
  useEffect (() =>{
    const fetchNote = async() => {
      try{
        const response = await axios.get(`http://127.0.0.1:8000/notes/${slug}`)
        const note = response.data.data
        setTitle(note.title)
        setBody(note.body)
        setCategory(note.category)
      } catch(err){
        setError('Fail to load note')
        //console.error('Error fetching note:', err)
      }
    }
    fetchNote()
  }, [slug])
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    setError('');

    const updatedNote = {
      title,
      body, 
      category
    };
    //console.log('sending data:' , updatedNote)
    axios.put(`http://127.0.0.1:8000/notes/${slug}`, updatedNote)
    .then(response => {
      if(response.status === 200){
        navigate(`/notes/${slug}`);
      }
    })
    .catch(err => {
      //console.error("Detailed error:", err.response?.data)
      setError(err.response?.data?.message || "Failed to create note.");
      
    })
    .finally(() => {
      setLoading(false);
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5>Edit Note</h5>
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
          onChange = {(e) => setBody(e.target.value)}
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
            <span className="ms-2">Updating Note...</span>
          </>
        ) : (
          'Update Note'
        )}
      </button>
    </form>
  )
}

export default EditNotePage