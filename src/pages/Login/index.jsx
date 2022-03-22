import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import './styles.scss';

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = e => {
		e.preventDefault();
	};
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

					<button class='btn btn-dark' type='submit'>
						Submit form
					</button>
				</form>
			</section>
		</section>
	);
}
