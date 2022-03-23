import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'components/Spinner';
import GoalForm from 'components/GoalForm';
import GoalItem from 'components/GoalItem';

import { getGoals, reset } from 'features/goals/goalSlice';

import './styles.scss';

export default function Dashboard() {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { user } = useSelector(state => state.auth);
	const { goals, isLoading, isError, message } = useSelector(
		state => state.goals
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (!user) {
			navigate('/login');
		}

		dispatch(getGoals());

		return () => {
			dispatch(reset());
		};
	}, [dispatch, isError, message, navigate, user]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<section className='dashboard'>
			<h1 className='text-center mb-5'>
				Welcome <strong>{user && user.name}</strong>
			</h1>

			<GoalForm />

			<div className='goals'>
				{goals.length > 0 ? (
					goals.map(goal => <GoalItem key={goal._id} goal={goal} />)
				) : (
					<h3>You have not set any goals</h3>
				)}
			</div>
		</section>
	);
}
