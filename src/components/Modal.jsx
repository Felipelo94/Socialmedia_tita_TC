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
        <div>
            <AppButton label = {'Close'} onClick = {onClose}/>
        </div>
        </div>
        
        </>
    )
}

export default Modal
