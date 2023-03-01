import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Data {
  id: number;
  title: string;
  body: string;
  likes: number;
}
const PostDetail: FC = () => {
  const [post, setPost] = useState<Data | null>(null);
  const { id } = useParams<{ id: string }>();

  let url: string = `http://localhost:3000/posts/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url, {
        method: "Get",
      });
      const jsonData = await data.json();
      setPost(jsonData);
    };
    fetchData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className={`post${id}`}>
        <h2>{post.title}</h2>
        <span>{`${post.likes} likes`}</span>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
