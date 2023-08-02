import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-40px);
  }
  60% {
    transform: translateY(-15px);
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

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em 6.5em;
  margin: auto;

  img {
    animation: ${bounce} 1.5s ease-out;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  animation: ${slideh1} 1s ease-out;
`;

export const Item = styled.li`
  margin-right: 1em;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #ffbb33;
  }
`;
