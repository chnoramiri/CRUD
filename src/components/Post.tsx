import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post: FC = () => {
  type Data = {
    id: number;
    title: string;
    body: string;
    likes: number;
    color: string;
  };

  const [result, setResult] = useState<Data[]>([]);

  let url: string = "http://localhost:3000/posts";
  const FetchData = async () => {
    const data = await fetch(`${url}?_sort=likes&_order=desc`, {
      method: "Get",
    });
    const jsonData = await data.json();
    //Generate colors
    let color: string = "";
    for (let i = 0; i <= jsonData.length - 1; i++) {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const alpha = Math.random();

      color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      jsonData[i].color = color;
    }
    setResult(jsonData);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const deleteBlog = async (id: number) => {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (res.status == 200) {
      FetchData();
    }
  };

  return (
    <>
      <div className="container">
        <div className="justify-items ">
          <h1>All Blogs</h1>
          <button className="create-btn">
            <Link to="/create">Add a New Post</Link>
          </button>
        </div>
        {result.map((item, index) => {
          return (
            <div
              key={index}
              className="post"
              style={{ backgroundColor: item.color }}
            >
              <h2>{item.title}</h2>
              <span>{`${item.likes} likes`}</span>
              <p>
                {item.body.length > 250
                  ? item.body.substring(0, 250)
                  : item.body}
              </p>
              <div className="justify-items ">
                <Link to={`/postDetail/${item.id}`} state={{ item: item }}>
                  Read more
                </Link>
                <button
                  className="delete-btn "
                  onClick={() => deleteBlog(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
