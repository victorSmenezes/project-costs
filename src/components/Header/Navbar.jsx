import { Link } from 'react-router-dom';

import logo from '../../assets/costs_logo.png';
import { Item, List, Nav } from './styles';

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="Costs" />
      </Link>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/projects">Projetos</Link>
        </Item>

        <Item>
          <Link to="/company">Empresa</Link>
        </Item>
        <Item>
          <Link to="/contact">Contato</Link>
        </Item>
      </List>
    </Nav>
  );
}

export default Navbar;
