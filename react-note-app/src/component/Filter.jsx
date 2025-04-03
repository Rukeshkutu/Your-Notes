import React, {useState} from 'react'

const Filter = ({onCategoryChange}) => {
  // const [filterNote, setFilterNote] = useState('')
  // const handleFilterNote = (val) => {
  //   setFilterNote(val)
  // }
  return (
    <div className='container' d-flex style={{width:'400px', margin:'20px auto'}} >
        <select
        className='form-select'
        aria-label='Default select example'
        style={{ height: '50px' }}
        //value={filterNote} // Controlled component
        onChange={(e) => onCategoryChange(e.target.value)} 
        defaultValue=''// Handle selection change
      >
            <option value=''>All Notes</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
        </select>
    </div>
  )
}

export default Filter