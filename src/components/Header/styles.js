import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em 6.5em;
  margin: auto;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
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
