import he from "he";

const decodeAnswers = (answers) => answers.map((answer) => he.decode(answer));

export default decodeAnswers;
