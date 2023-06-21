import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { parse, v4 as uuidv4 } from 'uuid';

import ProjectForm from '../../components/Project/ProjectForm';
import ServiceCard from '../../components/Service/ServiceCard';
import ServiceForm from '../../components/Service/ServiceForm';
import Loading from '../../layout/Loading/Loading';
import Message from '../../layout/Message/Message';
import {
  Button,
  Container,
  DetailsContainer,
  ProjectDetails,
  ProjectInfo,
  ServiceFormContainer
} from './styles';

export default function ProjectEdit() {
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GEt',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(project) {
    setMessage('');

    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!');
      setType('Error');
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage('Projeto atualizado!');
        setType('Success');
      })
      .catch((err) => console.log(err));
  }

  function createService(project) {
    setMessage('');

    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // Valização de valor máximo
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço');
      setType('Error');
      project.services.pop();
      return false;
    }

    // Add cost de serviço ao total do cost do projeto

    project.cost = newCost;

    // Update project

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  function removeService() {}

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <ProjectDetails>
          <Container>
            {message && <Message type={type} msg={message} />}
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
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </ProjectInfo>
              )}
            </DetailsContainer>
            <ServiceFormContainer>
              <h2>Adicione um serviço:</h2>
              <Button onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </Button>
              <ProjectInfo>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </ProjectInfo>
            </ServiceFormContainer>

            <h2>Serviços</h2>
            <Container>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}

              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Container>
          </Container>
        </ProjectDetails>
      ) : (
        <Loading />
      )}
      <div />
    </>
  );
}
