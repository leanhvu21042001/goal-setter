import './styles.scss';

export default function Spinner() {
	return (
		<div className='spinner'>
			<span
				className='spinner-grow spinner-grow-sm circle'
				role='status'
				aria-hidden='true'
			></span>
			<span className='loading-text'>Loading...</span>
		</div>
	);
}
