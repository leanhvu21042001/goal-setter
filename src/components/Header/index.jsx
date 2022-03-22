import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

export default function Header() {
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
						</ul>
					</div>
				</div>
			</nav>

			<div className='logo'></div>
		</header>
	);
}
