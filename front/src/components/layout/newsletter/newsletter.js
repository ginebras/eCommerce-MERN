import styled from "styled-components"; 

const Container=styled.div`
	margin:0 auto;
	margin-top:20px;
	text-align:center;
	height:300px;
	display:flex;
	flex-direction:column;
	align-items:center;
`
const Title=styled.h1`
	font-size:60px;
	font-weight:bolder;
	margin-bottom:10px;
`
const Description=styled.p`
	font-weight:bolder;
	font-size:20px;
	margin-bottom:20px;	
`

const InputContainer=styled.div`
	position:relative;
	display:flex;
	align-items:center;
	justify-content:center;
	width:600px
`

const Input=styled.input`
	width:500px;
	height:50px;
	padding:10px;
`

const Button=styled.button`
	position:absolute;
	right:50px;
	width:80px;
	height:50px;
	background-color:teal;
	border:none;
	transition:all 0.5s;

	&:hover {
		transform:scale(1.1);
		cursor:pointer;
	}
`

export default function Newsletter(){
	return(
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates from your favorites products?</Description>

			<InputContainer>
				<Input type="text" placeholder="Enter your email" />
				<Button><i className="bi bi-arrow-right-short" style={{color:'white'}}></i></Button>
			</InputContainer>
		</Container>
	)
}