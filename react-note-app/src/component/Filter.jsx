import React, {useState} from 'react'

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  return (
    <div className='container' style={{width:'500px', margin:'20px auto'}} >
        <select
        className='form-select'
        aria-label='Default select example'
        style={{ height: '50px' }}
        value={selectedFilter} // Controlled component
        onChange={(e) => setSelectedFilter(e.target.value)} // Handle selection change
      >
            <option value=''>Filter Notes</option>
            <option value="1">Business</option>
            <option value="2">Personal</option>
            <option value="3">Important</option>
        </select>
    </div>
  )
}

export default Filter