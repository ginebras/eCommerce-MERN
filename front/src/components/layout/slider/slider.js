import { useState } from 'react';
import styled from "styled-components";

import './slider.css';

import { IMG_DATA } from '../data';

const Wrapper=styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s;
	transform:translateX(${(props)=>props.sliderIndex * -100}vw)
`

export default function Slider(){
	const [ sliderIndex,setSliderIndex ]=useState(0);

	const handleChangeIndex=(direction)=>{
		if(direction==='left'){
			setSliderIndex(sliderIndex>0 ? sliderIndex-1 : 3);
		}else{
			setSliderIndex(sliderIndex<3 ? sliderIndex+1 : 0)
		}

	}

	return(
		<div className="slider-container">
			<div className="left" onClick={()=>handleChangeIndex('left')}>
				<i className="bi bi-arrow-left" ></i>
			</div>

			<Wrapper sliderIndex={sliderIndex}>
				{ IMG_DATA.map((item,index)=>(
					<div className="slider" key={index}>
						<div className="img-container">
							<img src={item.img} alt="person" className="img-slider" /> 
						</div>

						<div className="info-container">
							<h1 className="title-info">{item.title}</h1>
							<p className="description-info">{item.description}</p>
							<button className="button-info">SHOW NOW</button>
						</div>
					</div>
				))}	
			</Wrapper>

			<div className="right" onClick={()=>handleChangeIndex('right')}>
				<i className="bi bi-arrow-right"></i>
			</div>

		</div>
	)
}