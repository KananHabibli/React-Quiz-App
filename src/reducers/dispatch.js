import * as actionTypes from './actions'
import axios from 'axios'

export const fetchQuestions = url => {
    return dispatch => {
        axios.get(url)
            .then(res => {
                let questions = []
                res.data.results.map(question => {
                    let newQuestion = {
                        ...question,
                        answers: [question.correct_answer, ...question.incorrect_answers],
                    }
                    delete newQuestion.incorrect_answers
                    questions.push(newQuestion)
                })
                dispatch({
                    type: actionTypes.FETCH_QUESTIONS,
                    payload: questions
                })
            })
    }
}