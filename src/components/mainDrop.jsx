import { Dropdown, Button, ButtonGroup }from 'react-bootstrap'

const MainDrop = props => {

    return(
        <Dropdown as={ButtonGroup}>
        <Button variant="Secondary">Split Button</Button>

        <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
}

export default MainDrop;
