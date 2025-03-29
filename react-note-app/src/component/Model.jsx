import { useNavigate, useParams } from "react-router-dom"
import "./Model.css"
import React from 'react'
import axios from "axios"
import { toast } from "react-toastify"

const Model = ({handleIsOpen}) => {
  const {slug} = useParams()
  const navigate = useNavigate()
  const deleteNote = () => {
    axios.delete(`http://127.0.0.1:8000/notes/${slug}`)
    .then(() => {
      navigate('/')
      toast.success('Note deleted successfully.')
      handleIsOpen()
    })
    .catch(err => {
      //console.error('Failed to delete Note.')
      handleIsOpen()
    })
  }
  return (
    <div className="c-modal-overlay">
        <div className="c-modal">
            <button className="close-button" onClick={handleIsOpen}>x</button>
            <div className="c-modal-content">
                <h2>Delete Note</h2>
                <p>Are you share you want to delete this Note?</p>
                <span className="d-flex justify-content-center">
                    <button className="btn btn-danger me-3" onClick={deleteNote}>Delete</button>
                    <button className="btn btn-primary" onClick={handleIsOpen}>Cancel</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Model
