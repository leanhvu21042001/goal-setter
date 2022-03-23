import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login, reset } from 'features/auth/authSlice';

import './styles.scss';
import Spinner from 'components/Spinner';

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		const userData = {
			email,
			password
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<section className='login'>
			<div className='heading'>
				<h1>
					<FaUser />
					Login
				</h1>
			</div>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='mb-3'>
						<label htmlFor='email' className='form-label'>
							Email
						</label>
						<input
							onChange={onChange}
							type='email'
							className='form-control'
							id='email'
							name='email'
							value={email}
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='password' className='form-label'>
							Password
						</label>
						<input
							onChange={onChange}
							type='password'
							className='form-control'
							id='password'
							name='password'
							value={password}
						/>
					</div>

					<button className='btn btn-dark' type='submit'>
						Submit form
					</button>
				</form>
			</section>
		</section>
	);
}
