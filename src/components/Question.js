import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AllHtmlEntities } from 'html-entities'

import { List,
         Container,
         Segment, 
         Radio, 
         Form, 
         Grid, 
         Button,
         Icon } from 'semantic-ui-react'

import '../assets/css/Question.css'

export class Question extends Component {

    state = {}
    handleChange = (e, { value }) => {
        this.setState({ value })
        console.log(value)
    }

    componentDidMount(){
        console.log(this.props.state)
    }

    render() {
        return (
            <Container className="question-box">
                <List style={{marginBottom: '40px'}}>
                    <List.Item style={{marginBottom: '15px'}} icon='question circle outline' content={
                        `Question: ${this.props.currentQuestionIndex} out of ${this.props.numbOfQuestions}`
                    } />
                    <List.Item style={{marginBottom: '15px'}} icon='tags' content={`Category: ${this.props.currentQuestion.category}`} />
                    <List.Item style={{marginBottom: '15px'}} icon='check circle outline' content={`Difficulty: ${this.props.currentQuestion.difficulty}`} />
                </List>
                <Segment color='blue' raised> { AllHtmlEntities.decode(this.props.currentQuestion.question)} </Segment>
                <Segment color="blue">
                    <Form>
                    {this.props.currentQuestion.answers.map((answer, index) => {
                        return (
                            <Form.Field key={index}>
                            <Radio
                                label={answer}
                                name='radioGroup'
                                value={answer}
                                checked={this.state.value === {answer}}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        )
                    })}
                    </Form>
                </Segment>
                <Grid>
                    <Grid.Column floated="right" width={3}>
                        <Button color='blue' primary>
                            Next
                            <Icon name='right arrow' />
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
        numbOfQuestions: state.numbOfQuestions
    }
}


export default connect(mapStateToProps)(Question)
