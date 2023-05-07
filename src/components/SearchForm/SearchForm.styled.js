import styled from "styled-components";

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  margin-bottom: 32px;
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 38px;
  padding-left: 4px;
  padding-right: 4px;
  font-family: inherit;
  font-size: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  outline: none;
  padding: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
  background-color: transparent;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: #ffffff;
  }
`;