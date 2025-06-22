import React, { useReducer } from "react";
import { Button, Container, Card, ProgressBar, Row, Col, Alert } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: null };

    case "NEXT_QUESTION": {
      if (state.currentQuestion >= state.questions.length) return state;
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion]?.answer;
      const feedback = isCorrect
        ? { type: "success", message: "Correct! 🎉" }
        : {
            type: "danger",
            message: (
              <>
                Incorrect! <FaTimesCircle color="red" /> The correct answer is:{" "}
                <b>{state.questions[state.currentQuestion]?.answer}</b>
              </>
            ),
          };
      const nextQuestion = state.currentQuestion + 1;
      const showScore = nextQuestion === state.questions.length;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
        showScore,
        feedback: showScore ? null : feedback,
      };
    }

    case "SHOW_FEEDBACK": {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion]?.answer;
      const feedback = isCorrect
        ? { type: "success", message: <>Correct! <FaCheckCircle color="green" /></> }
        : {
            type: "danger",
            message: (
              <>
                Incorrect! <FaTimesCircle color="red" /> The correct answer is:{" "}
                <b>{state.questions[state.currentQuestion]?.answer}</b>
              </>
            ),
          };
      return { ...state, feedback };
    }

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    dispatch({ type: "SHOW_FEEDBACK" });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  const progress = Math.round(((currentQuestion + (showScore ? 1 : 0)) / questions.length) * 100);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4 p-4">
            <Card.Body>
              <h2 className="text-center mb-4 text-primary">Quiz App</h2>
              <ProgressBar
                now={progress}
                label={`${showScore ? questions.length : currentQuestion + 1}/${questions.length}`}
                className="mb-4"
                variant="info"
                style={{ height: "1.5rem", fontWeight: "bold" }}
              />
              {showScore ? (
                <div className="text-center">
                  <h3>
                    Your Score: <span className="text-success">{score}</span> / {questions.length}
                  </h3>
                  <Button variant="primary" className="mt-3" onClick={handleRestartQuiz}>
                    Restart Quiz
                  </Button>
                </div>
              ) : (
                <>
                  <Card className="mb-3 border-0 bg-light">
                    <Card.Body>
                      <h5>
                        <span className="text-secondary">Question {currentQuestion + 1}:</span>
                        <br />
                        <span className="fw-bold">{questions[currentQuestion].question}</span>
                      </h5>
                    </Card.Body>
                  </Card>
                  <div className="d-flex flex-wrap justify-content-center mb-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant={
                          selectedOption === option
                            ? "success"
                            : "outline-secondary"
                        }
                        className="m-2 px-4 py-2"
                        size="lg"
                        onClick={() => handleOptionSelect(option)}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                  {feedback && (
                    <Alert variant={feedback.type} className="text-center">
                      {feedback.message}
                    </Alert>
                  )}
                  <div className="text-center">
                    <Button
                      variant="primary"
                      className="mt-2"
                      disabled={!selectedOption}
                      onClick={handleNextQuestion}
                    >
                      {currentQuestion === questions.length - 1
                        ? "Finish Quiz"
                        : "Next Question"}
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBank;