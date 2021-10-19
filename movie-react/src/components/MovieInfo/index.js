import React, {useContext} from 'react';
import PropTypes from 'prop-types';

// Components
import Thumb from '../Thumb';
import Rate from '../Rate';

// Configurations
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import API from '../../API';

// No Image
import NoImage from '../../images/no_image.jpg';

// Styles
import {Wrapper, Content, Text, Rating, Score, Director} from './MovieInfo.styles';

// Context
import { Context } from '../../context';

const MovieInfo = ({movie}) => {
	const [user] = useContext(Context);

	const handleRating  = async value => {
		const rate = await API.rateMovie( user.sessionId, movie.id,value);
		console.log(rate);

	};

	return (
		<Wrapper backdrop={movie.backdrop_path}>
			<Content>
				<Thumb 
					image={
						movie.poster_path 
						? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
						: NoImage
					}
					clickable={false}
					/>
				<Text>
					<h1>{movie.title}</h1>
					<h3>MOVIE SUMMARY</h3>
					<p>{movie.overview}</p>
					
					<div className="rating-directors">
						<div>
							<h3>RATING</h3>
							<div className='score'>{movie.vote_average}</div>
						</div>

						<div className="director">
							<h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
								{movie.directors.map(director => (
								<p key={director.credit_id}>{director.name}</p>
							))}
						</div>
					</div>
					{user && (
						<div className="rate-header">
							<p>RATE THE MOVIE</p>
							<Rate callback={handleRating} />
						</div>
					)}
				</Text>
			</Content>
		</Wrapper>
	);
}

MovieInfo.propTypes = {
	movie:PropTypes.object,
};

export default MovieInfo;