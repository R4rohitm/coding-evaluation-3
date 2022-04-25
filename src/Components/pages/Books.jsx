import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(`http://localhost:8080/books`);
        let data = await response.json();
        setData(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {data.map((book) => {
          return (
            <div>
              <BookCard key={book.id} {...book} />
            </div>
          );
        })}
      </Grid>
    </>
  );
};
export default Books;
