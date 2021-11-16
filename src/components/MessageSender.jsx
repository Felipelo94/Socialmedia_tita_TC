import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import "./MessageSender.css";
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
