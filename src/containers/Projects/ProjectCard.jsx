import { Link } from 'react-router-dom'
import { ActionsCards, Cards, CategoryText, Span } from './styles'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function ProjectCard({ id, name, budget, category, handleRemove, type }) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }


  return (
    <Cards>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R$ {budget} 
      </p>
      <CategoryText>
        <Span type={category}></Span> {category}
      </CategoryText>

      <ActionsCards>
        <Link to='/'>
          <BsPencil />
          Editar
        </Link>

        <button onClick={remove}>
          <BsFillTrashFill />
          Remover
        </button>
      </ActionsCards>
    </Cards>
  )
}