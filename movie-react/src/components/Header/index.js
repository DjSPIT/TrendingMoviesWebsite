import React, {useContext} from 'react';
// We have to create a link for the logos like an a tag in HTML
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Images for the logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles for the header
import {Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
import {Context} from '../../context';


// Now we are going to create a functional component header
// We are not returning any logic created and therefore no need of curly braces
const Header = () => {
	const [user] = useContext(Context);
	console.log(user);

	return (
		<Wrapper>
			<Content>
			<Link to='/' >
				<LogoImg src={RMDBLogo} alt='rmdb-logo' />
			</Link>
			{user ? (
				<span> Welcome back! {user.username}</span>
			) : (
			<Link to='/login'>
				<span >Log In</span>
			</Link>
			)}

			<TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
			</Content>
		</Wrapper>
	);
};

export default Header;