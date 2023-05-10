import { Container, CopyRight, SocialList } from './styles'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <Container>
            <SocialList>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </SocialList>
            <CopyRight><span>Costs</span> &copy; 2023</CopyRight>
        </Container>
    )
}

export default Footer