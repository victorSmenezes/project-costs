import { FormControl } from "./styles";

export function Input({ type, text, name, placeholder, handleOnChange, value}){
  return(
    <FormControl>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
    </FormControl>
  )
}

export default Input