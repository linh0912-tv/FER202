import React, { createContext, useState, useContext } from 'react';
import Result from '../components/Result';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is ReactJS?',
      answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
      correctAnswer: 'A syntax extension for JavaScript'
    }
  ]);

  const [userAnswers, setUserAnswers] = useState({});

  const updateUserAnswer = (questionId, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, userAnswers, updateUserAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

const Quiz = () => {
  const { quizData, userAnswers } = useContext(QuizContext);

  // Convert userAnswers object to array in quizData order
  const selectedAnswers = quizData.map((_, idx) => userAnswers[idx] || '');

  // Calculate score
  const score = quizData.reduce(
    (acc, q, idx) => acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0),
    0
  );

  return (
    <Result
      score={score}
      total={quizData.length}
      selectedAnswers={selectedAnswers}
      quizData={quizData}
    />
  );
};

export default Quiz;