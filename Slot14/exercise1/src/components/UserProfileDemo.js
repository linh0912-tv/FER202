import React from "react";
import UserProfile from "./UserProfile";
import { Card, Row, Col, Container } from "react-bootstrap";
import './UserProfileDemo.css';

const userProfiles = [
  { name: "Nguyễn Văn A", age: 25 },
  { name: "", age: 25 },
  { name: "Nguyễn Văn B", age: "twenty five" },
  { name: "Nguyễn Văn C", age: null },
];

function getError(name, age) {
  if (!name || typeof name !== "string") {
    return "Tên không hợp lệ hoặc không được cung cấp!";
  }
  if (!age) {
    return "Tuổi không được để trống!";
  } else if (isNaN(age)) {
    return "Tuổi phải là một số hợp lệ!";
  }
  return null;
}

const UserProfileDemo = () => (
  <Container className="mb-4">
    <Row>
      {userProfiles.map((user, idx) => {
        const error = getError(user.name, user.age);
        return (
          <Col md={6} lg={3} key={idx} className="mb-3">
            <Card className="profile-card h-100 animate-fade-in">
              <Card.Body>
                <UserProfile name={user.name} age={user.age} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
);

export default UserProfileDemo;
