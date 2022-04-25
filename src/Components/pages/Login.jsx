import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Form } from "./EditBookData";
import styles from "./Login.module.css";

// add input styling
export const Input = styled.input`
  height: 30px;
  width: 240px;
  color: red;
  border: 1px solid black;
  margin: 20px;
  display: flex;
  text-align: center;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/books";
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <div className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <div className={styles.divv}>
          <div>Email :</div>
          <div>
            <Input
              data-testid="login-form-email"
              placeholder="Enter Email"
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.divv}>
          <div>Password :</div>
          <div>
            <Input
              data-testid="login-form-password"
              placeholder="Enter Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Input
            value="Login"
            style={{ textAlign: "center" }}
            type={"submit"}
            data-testid="login-form-submit"
          />
        </div>
      </Form>
    </div>
  );
};
