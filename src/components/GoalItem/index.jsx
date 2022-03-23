import { useDispatch } from 'react-redux';

import { deleteGoal } from 'features/goals/goalSlice';

import './styles.scss';

export default function GoalItem({ goal }) {
	const dispatch = useDispatch();

	return (
		<div className='goal'>
			<div className='created-at'>
				{new Date(goal.createdAt).toLocaleString('vn-VN')}
			</div>
			<h2>{goal.text}</h2>

			<button
				className='btn btn-outline-secondary'
				onClick={() => dispatch(deleteGoal(goal._id))}
			>
				X
			</button>
		</div>
	);
}
