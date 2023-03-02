import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post: FC = () => {
  type Data = {
    id: number;
    title: string;
    body: string;
    likes: number;
  };

  const [result, setResult] = useState<Data[]>([]);

  let url: string = "http://localhost:3000/posts?_sort=likes&_order=desc";

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "Get",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    api();
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>All Blogs</h1>
          <button className="createBtn">
            <Link to="/create">Add a New Post</Link>
          </button>
        </div>
        {result.map((item, index) => {
          return (
            <div key={index} className={`post${item.id}`}>
              <h2>{item.title}</h2>
              <span>{`${item.likes} likes`}</span>
              <p>{item.body.substring(0, 250)}</p>
              <Link to={`/postDetail/${item.id}`}>Read more</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
