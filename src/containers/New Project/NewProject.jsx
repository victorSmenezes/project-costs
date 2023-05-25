import ProjectForm from '../../components/Project/ProjectForm';
import { NewProjectContainer } from './styles';

function NewProject() {
  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <hr />
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" />
    </NewProjectContainer>
  );
}

export default NewProject;
