import styled from 'styled-components';

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

  img {
    width: 350px;
    margin: 2em 0;
  }
`;
