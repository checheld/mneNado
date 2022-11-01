import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/Index';
import SignUpCustomerPage from './Pages/SignUpCustomerPage/Index';
import SignUpExecutorPage from './Pages/SignUpExecutorPage/Index';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/Index';
import ResetPasswordPage from './Pages/ResetPasswordPage/Index';
import OrdersPage from './Pages/OrdersPage/Index';
import ExecutorPage from './Pages/ExecutorProfile/Index';
import Layout from './Components/Layout';
import RegistrationChoice from './Pages/RegistrationChoice';
import ExecutorsList from './Pages/ExecutorsList';
import NewOrderPage from './Pages/NewOrder';
import Main from './Pages/Main';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import './App.css';

const routes = [
	{
		path: '/',
		element: (
			<Layout>
				<Main />
			</Layout>
		),
	},
	{
		path: '/login',
		element: (
			<Layout dataAttr='Image by Freepik' className='has-bg'>
				<LoginPage />
			</Layout>
		),
	},
	{
		path: '/signup-choice',
		element: (
			<Layout
				className='has-bg'
				dataAttr='Background image by Kotkoa from freepik'
			>
				<RegistrationChoice />
			</Layout>
		),
	},
	{
		path: '/signupCustomer',
		element: (
			<Layout>
				<SignUpCustomerPage />
			</Layout>
		),
	},
	{
		path: '/signupExecutor',
		element: (
			<Layout>
				<SignUpExecutorPage />
			</Layout>
		),
	},
	{
		path: '/forgotpassword',
		element: (
			<Layout>
				<ForgotPasswordPage />
			</Layout>
		),
	},
	{
		path: '/resetpassword',
		element: (
			<Layout>
				<ResetPasswordPage />
			</Layout>
		),
	},
	{
		path: '/orders',
		element: (
			<Layout>
				<OrdersPage />
			</Layout>
		),
	},
	{
		path: '/orders/new',
		element: (
			<Layout>
				<NewOrderPage />
			</Layout>
		),
	},
	{
		path: '/orders/order/:id',
		element: (
			<Layout>
				<ExecutorPage />
			</Layout>
		),
	},
	{
		path: '/executors',
		element: (
			<Layout>
				<ExecutorsList />
			</Layout>
		),
	},
	{
		path: '/executors/executor/:id',
		element: (
			<Layout>
				<ExecutorPage />
			</Layout>
		),
	},
];

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
export default App;
