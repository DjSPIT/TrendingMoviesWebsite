import styled from 'styled-components';

export const Wrapper = styled.div`
	
	input{
		display: flex;
		font-size:var(--fontBig);
	}

	button{
		font-size:var(--fontBig);
		color:var(--white);
		padding:10px 20px;
		margin: 0 90px;
		background-color:var(--medGrey);
		border-radius:10px;
		border:none;
		cursor: pointer;
	}

	button:hover{
		background-color:var(--darkGrey);
	}
`;
