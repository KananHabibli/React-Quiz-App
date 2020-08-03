let NumbOfQuestions = []

for (let i = 1; i <= 25; i++) {
    let obj = { key: i, text: `${i}`, value: i }
    NumbOfQuestions.push(obj)  
}

export default NumbOfQuestions