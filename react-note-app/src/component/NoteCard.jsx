import React from 'react'

import { FaNoteSticky } from "react-icons/fa6";

import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const NoteCard = ({note, color}) => {
    console.log('notecard:', note);
    const formattedDate = new Date(note.created_at).toLocaleDateString('en-US', {
        year:'numeric',
        month:'long',
        day:'numeric'
    })
    const bodyPreview = note.body 
        ? `${note.body.split(" ").slice(0, 20).join(" ")}${note.body.split(" ").length>20 ? '...' : ''}` 
        : 'No Notes Found.';
    const category = note.category || "Uncategorized";

  return (
    <div className="col-md-4 single-note-item mb-4">
        <div className="card card-body h-100 shadow-sm position-relative">
            <div className='side-stick position-absolute start-0 top-0 h-100 rounded-start' style={{width: '4px', backgroundColor:color}}></div>
            <span className="side-stick" style={{backgroundColor: color}}></span>
            <div className='d-flex align-item-center mb-2'>
                <FaNoteSticky className='ms-auto' style={{marginLeft: "auto", color: color}}/>
            </div> 
            
            {/*<a href='/note-detail' style={{textDecoration: "none", color: "black"}}>*/}
            <Link to= {`/notes/${note.id}`} style={{ textDecoration: "none", color: "black" }}>
                <h5 className="note-title text-truncate fw-bold mb-2" title='{note.title}'> {note.title} </h5>
                <p className="note-date font-12 text-muted small mb-2">{formattedDate}</p>
                <div className="note-content">
                    <p className="note-inner-content text-muted mb-3" style={{minHeight:'60px'}} title={note.body}>{bodyPreview}</p>
                </div>
            </Link>
            {/*</a>*/}
            
            <div className="d-flex align-items-center justify-content-between mt-auto" >
                <div className='d-flex align-items-center gap-2'>

                </div>
                <Link to ={`/notes/${note.id}`} className='text-decoration-none' aria-label='View note details' >
                    <MdMarkunread style={{fontSize: "25px", cursor:"pointer", color: color}}/>
                </Link>
                
                <div className="ml-auto">
                    <div className="category-selector btn-group">
                        <span className='badge rounded-pill' style={{backgroundColor:`${color}20`, color:color, fontSize:'0.8rem'}}> {category} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

NoteCard.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string,
        created_at:PropTypes.string.isRequired,
        category:PropTypes.string
    }).isRequired,
    color: PropTypes.string,
    

}
NoteCard.defaultProps = {
    color: '#6c757d'
};

export default NoteCard
