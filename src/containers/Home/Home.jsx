import { HomeContainer } from './styles'
import savings from '../../assets/savings.svg'
import LinkButton from '../../components/LinkButton/LinkButton'

function Home() {

    return (
        <HomeContainer>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={savings} alt="Costs" />
        </HomeContainer>
    )
}

export default Home