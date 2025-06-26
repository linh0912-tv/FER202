import React from "react";
import './App.css';
import UserProfileDemo from "./components/UserProfileDemo";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import { Container, Card, Row, Col } from "react-bootstrap";
import './components/UserProfileDemo.css';

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
    alert("Dữ liệu đã gửi: " + JSON.stringify(formData));
  };

  return (
    <div className="App app-bg">
      <Container className="py-4">
        <h1 className="mb-4 animate-fade-in">Ứng Dụng React - PropTypes & Validation</h1>
        <Card className="mb-4 shadow animate-fade-in">
          <Card.Body>
            <h2 className="mb-3">Ví dụ 1: UserProfile</h2>
            <UserProfileDemo />
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow animate-fade-in">
          <Card.Body>
            <h2 className="mb-3">Ví dụ 2: UserProfile2 (Form)</h2>
            <Row>
              <Col md={4} className="mb-3">
                <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
              </Col>
              <Col md={4} className="mb-3">
                <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleFormSubmit} />
              </Col>
              <Col md={4} className="mb-3">
                <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow animate-fade-in">
          <Card.Body>
            <h2 className="mb-3">Ví dụ 3: MyForm (useReducer)</h2>
            <Row>
              <Col md={6} className="mx-auto">
                <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow animate-fade-in">
          <Card.Body>
            <h2 className="mb-3">Ví dụ 4: ValidationForm (Yêu cầu nâng cao)</h2>
            <Row>
              <Col md={8} className="mx-auto">
                <ValidationForm onSubmit={handleFormSubmit} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
