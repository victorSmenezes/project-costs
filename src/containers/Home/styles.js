import styled, { keyframes } from 'styled-components';

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

const scale = keyframes`
  from{
    transform:scale(0)
  }
  
  to{
    transform:scale(1)
    }
`;

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
  margin: 2.5% auto;

  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    animation: ${slideh1} 1s ease-out;
  }

  span {
    color: #ffbb33;
    padding: 0 0.2em;
    background-color: #222;
    border-radius: 2px;
  }

  p {
    margin-bottom: 1.5em;
    color: #7b7b7b;
  }

  a,
  p {
    animation: ${scale} 1s ease-in-out;
  }

  img {
    width: 350px;
    margin: 2em 0;
    animation: ${slideIn} 1s ease-out;
  }
`;
