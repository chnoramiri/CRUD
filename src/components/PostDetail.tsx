import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="container">
      <div className="post" style={{ backgroundColor: item.color }}>
        <h2>{item.title}</h2>
        <span>{`${item.likes} likes`}</span>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
