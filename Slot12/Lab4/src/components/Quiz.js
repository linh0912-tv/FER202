import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionInput from './QuestionInput';
import Result from './Result';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Quiz = () => {
	const { quizData, setQuizData } = useContext(QuizContext);
	const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
	const [score, setScore] = useState(0);
	const [quizEnded, setQuizEnded] = useState(false);
	const [current, setCurrent] = useState(0);
	const [showInput, setShowInput] = useState(false);

	useEffect(() => {
		setUserAnswers(Array(quizData.length).fill(''));
		setCurrent(0);
		setQuizEnded(false);
		setScore(0);
	}, [quizData]);

	useEffect(() => {
		if (quizEnded) {
			const newScore = userAnswers.reduce((acc, answer, index) => {
				return answer === quizData[index].correctAnswer ? acc + 1 : acc;
			}, 0);
			setScore(newScore);
		}
	}, [quizEnded, userAnswers, quizData]);

	const handleAnswerSelect = (answer) => {
		const updatedAnswers = [...userAnswers];
		updatedAnswers[current] = answer;
		setUserAnswers(updatedAnswers);
	};

	const handleNext = () => {
		if (current < quizData.length - 1) setCurrent(current + 1);
	};

	const handlePrev = () => {
		if (current > 0) setCurrent(current - 1);
	};

	const handleSubmit = () => {
		setQuizEnded(true);
	};

	const handleAddQuestion = (q) => {
		setQuizData([...quizData, q]);
		setShowInput(false);
	};

	if (showInput) {
		return <QuestionInput onDone={() => setShowInput(false)} onAddQuestion={handleAddQuestion} />;
	}

	if (quizEnded) {
		return (
			<Result
				score={score}
				total={quizData.length}
				selectedAnswers={userAnswers}
				quizData={quizData}
				onRestart={() => {
					setQuizEnded(false);
					setUserAnswers(Array(quizData.length).fill(''));
					setCurrent(0);
					setScore(0);
				}}
			/>
		);
	}

	const q = quizData[current];

	return (
		<Card className="mx-auto mt-4" style={{ maxWidth: 600 }}>
			<Card.Body>
				<Row className="align-items-center mb-3">
					<Col>
						<Card.Title>
							Câu hỏi {current + 1}/{quizData.length}
						</Card.Title>
					</Col>
					<Col className="text-end">
						<Button variant="info" onClick={() => setShowInput(true)}>
							Thêm câu hỏi
						</Button>
					</Col>
				</Row>
				<Card.Text>
					<strong>{q.question}</strong>
				</Card.Text>
				<ListGroup className="mb-3">
					{q.answers.map((ans, i) => (
						<ListGroup.Item key={i}>
							<Button
								variant={
									userAnswers[current] === ans
										? ans === q.correctAnswer
											? 'success'
											: 'danger'
										: 'outline-secondary'
								}
								className="w-100"
								onClick={() => handleAnswerSelect(ans)}
							>
								{ans}
							</Button>
						</ListGroup.Item>
					))}
				</ListGroup>
				<div className="d-flex justify-content-between">
					<Button variant="secondary" onClick={handlePrev} disabled={current === 0}>
						Previous
					</Button>
					{current < quizData.length - 1 ? (
						<Button
							variant="primary"
							onClick={handleNext}
							disabled={!userAnswers[current]}
						>
							Next
						</Button>
					) : (
						<Button
							variant="success"
							onClick={handleSubmit}
							disabled={userAnswers.includes('')}
						>
							Submit
						</Button>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default Quiz;