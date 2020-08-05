import React, { Component } from 'react'
import { Statistic, Container, Segment, Table, Label, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import '../assets/css/Result.css'
import calculateScore from '../utils/calculateScore'
export class Result extends Component {

    render() {
        let score = calculateScore(this.props.correct, this.props.numbOfQuestions)
        return (
            <Container>
                <Segment color="blue" raised>
                    <Label as='a' color='red' ribbon>
                        <Icon size="large" name='chart line' />
                        Result
                    </Label>
                    <Statistic.Group widths='four'>
                        <Statistic color="blue">
                            <Statistic.Value>{this.props.numbOfQuestions}</Statistic.Value>
                            <Statistic.Label>Total Questions</Statistic.Label>
                        </Statistic>
                    
                        <Statistic  color={score >= 60 ? 'green' : 'red'}>
                            <Statistic.Value>
                                {score}%
                            </Statistic.Value>
                            <Statistic.Label>Your Score</Statistic.Label>
                        </Statistic>
                    
                        <Statistic color={score >= 60 ? 'green' : 'red'}>
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
        userAnswers: state.userAnswers
    }
}

export default connect(mapStateToProps)(Result)
