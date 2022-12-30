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
function App() {
  return (
    <div className="container">
      <Box />
      <Box />
    </div>
  );
}

export default App;
