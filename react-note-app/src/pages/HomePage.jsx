import React, {useEffect, useMemo, useState} from 'react'
import Filter from '../component/Filter'
import NoteCardContainer from '../component/NoteCardContainer'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterNotes, setFilterNotes] = useState('');

  useEffect(() => {
    setLoading(true);
    const url = searchTerm 
      ? `http://127.0.0.1:8000/notes-search/?search=${searchTerm}`
      : 'http://127.0.0.1:8000/notes/';

    axios.get(url)
      .then(response => {
        const data = searchTerm ? response.data.results : response.data.data;
        if (Array.isArray(data)) {
          searchTerm ? setNotes(data) : setNotes(data);
        }
      })
      .catch(err => {
        console.error("Error fetching notes:", err);
        setError(searchTerm ? 'Search failed' : 'Failed to load notes');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  const filteredNotes = filterNotes
    ? notes.filter(note => note.category === filterNotes)
    : notes;

  // const[notes, setNotes] = useState([]);
  // const[loading, setLoading] = useState(true);
  // const[error, setError] = useState(null);
  // const [filterNotes, setFilterNotes] = useState('')
  // //const [searchResult, setSearchResults] = useState(null)
  // //const[searchParams] = useSearchParams();
  // //const searchTerm = searchParams.get('search') || '';

  // const filteredNotes = filterNotes
  //   ? notes.filter(note => note.category === filterNotes)
  //   : notes;

  //   useEffect(() => {
  //         axios.get('http://127.0.0.1:8000/notes/')
  //           .then(res => {
  //            // console.log("📌 API Response:", res.data); // Debug API response
        
  //             if (res.data && Array.isArray(res.data.data)) {
  //               setNotes(res.data.data);  // ✅ Extract only the `data` array
  //             } else {
  //               //console.error("❌ Unexpected API response format:", res.data);
  //               setNotes([]);  // ✅ Default to an empty array if incorrect format
  //             }
  //             setLoading(false);
  //           })
  //           .catch(err => {
  //             //console.error("❌ Error fetching notes:", err);
  //             setError("Failed to load notes");
  //             setLoading(false);
  //           });
  //       });  
    
  //console.log("📌 HomePage Received Notes:", notes);

  if (loading){
    return (
      <div className='text-center py-5'>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading..</span>
        </div>
        <p className='mt-2'>Loading Notes...</p>
      </div>
    );
  }

  if (error){
    return (
      <div className='alert alert-danger mx-3 mt-3' role='alert'>
        Error Loading Notes: {error}
      </div>
    );
  }

  return (
    <>
      {!notes || notes.length === 0 ? (
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          There is no note found.
        </h4>
      ) : (
        <Filter onCategoryChange={setFilterNotes} />
      )}
      <NoteCardContainer notes={filteredNotes} />
    </>
    // <div className='container'>
    //   <div className='row'>
    //     <div className='col-md-3 col-lg-2'>
    //       <Filter  onCategoryChange={setFilterNotes}/>
    //     </div>
    //     <div className='col-md-9 col-lg-10'>
    //       {!notes || notes.length === 0 ? (
    //         <div className='text-center py-5'>
    //           <h4>No notes found.</h4>
    //           <p>Start by creating your first note!</p>
    //         </div>
    //       ) : (
    //         // <NoteCardContainer notes = {notes}/>
    //         <NoteCardContainer notes={filteredNotes}/>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;

// import React from 'react';
// import Filter from '../component/Filter';
// import NoteCardContainer from '../component/NoteCardContainer';

// const HomePage = ({ notes, loading, error }) => {
//   console.log("📌 HomePage Received Notes:", notes); // Debugging

//   if (loading)
//     return (
//       <div className="text-center py-5">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p className="mt-2">Loading Notes...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger mx-3 mt-3" role="alert">
//         Error Loading Notes: {error}
//       </div>
//     );

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3 col-lg-2">
//           <Filter />
//         </div>
//         <div className="col-md-9 col-lg-10">
//           {notes && notes.length > 0 ? (
//             <NoteCardContainer notes={notes} />
//           ) : (
//             <div className="text-center py-5">
//               <h4>No notes found.</h4>
//               <p>Start by creating your first note!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
