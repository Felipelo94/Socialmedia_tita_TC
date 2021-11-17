import { Avatar } from "@mui/material";
import React from "react";
import './Comment.css'

function Comment({ image, firstName, lastName, comment, pusblishDate }) {
  return (
    <div className = 'comment'>
      <div className="comment__name">
        <div className="comment__avatar">
          <Avatar src={image} />
        </div>
        <div>
          {firstName}
          {lastName}
        </div>
      </div>
      {pusblishDate}
      <div className="comment__text">{comment}</div>
    </div>
  );
}

export default Comment;
