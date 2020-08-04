import React from 'react'
import { Segment, Container, Menu, Checkbox } from 'semantic-ui-react'


const Navbar = props => {
    return (
        <Segment inverted color="blue" primary>
            <Container>
                <Menu compact text fluid widths={2}  inverted color="blue">
                    <Menu.Item header style={{color: '#fff'}}>Quiz App</Menu.Item>
                    <Menu.Item>
                        Dark Mode <Checkbox toggle style={{marginLeft: '20px', backgroundColor: '#fff', borderRadius: '15px'}}/>
                    </Menu.Item>
                </Menu>
            </Container>
        </Segment>
    )
}

export default Navbar
