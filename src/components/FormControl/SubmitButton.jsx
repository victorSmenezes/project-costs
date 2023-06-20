import { FormControl, Button } from './styles';

export function SubmitButton({ text }) {
  return (
    <FormControl>
      <Button>{text}</Button>
    </FormControl>
  );
}

export default SubmitButton;
