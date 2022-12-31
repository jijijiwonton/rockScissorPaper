import { useState } from 'react';
import './App.css';
import Box from './Components/Box';

/**
 * 1. Create 2 boxes
 * 2. Info: target / picture / game result
 * 3. Scissor / paper / rock button
 * 4. Button allows the game process - me
 * 5. Randomly process the game - computer
 * 6. Display the game result
 * 7. Win - box border is Green
 * 8. Defeat - box border is Red
 * 9. Tie - box border is Black
 */
const choice = {
  rock: {
    name: 'Rock',
    image:
      'https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  scissors: {
    name: 'Scissors',
    image:
      'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  paper: {
    name: 'Paper',
    image:
      'https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const [randomSelect, setRandomSelect] = useState(null);

  const [result, setResult] = useState(null);

  const playGame = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let cpChoice = randomChoice();
    setRandomSelect(cpChoice);
    let result = proceedResult(choice[userChoice], cpChoice);
    setResult(result);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const proceedResult = (user, computer) => {
    user = user.name;
    computer = computer.name;

    if (user === computer) {
      return 'Tie';
    } else if (user === 'Rock') {
      return computer === 'Scissors' ? 'Win!' : 'Defeat!';
    } else if (user === 'Scissors') {
      return computer === 'Paper' ? 'Win!' : 'Defeat!';
    } else if (user === 'Paper') {
      return computer === 'Rock' ? 'Win!' : 'Defeat!';
    }
  };

  return (
    <>
      <div className="container">
        {' '}
        <h1 className="author">Jiwon Hwang</h1>
      </div>
      <div className="container">
        <Box target="YOU" item={userSelect} result={result} />
        <Box target="COMPUTER" item={randomSelect} result={result} />
      </div>

      <div className="container">
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('scissors')}>Scissor</button>
        <button onClick={() => playGame('paper')}>Paper</button>
      </div>
    </>
  );
}

export default App;
