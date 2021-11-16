import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import'./Home.css'

function Home() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />
      </div>
    </div>
  );
}

export default Home;
