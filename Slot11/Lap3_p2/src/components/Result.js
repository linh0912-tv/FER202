import React from 'react';

const Result = ({ score, total, onRetry }) => (
  <div className="result">
    <h2>Quiz Ended</h2>
    <p>Your Score: {score} / {total}</p>
    <button className="retry-button" onClick={onRetry}>Retry</button>
  </div>
);

export default Result;