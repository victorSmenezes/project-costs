import { useLocation } from 'react-router-dom'
import Message from '../../layout/Message/Message'
import {
    ContainerStart,
    Content,
    ProjectContainer,
    TitleContainer
} from './styles'

import LinkButton from '../../components/LinkButton/LinkButton'
import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Content>
            <ProjectContainer>
                <TitleContainer>
                    <h1>Meus Projetos</h1>
                    <LinkButton to="/newproject" text="Criar Projeto" />
                </TitleContainer>

                {message && <Message type="Success" msg={message} />}

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
                           />
                            )
                        })}
                </ContainerStart>

            </ProjectContainer>
        </Content>
    )
}

export default Projects