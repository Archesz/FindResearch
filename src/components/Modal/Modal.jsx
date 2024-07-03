// Modal.js
import React from 'react';
import './Modal.scss';

function Modal({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}>X</button>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
            </div>
        </div>
    );
}

export default Modal;
