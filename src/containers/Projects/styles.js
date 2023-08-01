import styled, { css } from 'styled-components';

// Project

export const Content = styled.section`
  width: 1300px;
  display: flex;
  margin: 2% auto;
`;

export const ContainerStart = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 690px;
  overflow-y: scroll;
`;
export const NoProjects = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 464px;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  height: 700px;
  padding: 1em;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2em;
`;

// Project Card

export const Cards = styled.div`
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 22%;
  margin: 10px;
  -webkit-box-shadow: 0px 6px 14px -8px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 0px 6px 14px -8px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 6px 14px -8px rgba(0, 0, 0, 0.9);

  h4 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
    border-radius: 2px;
  }

  p {
    color: #7a7a7a;
    margin-bottom: 1em;
  }

  p span {
    font-weight: bold;
  }
`;

export const CategoryText = styled.p`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 5px;

  ${(props) =>
    props.type === 'Infra' &&
    css`
      background-color: #ffaebc;
    `}

  ${(props) =>
    props.type === 'Desenvolvimento' &&
    css`
      background-color: #a0e7e5;
    `}

    ${(props) =>
    props.type === 'Design' &&
    css`
      background-color: #b4f8c8;
    `}

  ${(props) =>
    props.type === 'Planejamento' &&
    css`
      background-color: #fbe7c6;
    `}
`;

export const ActionsCards = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a,
  button {
    text-decoration: none;
    border: none;
    background-color: #fff;
    color: #222;
    font-size: 0.9em;
    padding: 0.6em 1em;
    margin-right: 1em;
    cursor: pointer;
    border: 1px solid #222;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    &:hover {
      background-color: #222;
      color: #ffbb33;
    }
  }

  svg {
    margin-right: 0.5em;
  }
`;
