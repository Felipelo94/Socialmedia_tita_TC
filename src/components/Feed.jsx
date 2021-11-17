import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import { get } from "../services/HTTPService";
import env from "../config/env";
import Post from "./Post";
import Select from "react-select";

function Feed() {
  let postURL = `${env.baseUrl}/post`;
  let headers = { "app-id": env.appId };

  let [posts, setPosts] = useState([]);
  let [tags, setTags] = useState([]);
  let [currentTag, setCurrentTag] = useState("");

  const getPost = async () => {
    try {
      setPosts(await (await get(postURL, headers)).data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getTags = async () => {
    let singleTags = await (await get(`${env.baseUrl}/tag`, headers)).data.data;
    let formattedTags = singleTags.map((tag) => ({
      value: tag.trim(),
      label: tag.trim(),
    }));
    setTags(formattedTags);
  };

  const getPostsByTag = async (tag) => {
    try {
      setPosts(
        await (
          await get(`${env.baseUrl}/tag/${tag}/post?limit=20`, headers)
        ).data.data
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectOnChange = (selectedTag) => {
    setCurrentTag(selectedTag);
    console.log(selectedTag);
    getPostsByTag(selectedTag.value);
  };

  useEffect(() => {
    getTags();
    getPost();
  }, []);

  return (
    <div className="feed">
      <MessageSender />
      <p className="label">Filter by Tag </p>
      <div className="filter">
        <Select
          value={currentTag}
          options={tags}
          onChange={handleSelectOnChange}
        />
      </div>

      {posts.length === 0 ? <p  className="label">{`No Posts with ${currentTag.value} Tag`}</p> : posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          img={post.image}
          tags={post.tags}
          owner={post.owner}
          text={post.text}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

export default Feed;
