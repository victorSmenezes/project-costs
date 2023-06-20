import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Container, CopyRight, SocialList } from './styles';

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
      <CopyRight>
        <span>Costs</span> &copy; 2023
      </CopyRight>
    </Container>
  );
}

export default Footer;
