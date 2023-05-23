import Input from "../FormControl/Input"
import Select from "../FormControl/Select"
import { SubmitButton } from "../FormControl/SubmitButton"
import { Form } from "./styles"

function ProjectForm({btnText}) {
    return (
        <Form >
            <Input type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto" />

            <Input type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="Insira o orçamento total" />

            <Select name="category_id" text="Selecione a categoria" />
            
            <SubmitButton text={btnText} />
        </Form>
    )
}

export default ProjectForm