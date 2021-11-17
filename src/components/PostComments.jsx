import React from "react";
import Comment from "./Comment";

function PostComments({ comments }) {
    if(comments.length === 0) return "No Comments";
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          comment={comment.message}
          firstName={comment.owner.firstName}
          lastName={comment.owner.lastName}
          pusblishDate={comment.pusblishDate}
          image={comment.owner.picture}
        />
      ))}
    </div>
  );
}

export default PostComments;
