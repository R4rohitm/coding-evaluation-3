import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Flex = styled.div`
  height: 380px;
  width: 380px;
  margin: auto;
  margin-bottom: 30px;
  border: 1px solid black;
  //  add required style
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;
  console.log(title);
  return (
    <>
      <Link to={`/books/${id}`}>
        <Flex>
          <img src={thumbnailUrl} alt={title} height="200px" width={"200px"} />
          <h3>{title}</h3>
          <h4>{isbn}</h4>
        </Flex>
      </Link>
    </>
  );
};
