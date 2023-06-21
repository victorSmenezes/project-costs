import { BsFillTrashFill } from 'react-icons/bs';

import { ActionsCards, Cards } from '../../containers/Projects/styles';

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove
}) {
  const remove = (e) => {};

  return (
    <Cards>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R$ {cost}
      </p>

      <p>{description}</p>
      <ActionsCards>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </ActionsCards>
    </Cards>
  );
}
