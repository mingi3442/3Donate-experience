import React from "react";
import { Link } from "react-router-dom";

const DataList = ({ seq, title, writer, createdAt, views }) => {
  return (
    <div className="board__list--container">
      <div className="board__list">
        <div className="board__list--cotents">
          <div className="board__list--num">{seq}</div>
          <div className="board__list--title">
            <Link to={`/view/${seq}`}>{title}</Link>
          </div>
          <div className="board__list--writer">{writer}</div>
          <div className="board__list--date">{new Date(createdAt).toLocaleDateString()}</div>
          <div className="board__list--date">{views}</div>
        </div>
      </div>
    </div>
  );
};

export default DataList;
