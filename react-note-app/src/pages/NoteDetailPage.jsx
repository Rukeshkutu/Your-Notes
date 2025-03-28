import React, { useEffect, useState } from 'react'
import { FiEdit } from "react-icons/fi"
import { BiSolidTrashAlt } from "react-icons/bi"
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./NoteDetailPage.css"

const NoteDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/notes/${slug}`)
      .then(res => {
        console.log("API response:", res.data.data)
        if (res.data && res.data.data) {
          setNote(res.data.data)
        } else {
          setError("Invalid note format received")
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching note:", err)
        setError("Failed to load note. It might not exist.")
        setLoading(false)
        
      })
  }, [slug])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  if (loading) {
    return (
      <div className='text-center py-5'>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading..</span>
        </div>
        <p className='mt-2'>Loading Note...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='alert alert-danger mx-3 mt-3' role='alert'>
        {error}
      </div>
    )
  }

  return (
    <div className="note-container">
      {note ? (
        <>
          <h3 className="title">{note.title}</h3>
          <span className="d-flex justify-content-center">
            <p className="note-date font-12 text-muted me-5">
              Created: {formatDate(note.created_at)}
            </p>
            <p className="note-date font-12 text-muted me-5">
              Last updated: {formatDate(note.updated_at)}
            </p>
          </span>
          <span className="button-group">
            <Link to={`/edit-note/${note.slug}`}>
              <button className="btn btn-primary">
                <FiEdit /><span>Edit</span>
              </button>
            </Link>
            <button className="btn btn-danger">
              <BiSolidTrashAlt /><span>Delete</span>
            </button>
          </span>
          <p className="description">{note.body}</p>
        </>
      ) : (
        <p className="text-center">No note data available</p>
      )}
    </div>
  )
}

export default NoteDetailPage



//     return (
//         <div className="note-container">
//         <h3 className="title">{note.title}</h3>
//         <span className="d-flex justify-content-center">
//             <p className="note-date font-12 text-muted me-5">
//             Created: {formatDate(note.created_at)}
//             </p>
//             <p className="note-date font-12 text-muted me-5">
//             Last updated: {formatDate(note.updated_at)}
//             </p>
//         </span>
//         <span className="button-group">
//             <Link to=''>
//             <button className="btn btn-primary">
//                 <FiEdit /><span>Edit</span>
//             </button>
//             </Link>
//             <button className="btn btn-danger">
//             <BiSolidTrashAlt /><span>Delete</span>
//             </button>
//         </span>
//         <p className="description">{note.body}</p>
//         </div>
//     )
// }

// export default NoteDetailPage



// // import React from 'react'
// // import {FiEdit} from "react-icons/fi"
// // import {BiSolidTrashAlt} from "react-icons/bi"
// // import "./NoteDetailPage.css"
// // import { Link } from 'react-router-dom'
// // const NoteDetailPage = () => {
// //   return (
// //         <div className="note-container">
// //             <h3 className="title">REACT PROJECT FOR BEGINNERS</h3>
// //             <span className="d-flex justify-content-center">
// //                 <p className="note-date font-12 text-muted me-5"> created: 11 March 2009</p>
// //                 <p className="note-date font-12 text-muted me-5">last updated: 11 March 2009</p>
// //             </span>
// //             <span className="button-group">
// //                 <Link to="/edit-note" >
// //                     <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
// //                 </Link>
                
// //                 <button className="btn btn-danger"><BiSolidTrashAlt /><span>Delete</span></button>
// //             </span>
// //             <p className="description">
// //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
// //             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
// //             illo inventore veritatis et quasi architecto beatae vitae dicta sunt
// //             explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
// //             odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
// //             voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
// //             quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
// //             eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
// //             voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
// //             corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
// //             Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
// //             quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
// //             voluptas nulla pariatur?
// //             </p>



        

// //         </div>
        

// //   )
// // }

// // export default NoteDetailPage

