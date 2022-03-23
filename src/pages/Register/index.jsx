import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { register, reset } from 'features/auth/authSlice';

import Spinner from 'components/Spinner';

import './styles.scss';

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formData;

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

		if (password !== password2) {
			toast.error('Password do not match');
		} else {
			const userData = {
				name,
				email,
				password
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<section className='register'>
			<div className='heading'>
				<h1>
					<FaUser />
					Register
				</h1>
			</div>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='mb-3'>
						<label htmlFor='name' className='form-label'>
							Name
						</label>
						<input
							onChange={onChange}
							type='text'
							className='form-control'
							id='name'
							name='name'
							value={name}
						/>
					</div>
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
					<div className='mb-3'>
						<label htmlFor='password2' className='form-label'>
							Confirm password
						</label>
						<input
							onChange={onChange}
							type='password'
							className='form-control'
							id='password2'
							name='password2'
							value={password2}
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
