import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import { get } from "../services/HTTPService";
import env from "../config/env";
import Modal from "./Modal";
import UserDetails from "./UserDetails";

function Post({ id, img, text, tags, likes, owner, publishDate }) {
 
  let [comments, setComments] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  

  let headers = { "app-id": env.appId };
  

  const getComments = async () => {
    try {
      setComments(
        await (
          await get(`${env.baseUrl}/post/${id}/comment?limit=10`, headers)
        ).data.data
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);


  const { firstName, lastName, picture } = owner;
  return (
    <>
    <Modal isOpen = {isOpen} onClose = {()=>setIsOpen(false)}>
      <div>
       <UserDetails user = {owner}/>
      </div>
    </Modal>
    <div className="post">
      <div className="post__top" onClick = {()=> setIsOpen(true)}>
        <Avatar src={picture} />
        <div className="post__topInfo">
          {firstName} {lastName}
        </div>
        <p>{publishDate}</p>
      </div>

      <div className="post__bottom">
        <p>{text}</p>
      </div>

      <div className="post__image">
        <img src={img} alt="Post" />
      </div>

      <div>
        {tags.map((tag) => (
          <span className="post__tags" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="post__likes">
        <ThumbUpIcon style={{ color: "blue" }} />
        <span>{likes}</span>
        <span className = "post__comments">{comments.length} Comments</span>
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Post;
