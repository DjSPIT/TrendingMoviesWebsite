// This is a custom hook we are creating to use the fetchMovies method of the API
import { useState, useEffect, useRef  } from 'react';

// API
import API from '../API';

// Helpers
import {isPersistedState} from '../helpers';

// Creating an initial state to reset any stuff later
const initialState = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0
}; 

export const useHomeFetch = () => {
	// This gives us as array [stateValue , setterStateValue]
	const [searchTerm, setSearchTerm] = useState('');
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	console.log(searchTerm);

	const fetchMovies = async (page, searchTerm="") => {
		try{
			setError(false);
			setLoading(true);

			// We are using the API to fetch the popular movies here
			const movies = await API.fetchMovies(searchTerm, page);
			
			// To return an object we need to use ( => ({}))
			setState(prev => ({
				// Take the object and spread it inside the setState object
				...movies,
				results:
					// For the Load More Button
					// If page is greater than 1, to load more movies, we attach the new movies to the old movies array i.e. append movies.results to prev.results
					page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
			}));

		} catch(error) {
			setError(true);
		}
		setLoading(false);
	};

	// Initial and search rendering
	useEffect(() => {

		if(!searchTerm){
			const sessionState = isPersistedState('homeState');
			if(sessionState){
				setState(sessionState);
				return;
			}
		}

		setState(initialState);
		fetchMovies(1, searchTerm);
	}, [searchTerm]);


	// Load More
	useEffect(() => {

		if(!isLoadingMore) return;
		fetchMovies(state.page + 1, searchTerm)
		setIsLoadingMore(false)
	}, [isLoadingMore, searchTerm, state.page])

	// Write to the session storage
	useEffect(() => {
		if(!searchTerm){
			sessionStorage.setItem('homeState', JSON.stringify(state));
		}

	}, [searchTerm, state])

	// We have to return the states as this is a custom hook
	return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore};

};