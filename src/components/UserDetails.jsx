import React from 'react'

function UserDetails({user}) {

    let {firstName, lastName, picture} = user;
    return (
        <div className ="card">
        <div className ="card-body">
          <img src ={picture} alt ="Imagen De la tarjeta" className="card-image"/>
          <h2 className ="card-title" >{firstName} {lastName}</h2>
        </div>
    </div>
    )
}

export default UserDetails
