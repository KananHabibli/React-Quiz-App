import React, { Component } from 'react'
import { Segment, Container, Menu, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'


import { redirectHome } from '../reducers/dispatch'

class Navbar extends Component {
    render() {
        return (
            <Segment style={{backgroundColor: '#0f4c75'}}>
                <Container>
                    <Menu compact text fluid widths={2}  inverted color="blue">
                        <Menu.Item header style={{color: '#fff'}} onClick={this.props.redirectHome}>Quiz App</Menu.Item>
                        <Menu.Item>
                            Dark Mode <Checkbox toggle checked={this.props.checked} onClick={this.props.clickHandler} style={{marginLeft: '20px', backgroundColor: '#fff', borderRadius: '15px'}}/>
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
