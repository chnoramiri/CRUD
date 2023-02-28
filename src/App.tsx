import React from "react";
import Post from "./components/Post";
import "./assests/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />}/>
     
        <Route path="/postDetail/:id" element={<PostDetail />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
