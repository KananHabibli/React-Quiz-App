import * as actionTypes from './actions'

const initialState = {
    nickname: '',
    category: '',
    difficulty: '',
    currentQuestion: {},
    previousAnswer: '',
    currentQuestionIndex: 1,
    questions: [],
    userAnswers: [],
    correct: 0,
    numbOfQuestions: 0,
    isLastCorrect: false,
    formActive: true,
    questionActive: false,
    resultActive: false,
    nextButtonText: 'Next',
    nextButtonColor: 'blue'
}


function reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.FETCH_QUESTIONS:
            return {
                ...state,
                currentQuestion: action.payload.questions[0],
                questions: action.payload.questions,
                category: action.payload.questions[0].category,
                difficulty: action.payload.questions[0].difficulty,
                numbOfQuestions: action.payload.questions.length,
                nextButtonText: action.payload.questions.length === 1 ? 'See Your Result' : 'Next',
                nextButtonColor: action.payload.questions.length === 1 ? 'yellow' : 'blue',
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
                    isLastCorrect: action.payload === state.currentQuestion.correct_answer,
                    userAnswers: [...state.userAnswers, action.payload],
                    nextButtonText: 'See Your Result',
                    nextButtonColor: 'yellow'
                }
            } else {
                return {
                    ...state,
                    currentQuestion: state.questions[state.currentQuestionIndex],
                    previousAnswer: action.payload,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    correct: action.payload === state.currentQuestion.correct_answer ? state.correct + 1 : state.correct,
                    isLastCorrect: action.payload === state.currentQuestion.correct_answer,
                    userAnswers: [...state.userAnswers, action.payload]
                }
            }
        case actionTypes.FETCH_PREVIOUS:
            return {
                ...state,
                currentQuestion: state.questions[state.currentQuestionIndex - 2],
                currentQuestionIndex: state.currentQuestionIndex - 1,
                correct: state.isLastCorrect && state.correct - 1 ,
                userAnswers: [...state.userAnswers].splice(state.userAnswers.length - 1, 1)
            }
        case actionTypes.RETAKE_QUIZ:
            return {
                ...state,
                currentQuestion: state.questions[0],
                currentQuestionIndex: 1,
                previousAnswer: '',
                userAnswers: [],
                correct: 0,
                isLastCorrect: false,
                questionActive: true,
                resultActive: false,
                nextButtonText: state.numbOfQuestions === 1 ? 'See Your Result' : 'Next',
                nextButtonColor: state.numbOfQuestions === 1 ? 'yellow' : 'blue'
            }
        case actionTypes.REDIRECT_HOME:
            return {
                ...state,
                formActive: true,
                questionActive: false,
                resultActive: false,
                isLastCorrect: false,
                currentQuestion: {},
                previousAnswer: '',
                currentQuestionIndex: 1,
                questions: [],
                userAnswers: [],
                correct: 0,
                numbOfQuestions: 0,
            }
        case actionTypes.CURRENT_STATE:
            console.log(state)
            return state
        default:
            return state
    }
}

export default reducer