import { Dropdown, Button, ButtonGroup }from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DKnight from './dKnight'

const MovieDrop = props => {

    return(
        <Dropdown as={ButtonGroup} className='dropStuff'>
        <Button variant="Secondary" className="btn btn-outline-info">Movies</Button>

        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item><Link to='/Movies/DKnight'>DEMON KNIGHT</Link></Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
}

export default MovieDrop;
