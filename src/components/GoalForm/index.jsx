import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { createGoal } from 'features/goals/goalSlice';

import './styles.scss';

export default function GoalForm() {
	const [text, setText] = useState('');

	const dispatch = useDispatch();
	const { isError, message } = useSelector(state => state.goals);

	const onSubmit = e => {
		e.preventDefault();
		dispatch(createGoal({ text }));
		if (isError) {
			toast.error(message);
		}
		setText('');
	};
	return (
		<div className='goal-form'>
			<form onSubmit={onSubmit}>
				<div className='mb-3 d-flex justify-content-around align-items-center'>
					<label htmlFor='text' className='form-label me-3 fw-bolder fs-5'>
						Goal
					</label>
					<input
						onChange={({ target }) => setText(target.value)}
						type='text'
						className='form-control'
						id='text'
						name='text'
						value={text}
					/>
				</div>

				<button className='btn btn-dark' type='submit'>
					Add Goal
				</button>
			</form>
		</div>
	);
}
