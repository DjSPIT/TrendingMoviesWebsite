import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

// Import the image
import searchIcon from '../../images/search-icon.svg';

// Styles
import {Wrapper, Content} from './SearchBar.styles';

//  We will create a controlled component due to which the input value will change when we change the state
const SearchBar = ({setSearchTerm}) => {
	const [state, setState] = useState('');
	const initial = useRef(true);

	useEffect(() =>{
		if(initial.current){
			initial.current = false;
			return;
		}

		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500)

		return () => clearTimeout(timer)
	}, [setSearchTerm, state])

	return(
		<Wrapper>
			<Content>
			<img src={searchIcon} alt='search-icon' />
			<input 
				type="text" 
				placeholder="Search a movie"
				onChange={e => setState(e.currentTarget.value)}
				value={state}
			/>
			</Content>
		</Wrapper>
	);
};

SearchBar.propTypes = {
	callback: PropTypes.func
};

export default SearchBar;