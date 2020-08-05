import { AllHtmlEntities } from 'html-entities'

const decodeAnswers = answers => {
    answers.map(answer => AllHtmlEntities.decode(answer))
}

export default decodeAnswers