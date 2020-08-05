import * as actionTypes from './actions'
import axios from 'axios'
import { AllHtmlEntities } from 'html-entities'


import shuffleAnswers from '../utils/shuffleAnswers'
import decodeAnswers from '../utils/shuffleAnswers'


export const fetchQuestions = (url, nickname) => {
    return dispatch => {
        axios.get(url)
            .then(res => {
                let questions = []
                res.data.results.map(question => {
                    let newQuestion = {
                        ...question,
                        answers: decodeAnswers(shuffleAnswers([question.correct_answer, ...question.incorrect_answers])),
                        question: AllHtmlEntities.decode(question.question)
                    }
                    delete newQuestion.incorrect_answers
                    questions.push(newQuestion)
                })
                console.log(questions)
                dispatch({
                    type: actionTypes.FETCH_QUESTIONS,
                    payload: {
                        questions,
                        nickname
                    }
                })
            })
    }
}


export const fetchNextQuestion =  choice => {
    return dispatch => {
        console.log('fetchNextQuestion fired')
        dispatch({
            type: actionTypes.FETCH_NEXT,
            payload: choice
        })
    }
}

export const showState = () => {
    return dispatch => dispatch({
        type: actionTypes.CURRENT_STATE
    })
}

export const redirectHome = () => {
    return dispatch => dispatch({
        type: actionTypes.REDIRECT_HOME
    })
}

