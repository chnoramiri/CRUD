import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MyState {
  value: string;
  textAreaValue: string;
}
interface CreateProps {}

const Create: FC<CreateProps> = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<MyState>({
    value: "",
    textAreaValue: "",
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

  const createFunc = () => {
    let url: string = "http://localhost:3000/posts";
    let newPost = {
      id: 80,
      title: value,
      likes: 80,
      body: textAreaValue,
    };

    const api = async () => {
      const response = await fetch("http://localhost:3000/posts", {
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
    };
    api();
  };

  const { value, textAreaValue } = state;

  return (
    <div className="create-con">
      <h1>Create a New Blog</h1>
      <input
        type="text"
        name="value"
        value={value}
        onChange={handleChange}
        className="create-input"
      />
      <textarea
        name="textAreaValue"
        value={textAreaValue}
        onChange={handleChange}
        rows={20}
        className="create-text-area"
      />
      <button className="create-btn" onClick={createFunc}>
        create
      </button>
    </div>
  );
};

export default Create;
