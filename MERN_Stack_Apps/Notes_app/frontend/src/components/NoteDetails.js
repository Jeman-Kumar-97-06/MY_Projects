import { useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({nt}) => {

    // Get the modal
    var modal = document.getElementById("updateModal");

    // Get the button that opens the modal
    var btn = document.getElementById("updateBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    } 


    const {dispatch} = useNoteContext();
    const handleDel = async () => {
        const resp = await fetch('/api/notes/'+nt._id,{method:'DELETE'});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_NOTE",payload:json})
        }
    };


    const handleUpdate  = () => {
        console.log('clicked');
    }

    return (
        <div className='nt_det'>
            <h4>{nt.title}</h4>
            <hr/>
            <p>{nt.body}</p>
            <button onClick={handleDel} className="del_note_btn">Delete</button>
            <button id='updateBtn' onClick={handleUpdate}>Update</button>
            <div id="updateModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    )
}

export default NoteDetails;