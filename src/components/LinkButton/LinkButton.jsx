
import { Button } from './styles'

function LinkButton({to, text}) {
    return (
        
            <Button to={to}>
                {text}
            </Button>
        
    )
}

LinkButton.propTypes;

export default LinkButton