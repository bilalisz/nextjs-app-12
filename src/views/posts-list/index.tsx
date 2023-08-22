import React from "react";
import { OBJ_TYPE } from "../../common/types";
import PostCard from "../../common/components/post-card/PostCard";

type PORPS_TYPE = {
  data: OBJ_TYPE[];
};

const PostsList: React.FC<PORPS_TYPE> = (props) => {
  const { data } = props;

  return (
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data.map((card) => (
          <PostCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
