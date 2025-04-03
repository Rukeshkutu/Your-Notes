import React from 'react'

import { FaNoteSticky } from "react-icons/fa6";

import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './notecard.css'

const NoteCard = ({note, color}) => {
    //console.log('notecard:', note);
    const formattedDate = new Date(note.created_at).toLocaleDateString('en-US', {
        year:'numeric',
        month:'long',
        day:'numeric',
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit',
        hour12: true
    })
    //const bodyPreview = note.body 
    const bodyPreview = typeof note.body === 'string'
        ? `${note.body.split(" ").slice(0, 20).join(" ")}${note.body.split(" ").length>20 ? '...' : ''}` 
        : 'No Notes Found.';
    const category = note.category || "Uncategorized";

  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body shadow-sm position-relative d-flex">
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <FaNoteSticky className='ms-auto' style={{ marginLeft: "auto", color: color }} />
        <Link to={`/notes/${note.slug}`} style={{textDecoration: "none", color: "black"}}>
        <h5
          className="note-title text-truncate w-75 mb-0"
          data-noteheading="Book a Ticket for Movie"
        >
          {note.title}
        </h5>
        
        
        <p className="note-date font-12 text-muted">{formattedDate}</p>
        <div className="note-content">
          <p
            className="note-inner-content text-muted"
            title={note.body}
          >
           {bodyPreview}
          </p>
        </div>
        </Link>
        <div className="d-flex align-items-center">
       

          <span className="d-flex justify-contents-around">
            <Link  to={`notes/${note.slug}`} className='text-decoration-none' arial-label='View note details'>
              <MdMarkunread
                style={{ fontSize: "25px", cursor: "pointer", color: color }}
              />
            </Link>

            <small className="text-muted">{category}</small>
          </span>
        </div>
      </div>
    </div>

    // <div className="single-note-item mb-4">
    //     <div className="card card-body h-100 shadow-sm position-relative d-flex flex-column">
    //         <div className='side-stick position-absolute start-0 top-0 h-100 rounded-start' style={{width: '4px', backgroundColor:color}}></div>
    //         <span className="side-stick" style={{backgroundColor: color}}></span>
    //         <div className='d-flex align-items-center mb-2'>
    //             <FaNoteSticky className='ms-auto' style={{marginLeft: "auto", color: color}}/>
    //         </div> 
            
            
    //         <Link to= {`/notes/${note.slug}`} style={{ textDecoration: "none", color: "black" }}>
    //             <h5 className="note-title text-truncate fw-bold mb-2" title='{note.title}'> {note.title} </h5>
    //             <p className="note-date font-12 text-muted small mb-2">{formattedDate} </p>
    //             <div className="note-content">
    //                 <p className="note-inner-content text-muted mb-3" style={{minHeight:'60px'}} title={note.body}>{bodyPreview}</p>
    //             </div>
    //         </Link>
            
    //         <div className="d-flex justify-content-between align-items-center mt-4">
    //             <div className='d-flex align-items-center gap-2'>

    //             </div>
    //             <Link to ={`/notes/${note.slug}`} className='text-decoration-none' aria-label='View note details' >
    //                 <MdMarkunread style={{fontSize: "25px", cursor:"pointer", color: color}}/>
    //             </Link>
                
    //             <div className="ml-auto">
    //                 <div className="category-selector btn-group">
    //                     <span className='badge rounded-pill' style={{backgroundColor:`${color}20`, color:color, fontSize:'0.8rem'}}> {category} </span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

NoteCard.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.oneOfType([PropTypes.string], PropTypes.element).isRequired,
        body: PropTypes.oneOfType([PropTypes.string], PropTypes.element),
        created_at:PropTypes.string.isRequired,
        category:PropTypes.string
    }).isRequired,
    color: PropTypes.string,
    

}
NoteCard.defaultProps = {
    color: '#6c757d'
};

export default NoteCard
