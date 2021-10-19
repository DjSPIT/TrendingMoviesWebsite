import React, {useState} from 'react';

// Styles
import {Wrapper} from './Rate.styles';

// Components
import Button from '../Button';

const Rate = ({callback}) => {
	const [value, setValue] = useState(5);

	return (
		<Wrapper>
			<input 
				type="range"
				min='1'
				max='10'
				value={value}
				onChange={e => setValue(e.currentTarget.value)}
			/>
			{value}
			<p>
				<button onClick={() => callback(value)}>Rate</button>
			</p>
		</Wrapper>

	);
};

export default Rate;