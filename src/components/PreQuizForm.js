import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header, Button, Form, Icon, Dropdown } from 'semantic-ui-react'

import '../assets/css/style.css'

import { Categories, Difficulty, Type } from '../utils/constants'
import NumbOfQuestions from '../utils/amount'
import nameGenerator from '../utils/nameGenerator'

export class PreQuizForm extends Component {

    constructor(props){
        super(props)
        this.state = {nickname: nameGenerator(), amount: '1', category: '0', difficulty: '0', type: '0'  }
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        
    }

    componentDidMount() {
        console.log(this.state)
    }

    generateURLandFetch() {
        let {amount, category, difficulty, type} = this.state
        console.log(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
            .then(res => {
                console.log(res)
                let questions = []
                res.data.results.map(question => {
                    let newQuestion = {
                        ...question,
                        answers: [question.correct_answer, ...question.incorrect_answers],
                    }
                    delete newQuestion.incorrect_answers
                    questions.push(newQuestion)
                })
                console.log(questions)
            })
    }

    handleInputChange(event) {
        this.setState({nickname: event.target.value})
        console.log(this.state)
    }

    handleAmountChange(event, { value }){
        this.setState({amount: value})
    }

    handleCategoryChange(event, { value }){
        this.setState({category: value})
    }

    handleDifficultyChange(event, { value }){
        this.setState({difficulty: value})
    }

    handleTypeChange(event, { value }){
        this.setState({type: value})
    }

    render() {
        return (
            <Container>
                <Header as='h1' icon textAlign="center" style={{marginTop: '40px'}}>
                    <Icon name='wordpress forms' />
                    <Header.Content>Prequiz Form</Header.Content>
                </Header>
                <Form className="prequiz-form">
                    <Form.Input fluid label='Nickname' onChange={this.handleChange} />
                    <Form.Field>
                        <label>Select a category</label>
                        <Dropdown
                            fluid
                            selection
                            options={Categories}
                            onChange={this.handleCategoryChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Select a difficulty</label>
                        <Dropdown
                            fluid
                            selection
                            options={Difficulty}
                            onChange={this.handleDifficultyChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Select the number of questions</label>
                        <Dropdown
                            fluid
                            selection
                            options={NumbOfQuestions}
                            onChange={this.handleAmountChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Select the type of questions</label>
                        <Dropdown
                            fluid
                            selection
                            options={Type}
                            onChange={this.handleTypeChange}
                        />
                    </Form.Field>
                    
                    <Button fluid inverted color='blue' onClick={() => this.generateURLandFetch()} style={{display: 'block', margin: '0 auto'}}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default PreQuizForm
