import React from 'react'
import NoteCard from './NoteCard'
const NoteCardContainer = () => {
  return (
    <div className='container'>
        <div className='note-has-grid row'>
            <h4> This is Notes container</h4>
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
    </div>
  )
}

export default NoteCardContainer