import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import ServerPost from './components/ServerPost';
import ServerPostDetail from './components/ServerPostDetail';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/posts" 
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/post/:id" 
            element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/server-posts" 
            element={
              <ProtectedRoute>
                <ServerPost />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/server-post/:id" 
            element={
              <ProtectedRoute>
                <ServerPostDetail />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
