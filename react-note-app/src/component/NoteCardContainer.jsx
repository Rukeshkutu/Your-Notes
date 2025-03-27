import React from 'react';
import NoteCard from './NoteCard';
import PropTypes from 'prop-types';

const NoteCardContainer = ({notes}) => {
  console.log("notecardcontainer received:", notes)
  return (
    <div className='container-fluid p-4'>
        <div className='note-has-grid row'>
            <h4> This is Notes container</h4>
            {notes.length === 0 ? (
              <div className='text-center py-5 text-muted'>
                No notes found.
              </div>
            ) : (
              <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                {notes.map((note,index) => (
                  <div key ={note?.id || index} className='col'>
                    <NoteCard
                      note={note}
                      color={getCategoryColor(note.category)}
                    />
                  </div>
                ))}
              </div>
            )}
            {/* <{notes.map(note => <NoteCard key = {note.id} note = {note} />)}
            NoteCard /> */}

        </div>
    </div>
  );
};

const getCategoryColor = (category) => {
  const colors = {
    BUSINESS: '#4A90E2',
    PERSONAL: '#50e3c2',
    IMPORTANT: '#e35050'
  };
  return colors[category] || '#6c757d';
}


NoteCardContainer.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NoteCardContainer