import React from 'react'
import Filter from '../component/Filter'
import NoteCardContainer from '../component/NoteCardContainer'

const HomePage = ({notes, loading, error}) => {
  console.log('Homepage Received:', {notes});
  if(loading) return (
    <div className='text-center py-5'>
      <div className='spinner-border text-primary' role = 'status'>
        <span className='visually-hidden'>Loading..</span>
      </div>
      <p className='mt-2'>Loading Notes...</p>
    </div>
    );

  if(error) return (
    <div className='alert alert-danger mx-3 mt-3' role='alert'>Error Loading Notes:{error}</div>);
  
  if(!notes || notes.length === 0) return(
    <div className='text-center py-5'>
      <h4> No Notes found.</h4>
      <p>Start by creating your first note!</p>
    </div>
  ); 
    return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 col-lg-2'>
          <Filter />
        </div>
      </div>
      <div className='col-md-9 col-lg-10'>
        <NoteCardContainer notes = {notes}/>
      </div>
        
    </div>
  );
};

export default HomePage