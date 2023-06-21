import { styled } from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProjectDetails = styled.div`
  padding: 2em;
  position: relative;

  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }

  h1 {
    background-color: #222;
    border-radius: 2px;
    color: #ffbb33;
    padding: 0.4em;
  }

  span {
    font-weight: bold;
  }
`;

export const DetailsContainer = styled.div`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ServiceFormContainer = styled.div`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  transition: 0.5s;
  border: none;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  max-height: 40px;

  &:hover {
    color: #ffbb33;
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
`;

export const ContainerServices = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 330px;
  overflow-y: scroll;
`;
