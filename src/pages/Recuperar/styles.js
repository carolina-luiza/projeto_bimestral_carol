import styled from "styled-components";

import bgLogin from "../../assets/background-login.jpg";

export const Container = styled.div`
  /* @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");
  background: #030303;
  color: #d2d2d2;
  height: 100%;
  background: #000 url(${bgLogin}) no-repeat right;
  background-size: contain;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }

  form p {
    font: 76px "K2D", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 50px;
    line-height: 110px;
  }
  form p sub {
    font: 60px "K2D", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: rgba(255, 255, 255, 0.6);
  }

  label,
  input,
  button {
    width: 100%;
  }

  input,
  button {
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 0 15px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 80px;
    font-weight: bold;
  } */
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }

`;
