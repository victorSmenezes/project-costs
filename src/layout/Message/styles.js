import styled, { css } from 'styled-components';

export const BoxOfMessage = styled.div`
  width: 25%;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;

  ${(props) =>
    props.type === 'Success' &&
    css`
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    `}

  ${(props) =>
    props.type === 'Error' &&
    css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    `}
`;
