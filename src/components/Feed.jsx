import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import { get } from "../services/HTTPService";
import env from "../config/env";
import Post from "./Post";


function Feed() {
  let postURL = `${env.baseUrl}/post`;
  let headers = { "app-id": env.appId };

  let [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      setPosts (await (await get(postURL, headers)).data.data)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="feed">
      <MessageSender />
      {posts.map((post) => (
         <Post key = {post.id} id = {post.id} img= {post.image} tags = {post.tags} owner = {post.owner} text ={post.text} likes={post.likes}/>
      ))}
    </div>
  );
}

export default Feed;
