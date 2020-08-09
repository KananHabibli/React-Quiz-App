import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List,
         Container,
         Segment, 
         Radio, 
         Form, 
         Grid, 
         Button,
         Icon } from 'semantic-ui-react'


import { fetchPreviousQuestion, fetchNextQuestion, showState } from '../reducers/dispatch'

export class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (e, { value }) => {
        this.setState({ value })
        console.log(value)
    }

    checked(answer) {
        console.log('Current value ' + this.state.value)
        return  answer === this.state.value
    }

    render() {
        let previous = ''
        if(this.props.currentQuestionIndex > 1){
            previous = (<Grid.Column floated="left" width={3}>
                            <Button color='blue' primary>
                                <Icon name='left arrow'/>
                                Previous
                            </Button>
                        </Grid.Column>)
        }
        return (
            <Container className="question-box">
                <List style={{marginBottom: '40px'}}>
                    <List.Item className='quiz-info' icon='address card outline' content={
                        `Nickname: ${this.props.nickname}`
                    } />
                    <List.Item className='quiz-info' icon='question circle outline' content={
                        `Question: ${this.props.currentQuestionIndex} out of ${this.props.numbOfQuestions}`
                    } />
                    <List.Item className='quiz-info' icon='tags' content={`Category: ${this.props.currentQuestion.category}`} />
                    <List.Item className='quiz-info' icon='check circle outline' content={`Difficulty: ${this.props.currentQuestion.difficulty}`} />
                </List>
                <Segment color='blue' className="quiz-question" raised> {this.props.currentQuestionIndex}. { this.props.currentQuestion.question} </Segment>
                <Segment color="blue">
                    <Form>
                        {this.props.currentQuestion.answers.map((answer, index) => {
                            return (
                                <Form.Field key={`${index}&${answer}`} className='quiz-answer'>
                                    <Radio
                                        label={answer}
                                        name='radioGroup'
                                        value={answer}
                                        checked={this.checked(answer)}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                            )
                        })}
                    </Form>
                </Segment>
                <Grid>
                    {previous}
                    <Grid.Column floated="right" width={3}>
                        <Button color={this.props.nextButtonColor} onClick={() => this.props.fetchNextQuestion(this.state.value)}>
                            {this.props.nextButtonText}
                            <Icon name='right arrow'/>
                        </Button>
                    </Grid.Column>
                    
                </Grid>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        currentQuestion: state.currentQuestion,
        currentQuestionIndex: state.currentQuestionIndex,
        numbOfQuestions: state.numbOfQuestions,
        nickname: state.nickname,
        previousAnswer: state.previousAnswer,
        nextButtonText: state.nextButtonText,
        nextButtonColor: state.nextButtonColor
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchNextQuestion: choice => dispatch(fetchNextQuestion(choice)),
        fetchPreviousQuestion: () => dispatch(fetchPreviousQuestion()),
        showState: () => dispatch(showState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question)
