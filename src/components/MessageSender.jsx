import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { UserContext } from "../UserContext";

function MessageSender() {
const {user} = useContext(UserContext)

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src = {user.picture.data.url} />
        <form>
          <input
            className="messageSender__input"
            placeholder={`${user.name}, ¿qué quieres decir hoy? `}
          />

          <button type="submit">Hidden submit</button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
