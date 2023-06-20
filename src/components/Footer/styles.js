import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #222;
  width: 100%;
  height: 16%;
  color: #fff;
  padding: 3em;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin: 0 1em;
  }

  li:hover {
    color: #ffbb33;
    cursor: pointer;
  }

  svg {
    font-size: 1.5em;
  }
`;
export const CopyRight = styled.p`
  margin-top: 2em;

  span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
