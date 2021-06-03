const Max = 1000000000;

const getRandomInt = () => Math.floor(Math.random() * Math.floor(Max));

const nameGenerator = () => {
  let playerID = getRandomInt();
  return `Player ${playerID}`;
};

export default nameGenerator;
