import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Result = ({
  score = 0,
  total = 0,
  selectedAnswers = [],
  quizData = [],
  onRestart // nhận props callback để làm lại quiz
}) => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Kết quả bài Quiz</Card.Title>
        <Card.Text>
          <strong>Điểm của bạn: {score} / {total}</strong>
        </Card.Text>
        <ListGroup>
          {quizData.map((question, index) => (
            <ListGroup.Item key={index}>
              <div><strong>{question.question}</strong></div>
              <div>
                Đáp án của bạn: {selectedAnswers[index] || 'Chưa chọn'}
                {selectedAnswers[index] === question.correctAnswer ? (
                  <span className="text-success"> - Đúng</span>
                ) : (
                  <span className="text-danger"> - Sai</span>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="primary" onClick={onRestart}>
            Quay lại làm lại
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Result;