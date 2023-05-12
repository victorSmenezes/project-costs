import { Button } from './styles';

function LinkButton({ to, text }) {
  return <Button to={to}>{text}</Button>;
}

export default LinkButton;
