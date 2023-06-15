import { useLocation } from 'react-router-dom'
import Message from '../../layout/Message/Message'
import { 
    ContainerStart, 
    Content, 
    ProjectContainer, 
    TitleContainer } from './styles'
    
import LinkButton from '../../components/LinkButton/LinkButton'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <Content>
            <ProjectContainer>
                <TitleContainer>
                    <h1>Meus Projetos</h1>
                        <LinkButton to="/newproject" text="Criar Projeto" />
                </TitleContainer>
                
            {message && <Message type="Success" msg={message} />}

            <ContainerStart>
                <p>Projetos...</p>
            </ContainerStart>
            
            </ProjectContainer>
        </Content>
    )
}

export default Projects