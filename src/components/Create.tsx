import { FC } from "react";

interface CreateProps {}

const Create: FC<CreateProps> = () => {
  return (
    <div className="create-con">
      <h1>Create a New Blog</h1>
      <input className="create-input"/>
      <textarea rows={20}  className="text-area"/>
      <button className="create-btn">create</button>
    </div>
  );
};

export default Create;
