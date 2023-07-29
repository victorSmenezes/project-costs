import { useNavigate } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

import ProjectForm from '../../components/Project/ProjectForm';
import api from '../../services/api';
import { NewProjectContainer } from './styles';

function NewProject() {
  const navigate = useNavigate();
  const id = uuid();

  async function createPost(project) {
    // initialize cost and services

    project.cost = 0;
    project.services = [];

    api
      .post('/projects', {
        id,
        ...project
      })
      .then((resp) => {
        console.log(resp.data);
        // redirect
        navigate('/projects', {
          state: { message: 'Projeto criado com sucesso!' }
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <hr />
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </NewProjectContainer>
  );
}

export default NewProject;
