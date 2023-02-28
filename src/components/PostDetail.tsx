import { FC } from "react";
import { useLocation } from "react-router-dom";


const PostDetail: FC = () => {
  
  const location = useLocation();
  const state = location.state;

  return (
    <div className="container">
      <div className="post">
        <h2>{state.title}</h2>
        <span>{`${state.likes} likes`}</span>
        <p>{state.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
