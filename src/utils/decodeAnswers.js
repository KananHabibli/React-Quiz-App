import he from 'he'

const decodeAnswers = answers => {
    return answers.map(answer => he.decode(answer))
}

export default decodeAnswers