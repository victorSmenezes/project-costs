import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LinkButton from '../../components/LinkButton/LinkButton';
import Loading from '../../layout/Loading/Loading';
import Message from '../../layout/Message/Message';
import ProjectCard from './ProjectCard';
import {
  ContainerStart,
  Content,
  NoProjects,
  ProjectContainer,
  TitleContainer
} from './styles';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  return (
    <Content>
      <ProjectContainer>
        <TitleContainer>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Criar Projeto" />
        </TitleContainer>

        {message && <Message type="Success" msg={message} />}
        {projectMessage && <Message type="Success" msg={projectMessage} />}

        <ContainerStart>
          {projects.length > 0 &&
            projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  budget={project.budget}
                  category={project.category.name}
                  handleRemove={removeProject}
                />
              );
            })}

          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <NoProjects>Não há projetos cadastrados!</NoProjects>
          )}
        </ContainerStart>
      </ProjectContainer>
    </Content>
  );
}

export default Projects;
