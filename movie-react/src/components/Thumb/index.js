import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import {Image} from './Thumb.styles';

// Components
const Thumb = ({image, movieId, clickable}) => (
	<div>
		{/* To click the thumbnail  */}
		{clickable ?(
			<Link to={`/${movieId}`}>
				<Image src={image} alt='movie-thumbnail' />	
			</Link>
			)
		:(
			<Image src={image} alt='movie-thumbnail' />	
		)} 
	</div>
);

Thumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool
};

export default Thumb;