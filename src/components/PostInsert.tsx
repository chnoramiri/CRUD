import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface MyState {
  value: string;
  textAreaValue: string;
}
interface CreateProps {
  lastID: number;
}
type item = {
  id: number;
  title: string;
  body: string;
  likes: number;
  color: string;
};

const PostInsert: FC<CreateProps> = ({ lastID }: CreateProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  let item: item = location.state && location.state.item;

  const [state, setState] = useState<MyState>({
    value: (location.state && item.title) || "",
    textAreaValue: (location.state && item.body) || "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let url: string = "http://localhost:3000/posts";
  const PostInsertFunc = () => {
    let newPost = {
      id: lastID++,
      title: value,
      likes: 80,
      body: textAreaValue,
    };

    const api = async () => {
      if (!item) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        })
          .then((response) => response.json())
          .then(() => {
            navigate("/");
          });
      } else {
        let modifiedPost = {
          id: item.id,
          title: value,
          likes: item.likes,
          body: textAreaValue,
        };
        const response = await fetch(`${url}/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifiedPost),
        })
          .then((response) => response.json())
          .then(() => {
            navigate("/");
          });
      }
    };
    api();
  };

  const { value, textAreaValue } = state;

  return (
    <div className="insert-con">
      <h1>Insert a Blog</h1>
      <input
        type="text"
        name="value"
        value={value}
        onChange={handleChange}
        className="insert-input"
      />
      <textarea
        name="textAreaValue"
        value={textAreaValue}
        onChange={handleChange}
        rows={20}
        className="insert-text-area"
      />
      <button className="insert-btn" onClick={PostInsertFunc}>
        Insert
      </button>
    </div>
  );
};

export default PostInsert;
