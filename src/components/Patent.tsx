import React from "react";

interface PatentProps {
  title: string;
  author: string;
  status: string;
  description: string;
}

const Patent: React.FC<PatentProps> = (props) => {
  const { title, author, status, description } = props;
  return (
    <div className="patentHeader">
      <div className="patent">
        <h1>{title}</h1>
        <h3>{author}</h3>
        <h3>Status: {status}</h3>
        <pre>Description: {description}</pre>
      </div>
    </div>
  );
};

export default Patent;
