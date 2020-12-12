import { Dropdown, Button, ButtonGroup, OverlayTrigger }from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MusicDrop = props => {

    return(
        <Dropdown as={ButtonGroup}>
        <Button variant="Secondary" className="btn btn-outline-info">Music</Button>

        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item><Link to='/Music/session1'>SESSION 1</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/Music/session2'>SESSION 2</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/Music/session3'>SESSION 3</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        
    )
}

export default MusicDrop;