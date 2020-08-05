import * as actionTypes from './actions'

const initialState = {
    nickname: '',
    currentQuestion: {},
    currentQuestionIndex: 1,
    questions: [],
    userAnswers: [],
    correct: 0,
    numbOfQuestions: 0,
    formActive: true,
    questionActive: false,
    resultActive: false
}


function reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.FETCH_QUESTIONS:
            return {
                ...state,
                currentQuestion: action.payload.questions[0],
                questions: action.payload.questions,
                numbOfQuestions: action.payload.questions.length,
                nickname: action.payload.nickname,
                formActive: false,
                questionActive: true
            }
        case actionTypes.FETCH_NEXT:
            if(state.currentQuestionIndex === state.numbOfQuestions){
                return {
                    ...state,
                    questionActive: false,
                    resultActive: true,
                    correct: action.payload === state.currentQuestion.correct_answer ? state.correct + 1 : state.correct,
                    userAnswers: [...state.userAnswers, action.payload]
                }
            } else {
                return {
                    ...state,
                    currentQuestion: state.questions[state.currentQuestionIndex],
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    correct: action.payload === state.currentQuestion.correct_answer ? state.correct + 1 : state.correct,
                    userAnswers: [...state.userAnswers, action.payload]
                }
            }
        case actionTypes.REDIRECT_HOME:
            return {
                ...state,
                formActive: true,
                questionActive: false,
                resultActive: false
            }
        case actionTypes.CURRENT_STATE:
            console.log(state)
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer