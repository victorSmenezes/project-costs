import { Link } from 'react-router-dom'
import { Button } from './styles'

function LinkButton({to, text}) {
    return (
        <Button>
            <Link to={to}>
                {text}
            </Link>
        </Button>
    )
}

LinkButton.propTypes;

export default LinkButton