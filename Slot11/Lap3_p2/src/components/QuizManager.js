import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import Result from './Result';
import questions from './questions';

const QuizManager = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswerSelected = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div>
      {!quizEnd ? (
        <QuestionForm
          question={questions[currentQuestion].question}
          answerOptions={questions[currentQuestion].options}
          onAnswerSelected={handleAnswerSelected}
        />
      ) : (
        <Result score={score} total={questions.length} onRetry={handleRetry} />
      )}
    </div>
  );
};

export default QuizManager;