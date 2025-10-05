import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Posts/Posts';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { Header } from './Header/Header';
import ProtectedRoute from '../routes/ProtectedRoute';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
