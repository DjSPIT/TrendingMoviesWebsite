import React from 'react';


// Configurations -> importing from config.js file
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';


// Components are to be imported
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


// Hooks are to be imported
import { useHomeFetch } from '../hooks/useHomeFetch'; 

// Images are imported
import NoImage from '../images/no_image.jpg';


// map method will map each item in the array and work like a for loop

const Home = () => {

	const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();

	console.log(state);
	if(error) return <div>Something went wrong !!</div>;

	return (
		<>
			{!searchTerm && state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}
			<SearchBar setSearchTerm={setSearchTerm}/>
			<Grid header={ searchTerm ? 'Search Results' : 'Popular Movies'}>
				{state.results.map(movie => (
					<Thumb 
						key={movie.id}
						clickable
						image={
							movie.poster_path 
							? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
							: NoImage
						}
						movieId={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages &&  !loading && (
				<Button text="Load more"  callback={() => setIsLoadingMore(true)}/>

			)}
		</>
	);
};

export default Home;

