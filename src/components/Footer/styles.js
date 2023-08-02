import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from{
    transform:scale(0)
  }
  
  to{
    transform:scale(1)
    }
`;

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
    animation: ${scale} 0.5s ease-in-out;
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
  animation: ${scale} 0.5s ease-in-out;

  span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
