import Post from "./components/Post";
import "./assests/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostInsert from "./components/PostInsert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/postDetail/:id" element={<PostDetail />} />
      <Route path="/create" element={<PostInsert lastID={0} />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
