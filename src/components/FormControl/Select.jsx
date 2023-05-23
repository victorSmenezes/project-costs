import { FormControl } from "./styles";

export function Select ({ text, name, options, handleOnChange, value}){
  return(
    <FormControl>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
      </select>
    </FormControl>
  )
}

export default Select