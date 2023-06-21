import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Container, CopyRight, SocialList } from './styles';

function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect((_) => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
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
        <span>Costs</span> &copy; {currentYear}
      </CopyRight>
    </Container>
  );
}

export default Footer;
