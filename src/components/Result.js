import React, { Component } from "react";
import {
  Statistic,
  Container,
  Segment,
  Table,
  Label,
  Icon,
  Button,
  Confirm,
  Card,
} from "semantic-ui-react";

import { connect } from "react-redux";

import calculateScore from "../utils/calculateScore";
import axios from "axios";
import { firebaseURL } from "../config/config";
import * as actionTypes from "../reducers/actions";
export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: this.props.nickname,
      totalQuestions: this.props.numbOfQuestions,
      score: calculateScore(this.props.correct, this.props.numbOfQuestions),
      correct: this.props.correct,
      difficulty: this.props.difficulty,
      category: this.props.category,
      openConfirmation: false,
      openAlert: false,
      alertModalColor: "green",
      alertModalContent: "The result is saved!",
    };

    this.saveButtonHandler = this.saveButtonHandler.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
  }

  openAlertModal() {
    this.setState({ openAlert: true });

    setTimeout(() => {
      this.setState({ openAlert: false });
    }, 3000);
  }

  saveButtonHandler() {
    let result = { ...this.state };

    return axios
      .post(`${firebaseURL}/result.json`, result)
      .then((response) => {
        console.log(response);

        this.openAlertModal();
        this.setState({ alertModalColor: "green" });
        this.setState({ alertModalContent: "The result is saved!" });
      })
      .catch((e) => {
        this.openAlertModal();
        this.setState({ alertModalColor: "red" });
        this.setState({
          alertModalContent:
            "The result can't be saved in Firebase at the moment!",
        });
      });
  }

  render() {
    return (
      <Container>
        <Button
          icon
          color="red"
          size="large"
          style={{ marginRight: "15px" }}
          onClick={this.saveButtonHandler}
        >
          <Icon name="save" style={{ marginRight: "10px" }} />
          Save to Firebase
        </Button>
        <Button
          icon
          color="green"
          size="large"
          onClick={() => this.setState({ openConfirmation: true })}
        >
          <Icon name="redo" style={{ marginRight: "15px" }} />
          Retake the Quiz
        </Button>
        <Confirm
          header="Are you sure you want to retake this quiz?"
          cancelButton="Never mind"
          confirmButton="Retake the quiz"
          open={this.state.openConfirmation}
          onCancel={() => this.setState({ openConfirmation: false })}
          onConfirm={this.props.retakeQuiz}
        />
        {this.state.openAlert && (
          <Card
            fluid
            color={this.state.alertModalColor}
            header={this.state.alertModalContent}
          />
        )}

        <Segment color="blue" raised>
          <Label as="a" color="red" ribbon>
            <Icon size="large" name="chart line" />
            {`Result of ${this.props.nickname}`}
          </Label>
          <Statistic.Group widths="four">
            <Statistic color="blue">
              <Statistic.Value>{this.props.numbOfQuestions}</Statistic.Value>
              <Statistic.Label>Total Questions</Statistic.Label>
            </Statistic>

            <Statistic color={this.state.score >= 60 ? "green" : "red"}>
              <Statistic.Value>{this.state.score}%</Statistic.Value>
              <Statistic.Label>Your Score</Statistic.Label>
            </Statistic>

            <Statistic color={this.state.score >= 60 ? "green" : "red"}>
              <Statistic.Value>{this.props.correct}</Statistic.Value>
              <Statistic.Label>Right Answers</Statistic.Label>
            </Statistic>
            <Statistic color="yellow">
              <Statistic.Value>60%</Statistic.Value>
              <Statistic.Label>Passing Score</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
        <Segment>
          <Label as="a" color="red" ribbon>
            <Icon name="help" size="large" />
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
                );
              })}
            </Table.Body>
          </Table>
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    numbOfQuestions: state.numbOfQuestions,
    correct: state.correct,
    score: state.score,
    questions: state.questions,
    userAnswers: state.userAnswers,
    nickname: state.nickname,
    difficulty: state.difficulty,
    category: state.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retakeQuiz: () => dispatch({ type: actionTypes.RETAKE_QUIZ }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
