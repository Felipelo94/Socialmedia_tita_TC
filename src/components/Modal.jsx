import React from 'react'
import AppButton from './AppButton';
import './Modal.css'

function Modal({children, isOpen, onClose}) {

    if(!isOpen) return null;

    return (
        <>
        <div className='overlay'/>
        <div className = 'modal'>
            {children}
        <div className = 'modal__bottom'>
            <span className = 'modal__closeButton'><AppButton label = {'Close'} onClick = {onClose}/></span>
        </div>
        </div>
        
        </>
    )
}

export default Modal
