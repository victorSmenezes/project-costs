import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../layout/Loading/Loading';
import {
  Button,
  Container,
  DetailsContainer,
  ProjectDetails,
  ProjectInfo
} from './styles';

export default function ProjectEdit() {
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GEt',
        Headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <ProjectDetails>
          <Container>
            <DetailsContainer>
              <h1>Projeto: {project.name}</h1>
              <Button onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </Button>
              {!showProjectForm ? (
                <ProjectInfo>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span>R$ {project.budget}
                  </p>
                  <p>
                    <span>Total de Utilizado:</span>R$ {project.cost}
                  </p>
                </ProjectInfo>
              ) : (
                <ProjectInfo>
                  <p>Detalhes do projeto</p>
                </ProjectInfo>
              )}
            </DetailsContainer>
          </Container>
        </ProjectDetails>
      ) : (
        <Loading />
      )}
      <div />
    </>
  );
}
