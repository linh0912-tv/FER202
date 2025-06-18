import React from 'react';

const AnswerOptions = ({ options, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="answer-options">
      {options.map((option, index) => (
        <button
          key={index}
          className={`answer-option ${selectedAnswer === option ? 'selected' : ''}`}
          onClick={() => onAnswerSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;