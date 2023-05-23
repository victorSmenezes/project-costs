import { styled } from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label{
    margin-bottom: .6em;
    font-weight: bold;
  }

  input, select{
    padding: .7em;
    border-radius: 0;
    border: none;

    &::placeholder{
      color: #7B7B7B;
    }
  }
`

export const Button = styled.button`

  background-color: #222;
  width: 112px;
  color: #FFF;
  padding: .7em 1.2em;
  text-decoration: none;
  transition: .5s;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  &:hover{
    color: #ffbb33;
  }
`