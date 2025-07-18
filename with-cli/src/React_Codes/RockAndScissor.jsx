import React, { useState,useEffect  } from 'react';
import './Rock.css';

const choices = ['✊', '🖐️', '✌️'];

function RockAndScissor() {
  const [userChoice, setUserChoice] = useState('');
  const [botChoice, setBotChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

 useEffect(() => {
    if (userScore === 5) {
      alert('Congratulations! You win the game!');
      restartGame();
    } else if (botScore === 5) {
      alert('Sorry, the bot wins the game!');
      restartGame();
    }
  }, [userScore, botScore]);

  const getBotChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (user, bot) => {
    if (user === bot) {
      return 'It\'s a tie!';
    }
    if (
      (user === '✊' && bot === '✌️') ||
      (user === '🖐️' && bot === '✊') ||
      (user === '✌️' && bot === '🖐️')
    ) {
      return 'You win!';
    } else {
      return 'Bot wins!';
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    setTimeout(() => {
      const botChoice = getBotChoice();
      const gameResult = determineWinner(choice, botChoice);
      setBotChoice(botChoice);
      setResult(gameResult);
      setGamesPlayed(gamesPlayed + 1);

      if (gameResult === 'You win!') {
        setUserScore(userScore + 1);
      } else if (gameResult === 'Bot wins!') {
        setBotScore(botScore + 1);
      }
    }, 700); // Delay of 3 seconds
  };

  const restartGame = () => {
    setUserChoice('');
    setBotChoice('');
    setResult('');
    setUserScore(0);
    setBotScore(0);
    setGamesPlayed(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock, Paper, Scissors</h1>
        <div className="choices">
          {choices.map(choice => (
            <button key={choice} onClick={() => handleUserChoice(choice)}>
              {choice}
            </button>
          ))}
        </div>
        {userChoice && (
          <div className="result">
            <p>You chose: {userChoice}</p>
            <p>Bot chose: {botChoice}</p>
            <p>{result}</p>
          </div>
        )}
        <div className="score-tab">
          <p>Games Played: {gamesPlayed}</p>
          <p>Your Score: {userScore}</p>
          <p>Bot Score: {botScore}</p>
        </div>
        <button className="restart-button" onClick={restartGame}>
          Restart Game
        </button>
      </header>
    </div>
  );
}

export default RockAndScissor;
