import { keyframes, styled } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideh1 = keyframes`
  from {
    transform: translatex(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.6em;
    font-size: 18px;
    font-weight: bold;
    animation: ${slideIn} 1s ease-out;
  }

  input,
  select {
    font-size: 16px;
    padding: 0.7em;
    border-radius: 0;
    border: none;
    animation: ${slideh1} 1s ease-out;

    &::placeholder {
      color: #7b7b7b;
    }
  }
`;

export const Button = styled.button`
  background-color: #222;
  width: 150px;
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
