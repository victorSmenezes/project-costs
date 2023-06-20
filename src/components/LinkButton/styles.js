import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

export const Button = styled(Link)`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  transition: 0.5s;
  border: none;
  border-radius: 2px;
  text-decoration: none;

  &:hover {
    color: #ffbb33;
  }
`;
