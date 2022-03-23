import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from 'components/Header';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Header />
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
