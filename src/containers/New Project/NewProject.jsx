import ProjectForm from '../../components/Project/ProjectForm';
import { NewProjectContainer } from './styles';

function NewProject() {
  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </NewProjectContainer>
  );
}

export default NewProject;
