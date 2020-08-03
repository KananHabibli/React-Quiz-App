import React, { Component } from 'react'
import { Container, Header, Button, Form, Icon, Select } from 'semantic-ui-react'

import '../assets/css/style.css'

import { Categories, Difficulty } from '../utils/constants'
import NumbOfQuestions from '../utils/amount'

export class PreQuizForm extends Component {
    render() {
        return (
            <Container>
                <Header as='h1' icon textAlign="center" style={{marginTop: '40px'}}>
                    <Icon name='wordpress forms' />
                    <Header.Content>Prequiz Form</Header.Content>
                </Header>
                <Form className="prequiz-form">
                    <Form.Field>
                        <label>Nickname</label>
                        <input placeholder='Meliodas' />
                    </Form.Field>
                    <Form.Field>
                        <label>Select a category</label>
                        <Select options={Categories} />
                    </Form.Field>
                    <Form.Field>
                        <label>Select a difficulty</label>
                        <Select options={Difficulty} />
                    </Form.Field>
                    <Form.Field>
                        <label>Select the number of questions</label>
                        <Select options={NumbOfQuestions} />
                    </Form.Field>
                    
                    <Button fluid inverted color='blue' style={{display: 'block', margin: '0 auto'}} type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default PreQuizForm
