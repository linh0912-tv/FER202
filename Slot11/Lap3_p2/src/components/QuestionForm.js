import React, { useState } from 'react';

const QuestionForm = ({ question, answerOptions, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnswerSelected(selectedAnswer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{question}</h2>
      {answerOptions.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        </div>
      ))}
      <button type="submit" disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </form>
  );
};

export default QuestionForm;