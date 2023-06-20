import { styled } from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.6em;
    font-size: 18px;
    font-weight: bold;
  }

  input,
  select {
    font-size: 16px;
    padding: 0.7em;
    border-radius: 0;
    border: none;

    &::placeholder {
      color: #7b7b7b;
    }
  }
`;

export const Button = styled.button`
  background-color: #222;
  width: 118px;
  font-size: 14px;
  color: #fff;
  padding: 0.7em 1.2em;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  &:hover {
    color: #ffbb33;
  }
`;
