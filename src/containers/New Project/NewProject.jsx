import { useNavigate, } from "react-router-dom";
import ProjectForm from '../../components/Project/ProjectForm';
import { NewProjectContainer } from './styles';

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {

    //initialize cost and services

    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //redirect
        navigate('/projects', {state: { message: 'Projeto criado com sucesso!' }})
      })
      .catch((err) => console.log(err))

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
