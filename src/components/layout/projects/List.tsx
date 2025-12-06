import React from 'react';
import { Link } from "react-router-dom";
import { ProjectProps } from "../../../types";

export const List: React.FC<ProjectProps> = ({projectsJson}) => {
  return (
    <div className="list">
      <>
        {projectsJson.map((item: any, index: number) => {
          return (
            <Link to={index.toString()} key={index} className="item">
              <div className="img">
                <img src={item.cover} alt={item.titl} />
              </div>
              <div className="title">{item.title}</div>
            </Link>
          );
        })}
      </>
    </div>
  );
};