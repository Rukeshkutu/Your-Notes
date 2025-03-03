import React from 'react';
import NoteCard from './NoteCard';
import PropTypes from 'prop-types';
const NoteCardContainer = ({notes}) => {
  console.log("notecardcontainer received:", notes)
  return (
    <div className='container-fluid p-4'>
        <div className='note-has-grid row'>
            <h4> This is Notes container</h4>
            {notes.length === 0} ? (
              <div className='text-center py-5 text-muted'>
                No notes found.
              </div>
            ) : (
              <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                {notes.map((note) => (
                  <div key ={note.id} className='col'>
                    <NoteCard
                      

                      title = {note.title}
                      content= {note.body}
                      
                      date = {note.created_at || note.date}
                      category = {note.category}
                    />
                  </div>
                ))}
              </div>
            ) 
            {/*<{notes.map(note => <NoteCard key = {note.id} note = {note} />)}
            NoteCard />*/}

        </div>
    </div>
  );
};

NoteCardContainer.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      body: PropTypes.string,
      category: PropTypes.string,
      created_at: PropTypes.string,
      
    })
  ).isRequired
};

export default NoteCardContainer