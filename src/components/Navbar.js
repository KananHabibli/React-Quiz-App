import React, { Component } from 'react'
import { Segment, Container, Menu, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'


import { redirectHome } from '../reducers/dispatch'

class Navbar extends Component {
    render() {
        return (
            <Segment inverted color="blue" primary="true">
                <Container>
                    <Menu compact text fluid widths={2}  inverted color="blue">
                        <Menu.Item header style={{color: '#fff'}} onClick={this.props.redirectHome}>Quiz App</Menu.Item>
                        <Menu.Item>
                            Dark Mode <Checkbox toggle style={{marginLeft: '20px', backgroundColor: '#fff', borderRadius: '15px'}}/>
                        </Menu.Item>
                    </Menu>
                </Container>
            </Segment>
        )
    }
}

function mapDispatchtoProps(dispatch){
    return {
        redirectHome: () => dispatch(redirectHome())
    }
}

export default connect(null, mapDispatchtoProps)(Navbar)
