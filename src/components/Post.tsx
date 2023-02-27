import { FC, useEffect, useState } from "react";

// interface Props {
//   count: number;
// }
// const Post: FC<Props> = (props) => {

const Post: FC = () => {
  type resultProps = {
    id: number;
    title: string;
    body: string;
    likes: number;
  };

  const [result, setResult] = useState<resultProps[]>([]);

  let url: string = "http://localhost:3000/posts";

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "Get",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    api();
  }, [url]);

  return (
    <>
      <h1>All Blogs</h1>
      {result.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <span>{item.likes}</span>
            <p>{item.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Post;
