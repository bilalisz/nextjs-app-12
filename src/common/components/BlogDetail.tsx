import React from "react";
import { OBJ_TYPE } from "../types";
import { blogBody } from "../dummyData";

type PropsType = {
  blog: OBJ_TYPE;
};

const BlogDetail: React.FC<PropsType> = ({ blog }) => {
  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-center">
        <div className="col-9">
          <h1>{blog.title}</h1>
          <p>By User {blog.userId} </p>
          <p>{blogBody}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
