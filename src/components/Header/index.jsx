import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import { logout, reset } from 'features/auth/authSlice';

export default function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	return (
		<header className='header'>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='container-fluid'>
					<Link to={'/'} className='navbar-brand'>
						GoalSetter
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							{user ? (
								<li className='nav-item'>
									<button className='nav-link btn' onClick={onLogout}>
										<FaSignOutAlt />
										<span style={{ margin: '0 4px' }}>Logout</span>
									</button>
								</li>
							) : (
								<>
									<li className='nav-item'>
										<Link to={'/login'} className='nav-link'>
											<FaSignInAlt />
											<span style={{ margin: '0 4px' }}>Login</span>
										</Link>
									</li>

									<li className='nav-item'>
										<Link to={'/register'} className='nav-link'>
											<FaUser />
											<span style={{ margin: '0 4px' }}>Register</span>
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>

			<div className='logo'></div>
		</header>
	);
}
