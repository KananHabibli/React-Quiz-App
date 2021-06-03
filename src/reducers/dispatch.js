import * as actionTypes from "./actions";
import axios from "axios";
import he from "he";

import shuffleAnswers from "../utils/shuffleAnswers";
import decodeAnswers from "../utils/decodeAnswers";

export const fetchQuestions = (url, nickname) => {
  return (dispatch) => {
    axios.get(url).then((res) => {
      let questions = [];

      // eslint-disable-next-line
      res.data.results.map((question) => {
        let newQuestion = {
          ...question,
          answers: decodeAnswers(
            shuffleAnswers([
              question.correct_answer,
              ...question.incorrect_answers,
            ])
          ),
          question: he.decode(question.question),
        };
        delete newQuestion.incorrect_answers;
        questions.push(newQuestion);
      });

      dispatch({
        type: actionTypes.FETCH_QUESTIONS,
        payload: {
          questions,
          nickname,
        },
      });
    });
  };
};

export const fetchNextQuestion = (choice) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_NEXT,
      payload: choice,
    });
  };
};

export const fetchPreviousQuestion = (choice) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PREVIOUS,
      payload: choice,
    });
  };
};

export const showState = () => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.CURRENT_STATE,
    });
};

export const redirectHome = () => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.REDIRECT_HOME,
    });
};
