import { BsFillTrashFill, BsPencil } from 'react-icons/bs';

import { ActionsCards, Cards } from '../../containers/Projects/styles';

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <Cards>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R$ {cost}
      </p>

      <p>{description}</p>
      <ActionsCards>
        {/*     <button>
          {/* <Link to={`/project/${id}`}> 
          <BsPencil />
          Editar
          {/*  </Link> 
        </button>
        */}

        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </ActionsCards>
    </Cards>
  );
}
