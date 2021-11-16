import React, { useContext } from "react";
import "./Header.css";
import {Avatar } from "@mui/material"
import { UserContext } from "../UserContext";
import AppButton from "./AppButton";




function Header() {

  const { user, setUser } = useContext(UserContext)
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrljfGpqxT9RGxvPGYHYuJAFW9Mh2TezCTAA&usqp=CAU"
          alt="Logo"
        />  
      </div>


      <div className="header__right">
          <div className="header__info">
            <Avatar src={user.picture.data.url}/>
            <h4>{user.name}</h4>
          </div>

          <AppButton label='Logout' onClick = {()=>setUser()} />
      </div>
    </div>
  );
}

export default Header;
