import React from "react";
import { OBJ_TYPE } from "../../types";
import Link from "next/link";

const PostCard: React.FC<{ card: OBJ_TYPE }> = (props) => {
  const { card } = props;

  return (
    <div className="col">
      <div className="card ">
        <h5 className="card-header">{card.title.slice(0, 20)}</h5>
        <div className="card-body">
          <p className="card-text">{card.body.slice(0, 100)}</p>
          <div className="d-flex justify-content-between align-items-baseline">
            <p className="card-text text-muted">
              User ID: <span className={`badge bg-primary`}>{card.userId}</span>
            </p>
            <Link
              href={`/blogs/${card.id}`}
              className="btn btn-light text-primary"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
