import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './component/NavBar'
import Filter from './component/Filter'
import NoteCardContainer from './component/NoteCardContainer'
const App = () => {
  return (
    <div>
        {/*<BrowserRouter>
            <NavBar />
        </BrowserRouter>*/}
        <NavBar />
        <Filter />
        <NoteCardContainer />

        
        <h1>Hello this is React</h1>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
        </div>
    </div>
  )
}

export default App