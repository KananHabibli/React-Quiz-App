import * as actionTypes from './actions'

const initialState = {
    nickname: '',
    currentQuestion: {},
    questions: [],
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
                currentQuestion: action.payload[0],
                questions: action.payload,
                numbOfQuestions: action.payload.length,
                formActive: false,
                questionActive: true
            }
        default:
            console.log(state)
            return state
    }
}

export default reducer