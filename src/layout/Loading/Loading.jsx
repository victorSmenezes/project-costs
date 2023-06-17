import loading from '../../assets/loading.svg'
import { Loader, LoaderContainer } from './styles'


export default function Loading(){
  return(
    <LoaderContainer>
      <Loader src={loading} alt="Loading" />
    </LoaderContainer>
  )
}