import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/books"
          >
            Books
          </NavLink>
        </div>
        <div>
          {token ? (
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              to="/logout"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};
