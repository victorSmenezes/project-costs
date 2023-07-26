import { useEffect, useState } from 'react';

import api from '../../services/api';
import Input from '../FormControl/Input';
import Select from '../FormControl/Select';
import SubmitButton from '../FormControl/SubmitButton';
import { Form } from './styles';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    api
      .get('/categories')
      .then((resp) => {
        setCategories(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    });
  }

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      {setCategories && (
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />
      )}

      <SubmitButton text={btnText} />
    </Form>
  );
}

export default ProjectForm;
