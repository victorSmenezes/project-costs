import { FormControl, Button } from './styles';

function SubmitButton({ text }) {
  return (
    <FormControl>
      <Button>{text}</Button>
    </FormControl>
  );
}

export default SubmitButton;
