import React from 'react'
import './AppButton.css'

function AppButton({label, onClick}) {
    return (
        <button className='appButton' onClick = {onClick} >
            {label}
        </button>
    )
}

export default AppButton
