import React, { Component } from 'react'
import { Statistic, 
         Container, 
         Segment, 
         Table, 
         Label, 
         Icon, 
         Button } from 'semantic-ui-react'

import { connect } from 'react-redux'

import '../assets/css/Result.css'
import calculateScore from '../utils/calculateScore'
import axios from 'axios'
import { firebaseURL } from '../config/config'
import * as actionTypes from '../reducers/actions'
export class Result extends Component {

    constructor(props){
        super(props)

        this.state = {
            nickname: this.props.nickname,
            totalQuestions: this.props.numbOfQuestions,
            score: calculateScore(this.props.correct, this.props.numbOfQuestions),
            correct: this.props.correct,
            difficulty: this.props.difficulty,
            category: this.props.category
        }

        this.saveButtonHandler = this.saveButtonHandler.bind(this)
    }

    saveButtonHandler() {

        let result = {...this.state}

        axios.post(`${firebaseURL}/result.json`, result)
            .then(response => {
                console.log('Result has been saved')
                console.log(response)
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <Container>
                <Button icon color="red" size='large' style={{marginRight: '15px'}} onClick={this.saveButtonHandler}>
                    <Icon name='save' />
                    Save to Firebase
                </Button>
                <Button icon color="green" size='large' onClick={this.props.retakeQuiz}>
                    <Icon name='redo' />
                    Retake the Quiz
                </Button>
                <Segment color="blue" raised>
                    <Label as='a' color='red' ribbon>
                        <Icon size="large" name='chart line' />
                        {`Result of ${this.props.nickname}`}
                    </Label>
                    <Statistic.Group widths='four'>
                        <Statistic color="blue">
                            <Statistic.Value>{this.props.numbOfQuestions}</Statistic.Value>
                            <Statistic.Label>Total Questions</Statistic.Label>
                        </Statistic>
                    
                        <Statistic  color={this.state.score >= 60 ? 'green' : 'red'}>
                            <Statistic.Value>
                                {this.state.score}%
                            </Statistic.Value>
                            <Statistic.Label>Your Score</Statistic.Label>
                        </Statistic>
                    
                        <Statistic color={this.state.score >= 60 ? 'green' : 'red'}>
                            <Statistic.Value>
                                {this.props.correct}
                            </Statistic.Value>
                            <Statistic.Label>Right Answers</Statistic.Label>
                        </Statistic>
                        <Statistic color="yellow">
                            <Statistic.Value>
                                60%
                            </Statistic.Value>
                            <Statistic.Label>Passing Score</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </Segment>
                <Segment>
                    <Label as='a' color='red' ribbon>
                        <Icon name='help' size="large"/>
                        Review
                    </Label>
                    <Table celled color="blue">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>No.</Table.HeaderCell>
                                <Table.HeaderCell>Question</Table.HeaderCell>
                                <Table.HeaderCell>Difficulty</Table.HeaderCell>
                                <Table.HeaderCell>Right Answer</Table.HeaderCell>
                                <Table.HeaderCell>Your Answer</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>
                            {this.props.questions.map((question, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{question.question}</Table.Cell>
                                        <Table.Cell>{question.difficulty}</Table.Cell>
                                        <Table.Cell>{question.correct_answer}</Table.Cell>
                                        <Table.Cell>{this.props.userAnswers[index]}</Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </Segment>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        numbOfQuestions: state.numbOfQuestions,
        correct: state.correct,
        score: state.score,
        questions: state.questions,
        userAnswers: state.userAnswers,
        nickname: state.nickname,
        difficulty: state.difficulty,
        category: state.category
    }
}

function mapDispatchToProps(dispatch){
    return {
        retakeQuiz: () => dispatch({type: actionTypes.RETAKE_QUIZ})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
