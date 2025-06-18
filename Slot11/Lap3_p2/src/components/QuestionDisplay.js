import React from 'react';
import AnswerOptions from './AnswerOptions';

const QuestionDisplay = ({ question, answerOptions, onAnswerSelected }) => {
  return (
    <div className="question-display">
      <h2>{question}</h2>
      <AnswerOptions 
        answerOptions={answerOptions} 
        onAnswerSelected={onAnswerSelected} 
      />
    </div>
  );
};

export default QuestionDisplay;