import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import NavBar from './Components/NavBar/Index';
import LoginPage from './Pages/LoginPage/Index';
import SignUpCustomerPage from './Pages/SignUpCustomerPage/Index';
import SignUpExecutorPage from './Pages/SignUpExecutorPage/Index';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/Index';
import ResetPasswordPage from './Pages/ResetPasswordPage/Index';
import OrdersPage from './Pages/OrdersPage/Index';
import ExecutorPage from './Pages/ExecutorPage/Index';
import './App.css';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signupCustomer" element={<SignUpCustomerPage />} />
          <Route path="/signupExecutor" element={<SignUpExecutorPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/executor" element={<ExecutorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;
