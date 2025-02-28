import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const choices = [
  { name: "rock", icon: "🤎" },
  { name: "paper", icon: "📝" },
  { name: "scissors", icon: "✂️" },
];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [oponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  console.log(result);

  const getRandomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const playGame = (choice) => {
    const opponent = getRandomChoice();
    setPlayerChoice(choice);
    setOpponentChoice(opponent);

    if (choice.name === opponent.name) {
      setResult("It's a Draw");
    } else if (
      (choice.name === "rock" && opponent.name === "scissors") ||
      (choice.name === "paper" && opponent.name === "rock") ||
      (choice.name === "scissors" && opponent.name === "paper")
    ) {
      setResult("You Won");
      setScore((prev) => prev + 5);
    } else {
      setResult("You Lose");
      setScore((prev) => prev - 5);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center bg-blue-900 ">
      <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
      <div className="flex justify-center items-center">
        {" "}
        <h1 className="text-2xl text-white font-bold mb-4">Score : {score}</h1>
      </div>{" "}
      {!playerChoice ? (
        <div>
          {choices.map((choice) => (
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="text-3xl mx-3 lg:text-5xl p-4 bg-gray-200 rounded-full hover:scale-110"
              whileTap={{ scale: 0.9 }}
              key={choice.name}
              onClick={() => playGame(choice)}
            >
              {choice.icon}
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full ">
          <p className="text-2xl font-bold py-2 text-white">
            You: {playerChoice.icon}
          </p>
          <p className="text-2xl font-bold py-2 text-white">
            Opponent: {oponentChoice.icon}
          </p>
          <p
            className={`text-2xl border-t text-neutral-900 border-b text-center border-opacity-30 my-2  border-white w-full font-bold py-4 ${
              result === "You Lose"
                ? "text-red-500 font-bold"
                : result === "You Won"
                ? "text-green-500 font-bold"
                : "text-yellow-500 font-bold"
            } `}
          >
            {result}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-white text-blue-900 rounded-full"
            onClick={() => setPlayerChoice(null)}
          >
            play again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
