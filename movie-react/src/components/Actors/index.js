import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {Wrapper, Image} from './Actors.styles' ;

// Components
const Actors = ({name, character, imageUrl}) => (
	<Wrapper>
		<Image src={imageUrl} alt='actor-thumbnail'/>
		<h3>{name}</h3>
		<p>{character}</p>
	</Wrapper>
);

// Validating the props which we send to our components
Actors.propTypes = {
	name: PropTypes.string,
	character: PropTypes.string,
	imageUrl: PropTypes.string
};

export default Actors;
