import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 180px;
  width: 280px;
  background: white;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h2`
  color: grey;
  text-decoration: none;
  font-size : 40px;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
