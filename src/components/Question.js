import React, { Component } from 'react'
import { List, Container, Segment, Radio, Form } from 'semantic-ui-react'

import '../assets/css/Question.css'

export class Question extends Component {

    state = {}
    handleChange = (e, { value }) => {
        this.setState({ value })
        console.log(value)
    }

    render() {
        return (
            <Container className="question-box">
                <List style={{marginBottom: '40px'}}>
                    <List.Item style={{marginBottom: '15px'}} icon='question circle outline' content='Question: 1 out of 10' />
                    <List.Item style={{marginBottom: '15px'}} icon='tags' content='Category: Science: Gadgets' />
                    <List.Item style={{marginBottom: '15px'}} icon='check circle outline' content="Difficulty: Medium" />
                </List>
                <Segment color='blue' raised> 1. What five letter word is the motto of the IBM Computer company? </Segment>
                <Segment color="blue">
                    <Form>
                        <Form.Field>
                            <Radio
                                label='Think'
                                name='radioGroup'
                                value='Think'
                                checked={this.state.value === 'Think'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Click'
                                name='radioGroup'
                                value='Click'
                                checked={this.state.value === 'Click'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Logic'
                                name='radioGroup'
                                value='Logic'
                                checked={this.state.value === 'Logic'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Pixel'
                                name='radioGroup'
                                value='Pixel'
                                checked={this.state.value === 'Pixel'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Form>
                </Segment>
                
            </Container>
        )
    }
}

export default Question
