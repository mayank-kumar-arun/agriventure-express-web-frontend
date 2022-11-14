import * as React from "react";
import "./map.module.css";
import {useState} from "react";
import PropTypes from "prop-types";



function Map(props){

	const [isHovered,setIsHovered] = useState(0);

	function handleMouseLeave(){
		setIsHovered("0");
	}
	function handleMouseEnter(e){
		setIsHovered(e.target.id);
	}
	function changeData(e){
		props.handleDistrictClick(e.target.id);
	}

	return (
		<div className="map" >
			<svg baseProfile="tiny" fill="#ffffff" height="453" stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 1745" width="auto" xmlns="http://www.w3.org/2000/svg" style={{marginTop:"20px", marginBottom:"10px"}}>

				<a xlinkTitle="Mahanuvara">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104203"? "#00FF00" : "#ffffff"}
						d="M598.3 1048.7l3.9 67.3 9.7 32.2-0.8 14.5-11.9 11.1-9.5 2.7-5.6 3.4-18.3-3.8-18.9 2.9-16.2-1.3-10.2-16.1-3.8-0.4-4.6-1.7-6.3-8.5-7.7-6.9 1.4 12.9 4 16.7-8.9 15.2-28.5 33.7-7.5-2-8.7 0.2-12.8 8.9-9 2-15.9-2-10 8 3.6-1.1 3.4 1.5 7.8 14.4 6.6 6.2 5.2 7.2-5.3 14.9-9.5 10.2-12.9-7.7-19.8-29.5-12.6-1.1 0.2-8.9 3.2-6.8-3.2-5.6-6.7-16 5-4.7 15.3-2.5 7-7.5 4.8-0.3 4.8-1.2 3.5-5.4 2.5-5.9-5.2-6.5-6.4-6.3-0.1-6.6 1.1-7.9-5.3-6.5-11.3-6.3-3.7-2.6 0.7-8.6-19.1-16.8-5.4-13.6 9.1 1 8-2.4-0.8-2-0.3-3 1.5-2.6 1.9-2.4 1.4-8.9 6.3 0 6.9 4.9 7.5 0.6 0.7-4.7-0.7-4.9 6.5-3.7 6.3 1.1 4.8-2.2-2.7-6.1-3.5-5.6 5.2-1.4 5.3-2.5 9.1 12.6 28 17.6 16.3 1 9.4-10.5-1.5-16.3 2.7-7 6.1-3.7 6.6 2.5 16.4 13.6 12.7-1.9 14-11.5 18.2 0.1 7.3-3.6 5.3 6.7 3.2-1.8 2.9-2.5 4.9-8.2 8.9-1.4 14 1.6z"
						id="636a0376d075bc3b36104203" name="Mahanuvara">
					</path>
				</a>

				<a xlinkTitle="Matale">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						fill={isHovered === "636a0376d075bc3b36104208" ? "#00FF00" : "#ffffff"}
						cursor={"pointer"}
						d="M600.8 944.1l-0.3 7.4 3.2 10.1 1 8.6-4.3 21.1-4.2 20.9 2.1 36.5-14-1.6-8.9 1.4-4.9 8.2-2.9 2.5-3.2 1.8-5.3-6.7-7.3 3.6-18.2-0.1-14 11.5-12.7 1.9-16.4-13.6-6.6-2.5-6.1 3.7-2.7 7 1.5 16.3-9.4 10.5-16.3-1-28-17.6-9.1-12.6 0.2-4.6 2.5-3.3 0.9-5.4-1.3-5.6-2.2-4.7-2.7-4.4-4.4-9 1.1-9.4 6.2-5.7 1.6-3.8-0.1-4.1 1.3-5.3 0.2-5.2-8.1-7.9-2.4-13.8-1.3-14.9-2.3-3.2-1.6-1.1-0.1-7.7-3-7.7-4.4-7.4-3.1-6.9-3.4-0.9-3.9-2.2-1.1-7.9 2-7.2 9.4-7 14.9-5.5 7.8-9.5 7.1 0.3 5.3 3.5 6.6-4.6 3.2-5.4 3.1-2.1 2.9-1.7-0.3-3.2-1-2 5.7-5.9 4.2-6.5-0.1-8.3 2.5-7.1 4.4 0 3.3 0.9 2.6-1.8 8.6-9.1 5.7-5.1 8.4-4.2 9.3-3.8 3.8 3.8 6.2 6.9-0.2 7.9 2.4 2.6 3.7 1.4 2.9-1.8 0.2-2.9 5.3-2.5 5.1 1.4 7 1.5 6.5 3.9-13.3 13.9-4.3 21.1-1.2 10.2-4.3 18-1.5 3.2-0.8 3.3-12.8 2.8-3 12.3 6 27.1-0.8 8.7 4.3 6.2 11.7 2.6 11.1-4.7 8.8-8 3.8 5.3 6.7 4.2 2-7.8 1-8 23.7 1.7 22.8-4.2z"
						id="636a0376d075bc3b36104208" name="Matale">
					</path>
				</a>

				<a xlinkTitle="Nuwara Eliya">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						fill={isHovered === "636a0376d075bc3b3610420c" ? "#00FF00" : "#ffffff"}
						cursor={"pointer"}
						d="M584.1 1179.9l-0.3 8 3.3 11.1-1 4.1 0.9 3.7 2 2.4 1.6 2.3-3 3.7-2.1 4.1 2.4 7.9 0.6 3.1-1.4 3.3-2.9 3.7-3.6 3.3-4 7.8-2 8.7-9.8 14.6-16.8 3.7-7.9 3.8-7 6.4-2.2 8.8-5.9 6.9-8.3-0.5-8 0.4 0.5 7.1 14.1 7.1 3 6.2 2.5 6.8 2.2 2.8 1.8 3-6.5 10.6 4 2.6 4.1 2-4.5 6.4-8.4 2.1-25 13.1-13.8 1.9-14.6-0.5-11 0.9-9.3 1.5-24.3-3.3-22.9-5.1-10.8-0.9-9-7 1.6-4.5 3.3-3.2-3-3.3 0.3-7.3 5.1-4.4-0.7-6-3.4-11.7-10.2-7.6-12.9-4.2-3.8-12.8 3.1-16.6-2.8-2.9-2.5-3.4 2.4-3.3 3.4-1.1 6.1-5.4 3.9-6.3-1.4-0.4-0.6-1.4 12.6 1.1 19.8 29.5 12.9 7.7 9.5-10.2 5.3-14.9-5.2-7.2-6.6-6.2-7.8-14.4-3.4-1.5-3.6 1.1 10-8 15.9 2 9-2 12.8-8.9 8.7-0.2 7.5 2 28.5-33.7 8.9-15.2-4-16.7-1.4-12.9 7.7 6.9 6.3 8.5 4.6 1.7 3.8 0.4 10.2 16.1 16.2 1.3 18.9-2.9 18.3 3.8z"
						id="636a0376d075bc3b3610420c" name="Nuwara Eliya">
					</path>
				</a>
				<a xlinkTitle="Ampara">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						fill={isHovered === "636a0376d075bc3b361041f9" ? "#00FF00" : "#ffffff"}
						cursor={"pointer"}
						d="M945.8 1059.9l0.5 1.8 3.6 0.8 3.5-4.6 2.8 0 3.4 18-0.1 6.6 3 0 0.4-6.4 1.1-6.2 1.9-5.2 2.7-3.8 0-3-1.2-3.5 0.8-1.4 2.4 1 4 3.9 1.3 3.5 1 9.4 6.8 10.9 11.1 37.9-2.1 104.7 1.1 7.1 4.5 15.7 0.7 9.3-2.5 17.7-20.4 70.7-1.1 7.3-0.4 9.6-1.6 8-6.3 12.4-1.4 5.6-2.5 7.6-12.6 19.7 3 10.9-4.9 12.8-28 44.5-4-1.3-10.7-3.3-7.4-8.4-5.6-0.8-5.1-0.4-13.2-16.2 11.5-163.3-2.2-8.8-5.3-7.7 0-8.6-3.1-8.5 2.1-8.8 0.9-8.4-13.1-7.9-15.8-4-2.2-2.1-2.8-1.6-3.3 0-3.5-1.6-3.5-6.1-1.7-6.9-5.7-10.4 5.1-13.8 9.2-10.9 7.2-5.7-9.6-13.3-1.3-9.6-6.1-10.8-9.8-8.5-1.8-8.6 0.7-10.6-5.3-23.5 0.9-6-2.9-0.5-2.8-1.7 6.5-10.1-8.7-2.4-11 5.9-5.4 1.9-4.8 2.2-1.7 4.1-3 4.8-6.1 1.6-4.5 0.4 0.1 5.8 2.4 5.2 0.5 5.3-2 4.4-3.1 3.7-2.1 3.1-8.9 5-11-0.5 0.1 17.1 2.3 16.6-8.2 6-9 3.1-3.8-7.2-3.5-8.6-1.6-8-3.9-8-3.1-5.2-1.8-4-5.4-1-3.9 0.9-6.6-6.5-4.9-10.5-2.9-19.6-1.7-5.5-1.4-5.5 1.3-4 2.4-4.6 4.7-21.7-1.7-22.3-19.6-4.2-21.7 12.1-9.4 8.8-5.4 2-4.4 1-8 2.9-10.9-18.2-3.5-10.7-0.6-7.3-2.9-6.3-6.7-4.1-1.2-1.2 4.3-21.1-1-8.6-3.2-10.1 0.3-7.4 8.3 0 16.5-1.6 8.1-1.4 16.1 6.2 13 13.1 21.4 6.6 10.4 6 8.6 1.1 1.1-4.6 2-5.3 2.9-2.9 2.4-4.8-1.4-10.6 2-10 12 2.4 14.2-0.7 11.8 3.8 15.1 21.9 9.8 9.4 13.4 3.8 14 2.7-0.6 13.4-4.3 12.9 0.8 7.5 4.1 6.7 13.9 8.3 7.5 7.3 29 5 29.4-3.2 10.4-5.8 0.2 11.2 3.4 10.9 1.3 25.3 3.3 7.2 15.4-15.4 9-7.2 20.5-3.4z"
						id="636a0376d075bc3b361041f9" name="Ampara">
					</path>
				</a>

				<a xlinkTitle="Batticaloa">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041fc" ? "#00FF00" : "#ffffff"}
						d="M969.1 1046.4l-6.6 5.4-6.2-4.9-2.8-2.9-0.6-4.5 1.9-28.9-1.3-9.7-4.8-4.2-1.9-3.9-14.7-21.8-0.8-4.7-3.8-8.1-1.5-4.4 0.2-4.6 1.4-4.1 0.6-4.3-2.2-5.2 5.7 5.5 5.4 12.9 4 5.9 5.1 13.7 15.7 25 7.5 38.9-0.3 8.9z m-23.3 13.5l-20.5 3.4-9 7.2-15.4 15.4-3.3-7.2-1.3-25.3-3.4-10.9-0.2-11.2-10.4 5.8-29.4 3.2-29-5-7.5-7.3-13.9-8.3-4.1-6.7-0.8-7.5 4.3-12.9 0.6-13.4-14-2.7-13.4-3.8-9.8-9.4-15.1-21.9-11.8-3.8-14.2 0.7-12-2.4-6.2-34.5 3.9-34.3 3.3-13 9.9-6.7 12.6-1.8 16.1 2.2 4-0.3-3.6-16.7-7.4-16.1-3.3-16.4 3.6-70.4-2.3-23.3 7.3-2.6 39.7 4.2 10.5 35.9 3.5 20.3-8 11.1-5.1-21-6.7-18.6-3.3 0-0.5 14.1 0.5 4.5-0.6 1.1 0 2.3 0.6 2.7 1.5 1.7 3.8 1.2 0.7 1.4 3.6 9.3 7.8 5.7 7.4-0.6 2.6-9.6 2.7 0 3.6 6.5 3.6 16.1 3.7 6.2 5 5.4 3.1 5.3 5.5 12.6 2.1-2.2 2.9-2.1 1.3-2.1 1.9 4.2-1.9 2.2 2.5 3.8 0.2 2 2.3-1.8 4.5-2.2 2.3-1.8 2.3 5.6-0.9 3.6-1.6 3.6 0.2 5.5 3.1 6 9 6.9 3.2 5.4-2 0.1-4 2.6-2.6 9.8 5.2 15.2 9.1 10.5 9.4-1.7 3 0 3.1 9.3 4.6 7.6 19 19.9 6.2 9.8 1 8.6-9.8 3-4.5-3.1-10.9-13.9-5.6-4.9-7.4-2.7-6 0.5-4.6 4.8-3.2 9.8 5.3 2.5 5.1 0.7 4.4-1.7 3.3-4.5 5.2 2 4.8 2.3 2.8 3.4-0.7 4.8 11.7 11 4.6 5.3 4.9 8-2.3 2.7-0.6 2.5 0.7 3.1 2.2 4.2 2.7-3.4-1.7-6.1 5.2 1.9 10.3 7.6 2.4 3.6 8.2 20.7-0.5 0.9-2.6 11.3 0.5 1.4 2.1 4.3 0.5 1.8-1.8 3-3.1 2.5-1.9 2.7 2.2 4 2.2 2.8 0.8 2.5 1.3 2.6 3.3 2.9-4.8 3.4 0.4 1.6z"
						id="636a0376d075bc3b361041fc" name="Batticaloa">
					</path>
				</a>

				<a xlinkTitle="Pŏḷŏnnaruva">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b3610420d" ? "#00FF00" : "#ffffff"}
						d="M742.8 704.6l2.3 23.3-3.6 70.4 3.3 16.4 7.4 16.1 3.6 16.7-4 0.3-16.1-2.2-12.6 1.8-9.9 6.7-3.3 13-3.9 34.3 6.2 34.5-2 10 1.4 10.6-2.4 4.8-2.9 2.9-2 5.3-1.1 4.6-8.6-1.1-10.4-6-21.4-6.6-13-13.1-16.1-6.2-8.1 1.4-16.5 1.6-8.3 0-22.8 4.2-23.7-1.7-1 8-2 7.8-6.7-4.2-3.8-5.3-8.8 8-11.1 4.7-11.7-2.6-4.3-6.2 0.8-8.7-6-27.1 3-12.3 12.8-2.8 0.8-3.3 1.5-3.2 4.3-18 1.2-10.2 4.3-21.1 13.3-13.9-6.5-3.9-7-1.5-5.1-1.4-5.3 2.5-0.2 2.9-2.9 1.8-3.7-1.4-2.4-2.6 0.2-7.9-6.2-6.9-3.8-3.8 0.6-11.8 8.6-12.1-8.8-7 0.7-15.5 3-17.5 6.4-16.8 3.6-18.8 6.5-17.1 17.5-3.3 19.6 0 5.6-3.3 1.9-7.8 3.3-7.9 5.7-6 6.6-1.9 5.2 7.6 7.1 2.8 6.8 5.3 1.8 9.3 5.6 5.6 18.6-1.8 33.5 8.2 7.9 0 7.3 4.2 7.1 5.5 7.8 4 5.6-0.4 3.2 4.4 0.6 5.7-0.1 5.8 1.5 8.4-2.4 5.6-5.1 3.2 1.8 1.3 2.1 0.7 11.1-2.5 6.2-14.7 2.3-4.3 2.8-11.6 3-2.7 3.4-2.5 2.9-5.3 4-4.4 12.4 0z"
						id="636a0376d075bc3b3610420d" name="Pŏḷŏnnaruva">
					</path>
				</a>

				<a xlinkTitle="Trincomalee">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104210" ? "#00FF00" : "#ffffff"}
						d="M789.8 706.2l-39.7-4.2-7.3 2.6-12.4 0-4 4.4-2.9 5.3-3.4 2.5-3 2.7-2.8 11.6-2.3 4.3-6.2 14.7-11.1 2.5-2.1-0.7-1.8-1.3 5.1-3.2 2.4-5.6-1.5-8.4 0.1-5.8-0.6-5.7-3.2-4.4-5.6 0.4-7.8-4-7.1-5.5-7.3-4.2-7.9 0-33.5-8.2-18.6 1.8-5.6-5.6-1.8-9.3-6.8-5.3-7.1-2.8-5.2-7.6-6.6 1.9 9.6-34.3 1-5.6 1.8-5.4 5.5-5.4 6.3-4.1 3.6-6.6-3-6.8-5.1-4-3.9-5-6.3-14.9-11.6-17.4-1.9-10.7-4.7-4.6-3.7-4.3-0.4-9.1 6.9-16-3.4-9.4-8.2-17.9-0.3-19.3 7.5-11 5.2-11.6-4.2-3.2-3.6-4.9-6.8-7.4-19.2-13.5-11.3-6.4-12.9-0.3-12.5 5.1 2-7.8 3.6-6.4 17.4-8.1 20.4-2.7 8.5-2.4 7.6-4.6 8.5-2.4 7-3.1 0.2 7 5.2 3.7-4.7 4.5-4.2 4.9 7 5.5 7.4-0.5 6.2-5.8 4.5-8 3-7.3 16 19.4 14.1 24.4 5.8 6 8.1 2.4 6.5 5.2 9.5 23.1 4.9 5.3 10.9 4.9 5.5 11.7 6.2 23.3 1.1-4.3 1.4-1.6 2.4 0.5 4.3 2.4-1.2 4.3 12.3 13.4 4 6.7 0 8.1-3.2 3.2-4.6 2.1-4.2 4.9 6.5-1.7 2.6-1.3 9.5 20.9 1.4 10.9-11 1.7 2.3-7.2-3-5.7-4.8-0.9-3.5 7.7 1.2 6 3.1 4.2 1.7 4.6-3.3 6.8-7.4-5.7-7.6-4.7-7.8-1.8-7.3 3.1-5.7 7.7 2 4.1 6.8-1.1 9.2-7.6 6.3 6.7 5.7 8.1 7 6.8 9.7 2.8 20.3-0.4 6.8-4.4-4.5-10.5 11.6-5.3 4.6-1.4 4.9 0.3 5.4 3.1 4.9 5.3 3.7 6.1 3.1 17.9 6.9 23 0.4 12-5.6-3.9-5.8-11.9-5.2-2.5-0.2 3.2 2.3 15.7 2.4 5.5 5.7 2.7 6 0 4.8 2.1 2.8 17.1 3.9 13.8 1 7.3z"
						id="636a0376d075bc3b36104210" name="Trincomalee">
					</path>
				</a>

				<a xlinkTitle="Anurādhapura">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041fa" ? "#00FF00" : "#ffffff"}
						d="M572.2 669.1l-5.7 6-3.3 7.9-1.9 7.8-5.6 3.3-19.6 0-17.5 3.3-6.5 17.1-3.6 18.8-6.4 16.8-3 17.5-0.7 15.5 8.8 7-8.6 12.1-0.6 11.8-9.3 3.8-8.4 4.2-5.7 5.1-8.6 9.1-2.6 1.8-3.3-0.9-4.4 0-2.5 7.1 0.1 8.3-4.2 6.5-5.7 5.9 1 2 0.3 3.2-2.9 1.7-3.1 2.1-3.2 5.4-6.6 4.6-5.3-3.5-7.1-0.3-7.8 9.5-14.9 5.5-9.4 7-11.2-10.9 1.7-15.4-2.2-10.6-4.2-10.3-1.1-7.5-3.7-6.2-7.1-0.5-6.2-2.6-0.8-7.7 0.6-8.1-1.3-9.6 0.8-5.6-0.1-5.6-6.7-5.5-8.3 0.3-8-4.9-7.2-7.3-13.3-10.9-14.6-5.6-8.2-1.2-6.6-4.8-8.5-3.4-8.7-2.2-40.7-18.7-9.6-5.4-4.9-6.4-6.5-5.2-9 0.3-7.9-5.9-7.4 3.4-9.2 0-2.7-7.9-11-45-6.5-12.6 4.8-11 7.4-3.5 2.1-4 0.6-3.1 13.7-11.3 8.1-17.1-2.5-18.5 3.6 1.8 4.3 0.5 0.9-41.4-3.5-26.2 19.6 8.1 21.7 0 43-11.3 0.2 14.5 4.5 12.6 6.7 2.3 6.5 3 2.9 5.5 1.6 6.1 4.7 9.5 9.3 5 4.6 1.2 4.3 0.3 6.8-12.2 7.8-3.5 8.3-19.2 17.4-22.7 13.4-6.2 8.2 4.4 7.5 5.3 14-0.1 11.8-9 11.2-10.1 9.6-11.3 5.4-8.2 6.2-7.6 10.5-8.4-3.7-11.6-8.1-10.5-11.5-4-0.9-9.8 32.9-1.2 12.8-9 11.6-3.3 12.2-2.3 12.5-5.1 12.9 0.3 11.3 6.4 19.2 13.5 6.8 7.4 3.6 4.9 4.2 3.2-5.2 11.6-7.5 11 0.3 19.3 8.2 17.9 3.4 9.4-6.9 16 0.4 9.1 3.7 4.3 4.7 4.6 1.9 10.7 11.6 17.4 6.3 14.9 3.9 5 5.1 4 3 6.8-3.6 6.6-6.3 4.1-5.5 5.4-1.8 5.4-1 5.6-9.6 34.3z"
						id="636a0376d075bc3b361041fa" name="Anurādhapura">
					</path>
				</a>

				<a xlinkTitle="Vavuniyā">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104211" ? "#00FF00" : "#ffffff"}
						d="M502.2 400.9l-3.6 6.4-2 7.8-12.2 2.3-11.6 3.3-12.8 9-32.9 1.2 0.9 9.8 11.5 4 8.1 10.5 3.7 11.6-10.5 8.4-6.2 7.6-5.4 8.2-9.6 11.3-11.2 10.1-11.8 9-14 0.1-7.5-5.3-8.2-4.4-13.4 6.2-17.4 22.7-8.3 19.2-7.8 3.5-6.8 12.2-4.3-0.3-4.6-1.2-9.3-5-4.7-9.5-1.6-6.1-2.9-5.5-6.5-3-6.7-2.3-4.5-12.6-0.2-14.5-16.7-21.6-10.5-8 0.1-5.9 1.7-6.6 11.4-1.1 6.5-15 12.4-6.9 16 1.8 24.9-3.1 23.7-8.8 2.3-15.6-6.7-17.2-6.9-11-12-5.6 20.5-13 12.4-10 7.9-12-0.6-7.5-1.6-7.7 0.1-4-0.5-3.6-6.5-1.1-3.4-4.7 1.1-6.5 8-0.7 8.5 0.5 15.2-0.5 11.1 7.1 6.8 10.2 10.9-4.9 7.5-6.8 4.4-2.1 4.2-2.4 0.8-2.3 1-2.2 14.4-0.4 13.7 5.3 1.6 14.3 11.9 1.3 5.1 9.1-4.2 6.3-0.8 6.1 6.9-1.7 6.5-4.4 13.9 2.1 14.1 8.6 5.3 7.2-8.1 30.3z"
						id="636a0376d075bc3b36104211" name="Vavuniyā">
					</path>
				</a>

				<a xlinkTitle="Mannār">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104207" ? "#00FF00" : "#ffffff"}
						d="M5.4 342.4l-4.4 0.2 5.5-3.5 7.9 0.5 1.4 1.6-9 0-1.4 1.2z m106.5 6.2l15.1 14.6-7.2-1.5-12.7-6.3-7.5-1.3 20.5 23.4 3.9 7.1-10.5-1.3-6.9-5.4-4.8-5.8-3.6-2.8-4.5-2.3-18.2-16.3-18.1-8.1-10.1-2.7-9.7-1.1-4.9-1.9-2.2-4.3 1.4-4.3 5.7-2 19.8 0 17.7 4.6 18.9 7.2 17.9 10.5z m136.7-82.1l0.5 15.2 2.7 14.6 8.2 13.1 0.9 3.1 0.5 3.3-0.4 6.9-1.6 6.4 1 10.6-0.7 9.1-9.7 3.3-2 4.5-1.4 4.9-2.4 5.1-1.5 5.2 2.1 4 2 3-5.6 16.1 72.9-3.9 12 5.6 6.9 11 6.7 17.2-2.3 15.6-23.7 8.8-24.9 3.1-16-1.8-12.4 6.9-6.5 15-11.4 1.1-1.7 6.6-0.1 5.9 10.5 8 16.7 21.6-43 11.3-21.7 0-19.6-8.1 3.5 26.2-0.9 41.4-4.3-0.5-3.6-1.8-11.8-6.6-11.3-4.8-13.1-1.3-11.6-4.4-5.1-3 1.6-1.7 5.1-15.9 1-0.9 1-4 4.1-9 3.9-43.5-10.7-27.7 0.9-4.9 0.8-32.1-1.1-10.5-1.3-5.2-2.3-4-1.8-4.5 4.1-2.2 5.9-1.1 4-1.2 25.6-23.2 13.4-6.6 5.5-4.9 3-10.9 5.3-11.2 3-15.6 14.2-36.9 1.8-7.4 3.3 0 15.2-1.3 9.3-4.8 8.4-6.3z"
						id="636a0376d075bc3b36104207" name="Mannār">
					</path>
				</a>

				<a xlinkTitle="Mulativ">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b3610420b" ? "#00FF00" : "#ffffff"}
						d="M571.6 377.6l-7 3.1-8.5 2.4-7.6 4.6-8.5 2.4-20.4 2.7-17.4 8.1 8.1-30.3-5.3-7.2-14.1-8.6-13.9-2.1-6.5 4.4-6.9 1.7 0.8-6.1 4.2-6.3-5.1-9.1-11.9-1.3-1.6-14.3-13.7-5.3-14.4 0.4-1 2.2-0.8 2.3-4.2 2.4-4.4 2.1-7.5 6.8-10.9 4.9-6.8-10.2-11.1-7.1-15.2 0.5-8.5-0.5-8 0.7-1.1 6.5 3.4 4.7 6.5 1.1 0.5 3.6-0.1 4 1.6 7.7 0.6 7.5-7.9 12-12.4 10-20.5 13-72.9 3.9 5.6-16.1-2-3-2.1-4 1.5-5.2 2.4-5.1 1.4-4.9 2-4.5 9.7-3.3 0.7-9.1-1-10.6 1.6-6.4 0.4-6.9-0.5-3.3-0.9-3.1-8.2-13.1-2.7-14.6-0.5-15.2 11.7 1.4-1.2-12.4 11.5-15 34-4 12.1-0.2 11.9 2.2 11.7-1.1 7.5-19.4 6-0.2 20.1 1 11.2-0.7 7.4-4 6.2-20.3 2.1-0.7 3.3 4.2 8.7 7.4 10.1 5.6-1.2-10.2 1.3-10.2 9.4-7.4 1-7.5 2.1-2.1 2.3-1.6 2.7-2.3 52.3 42.6 3.5 6 5 6.2 9.5 9 6 7.8-5.4 2.9-3.4-1.6-4.7-6-2.5-1.3-8-1.3-3.5 1 2.3 4.7 22.9 21.5 9 4.9-3.5-5.5-2.2-5.1 1.1-3.7 6.1-1.5 2.9 2 4.7 13.8 4.2 8.6 16.8 33.7-12.7-4.8-5.8-0.1-2.5 6.4 3.4 1.6 7.2 1.2 6.4 4.1 1 10.2 3 0 1.5-2.6 1.3-1.1 1.6-0.7 2-1.4 2.5 10 6.2 14.3 8.4 12.9 8.5 5.6 1.7 1.3 0 3.2-2.1 3.1-4.1 1.5-1.2-1.3-4.8-7.8-5.3-2.8-12.1-3.2-7.1-3.2 5.1 7 15.9 15 0 1.5z"
						id="636a0376d075bc3b3610420b" name="Mulativ">
					</path>
				</a>

				<a xlinkTitle="Jaffna">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104201" ? "#00FF00" : "#ffffff"}
						d="M37.9 155.5l-11.2 0.6-10.3-3.4-4.5-5.7 0-18.4 1.3-4.7 2.9 0.6 3 3.8 1.8 4.8 7.6 2.4 9.1 0.7 2.3 1.6 5.1 10.9-7.1 6.8z m49.5-51.2l3.2 2.7 3.6-0.3 1.9-1.6-2.6-4.5 0.2-2.5 3.8 0 4.4 3.4 1.7 6.1-1.2 9.4-1.3 2.2-4 0.5-14.5-2.8-2.9-4.1 0.6-16.7 1.7-2.4 2.3 2.4 3.1 8.2z m33.6-35.7l1.9 0.4 8.5-0.4 1.5 1.3 0.6 6.7 1.1 2.8 5 3.2 6.9 2.9 5.7 3.3 2 4.2-3.1 3.2-5.8 0-6.3-1.9-4.4-2.8-3.1-0.8-8 4.7-5.6 0.7-6.8-5-6.8-10.3-10.8-21.4 4.9-7.7 1.1-9.8 2.8-8 9.6-2.1 5.2 1.6 0.5 3.8-1.8 5.2-1.2 6.1 0.2 6.2 0.7 5.2 1.9 4.5 3.6 4.2z m171.3-0.9l-6 12.9-9.3 16.4-22.7-10-8.2-4.8-5.5-0.1 1.1 10.9 3 3.2 4.8 3.7 2.8 4.4-2.8 5.7-3.4 1.1-3.2-1.8-3-2.5-8.5-4.4-16.5-14.5-9.4-4.1 4.8 5.4 8.7 7.6 4.8 5.4-10.7-2.1-10.6-4.4-21.2-11.9-16.9-13.4-10.1-3.5-4.8-3.1-3.6-1.5-0.5 3.2-4.9-3.3-1.8-4.4-0.9-5.1-1.7-5.9-2.9-4.9-6.3-8.3-2.9-5.1 9.6-4.8 17.4-16.2 7.8-3.5 34.6 3 18-2 6.6 0.8 2.6 6-0.5 9.4 1.3 3.2 3.8 1.3 3.7 0.5 10.5 2.7 2.3 1.2 1.9 4 4.8-0.2 5.2-1.6 3.6-0.5 4.9 2.9 30.2 33z m148.2 101.3l-2.7 2.3-2.3 1.6-30.1-20.7-10.3-4.9-9.2-2-2.7-1.2-8-6.1-3-1.8-3-0.5-3.7 0.2-0.8-4.5-5.6-17.1 1 0.5 0-3.4-16.1-8.1-38.8-32-31.8-36.9-16.2-8.7-25.3-6-6.7-4.9-0.9-6.8 9.3-4 12.2-2.1 18.3-0.9 8.8 1.7 6.1 4.3 4.1 14.7 4.1 6.1 57.8 68.3 8.5 6.3 17.3 9.9 69.7 56.7z"
						id="636a0376d075bc3b36104201" name="Jaffna">
					</path>
				</a>

				<a xlinkTitle="Kilinŏchchi">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104205" ? "#00FF00" : "#ffffff"}
						d="M157.4 246.8l-2.3 1.6-3.7-6.9 2.6-1.5 2.6-3.8 2.9 2.3 1.2 2.1-0.6 3-2.7 3.2z m278.1-73.9l-2.1 2.1-1 7.5-9.4 7.4-1.3 10.2 1.2 10.2-10.1-5.6-8.7-7.4-3.3-4.2-2.1 0.7-6.2 20.3-7.4 4-11.2 0.7-20.1-1-6 0.2-7.5 19.4-11.7 1.1-11.9-2.2-12.1 0.2-34 4-11.5 15 1.2 12.4-11.7-1.4-8.4 6.3-9.3 4.8-15.2 1.3-3.3 0 2.8-10.9 0-26 0.9-3.8-0.8-2.6-5.2-1-12.2-6.4-4.7-4.4-3.5-10-2.2-10.5-0.2-6 5.3-5.6 9.8-4.9 10.9-3.4 8.9-1.4 4-2 9.7-13 2.8-2.1 3.2-2 4-1.4 5.1-0.9-4.2-7.8-5.1-6.8-6.5-6.5-8.6-6.4-32.7-19.3-6.6-8.2 14.3 0.4 13.5 5.5 26.6 15.5 25.3 6.4 6.7 4.3 10.5 9.2 2.6 4.9-5.4 2.7 1.2 3.1 1.6 3-2.8 3.1 9.3 6.2 21.8-5.3 39.9-15.9 10.7 1 23.6 6.5 27.8 12.6 21 4.1z m-76.4-58.6l5.6 17.1 0.8 4.5-5.4 0.3-3.5 1.3-1.4 2.4-1.8 0.9-5.8-4.4-2.4-0.4-14.3 0.4-4.1-1.2-31.4-27.3-13.5-8.8-4.9-2.1 9.3-16.4 6-12.9 21.2 23.1 13.7 8.7 31.9 14.8z"
						id="636a0376d075bc3b36104205" name="Kilinŏchchi">
					</path>
				</a>

				<a xlinkTitle="Kuruṇegala">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104206" ? "#00FF00" : "#ffffff"}
						d="M384.4 902.1l-2 7.2 1.1 7.9 3.9 2.2 3.4 0.9 3.1 6.9 4.4 7.4 3 7.7 0.1 7.7 1.6 1.1 2.3 3.2 1.3 14.9 2.4 13.8 8.1 7.9-0.2 5.2-1.3 5.3 0.1 4.1-1.6 3.8-6.2 5.7-1.1 9.4 4.4 9 2.7 4.4 2.2 4.7 1.3 5.6-0.9 5.4-2.5 3.3-0.2 4.6-5.3 2.5-5.2 1.4 3.5 5.6 2.7 6.1-4.8 2.2-6.3-1.1-6.5 3.7 0.7 4.9-0.7 4.7-7.5-0.6-6.9-4.9-6.3 0-1.4 8.9-1.9 2.4-1.5 2.6 0.3 3 0.8 2-8 2.4-9.1-1-4.1-8.6-6.4-6.7-10.6-1.4-9.7 3.8-1.5 8.5 0.5 9.1-1.5 5.3-3.2 4.3-4.7 0.2-21.6 4.8-10.3 4.9-9.7 6.9-9.2 8.2-9 5.2-7.7-5.6-11-12.6-2.5-3.7-1.3-3.8-4-4.4-12.3 2.2-10.8 7.7-12.8 3.8-12.2-8.6-10.6 0.4-16.8 13.3-9.4 3.7-1.1-26.6-16.3-87.8-0.8-15.4 0.9-15.3 4.7-12.2 6.7-11.4 1.6-5 3.2-4.4 6.4-1.7 5.2-2.9-2.4-4-5.5-1.4 2.3-5.8 3-5.2 5.7-1.8 6.3-0.5 4.8-2 3.1-4.1-1.6-4.7-2.4-4.9 1.4-11.8 4.2-10.8 0.8-5.3 1.6-4.8 5.7-3.1 5.4-3.7 1.3-4.8 2.1-4.5 9.4-4.9 1.7-4.1 0.7-4.5 2.7-6.2 6.5-3-0.8 1.5 2.8-0.8 3.4-3.6 0.1-5.4 2.5-4.3 9.2 5.2 5.6-4.3-5.3-9.9 2.5-5.3 3.4-5 0.4-10.2-0.3-12 1.7-5.8 1.1-5.3-5.3-3.4-6-2.1-4.2-8-1.6-8.7-4.7-17.7 0.2-9-0.8-8.5 9.6 5.4 40.7 18.7 8.7 2.2 8.5 3.4 6.6 4.8 8.2 1.2 14.6 5.6 13.3 10.9 7.2 7.3 8 4.9 8.3-0.3 6.7 5.5 0.1 5.6-0.8 5.6 1.3 9.6-0.6 8.1 0.8 7.7 6.2 2.6 7.1 0.5 3.7 6.2 1.1 7.5 4.2 10.3 2.2 10.6-1.7 15.4 11.2 10.9z"
						id="636a0376d075bc3b36104206" name="Kuruṇegala">
					</path>
				</a>

				<a xlinkTitle="Puttalama">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b3610420e" ? "#00FF00" : "#ffffff"}
						d="M178.3 584.1l2.5 18.5-8.1 17.1-13.7 11.3-0.6 3.1-2.1 4-7.4 3.5-4.8 11 6.5 12.6 11 45 2.7 7.9 9.2 0 7.4-3.4 7.9 5.9 9-0.3 6.5 5.2 4.9 6.4 0.8 8.5-0.2 9 4.7 17.7 1.6 8.7 4.2 8 6 2.1 5.3 3.4-1.1 5.3-1.7 5.8 0.3 12-0.4 10.2-3.4 5-2.5 5.3 5.3 9.9-5.6 4.3-9.2-5.2-2.5 4.3-0.1 5.4-3.4 3.6-2.8 0.8 0.8-1.5-6.5 3-2.7 6.2-0.7 4.5-1.7 4.1-9.4 4.9-2.1 4.5-1.3 4.8-5.4 3.7-5.7 3.1-1.6 4.8-0.8 5.3-4.2 10.8-1.4 11.8 2.4 4.9 1.6 4.7-3.1 4.1-4.8 2-6.3 0.5-5.7 1.8-3 5.2-2.3 5.8 5.5 1.4 2.4 4-5.2 2.9-6.4 1.7-3.2 4.4-1.6 5-6.7 11.4-4.7 12.2-0.9 15.3 0.8 15.4 16.3 87.8 1.1 26.6-7.7-3-6.5 4-5.2-0.6-3.4-3.9-8.6 1.1-8.2 2.2-10.5-0.5-19.1-139.9-2.7-5.8 1.8-1.9 1.4-0.2 3.2 2.1 0.7-7.7 2.2-8.9 1.1-8.6-2.5-6.7-3.4-6.2-1.3-8.1 0.1-16.5-10.2-50-1.2-5.8-5.2-10.9-4.5-23.1-7.2-18.2-11.1-50.4 0-14.3 1.8 0.9 1.2 2.2 1.6-8.3-2.4-26.4-2.2-8 7.2-4.8 6.9-8.9 5-10.1 1.9-8.5 2.1-5.5 13-20.7-6.7 15.9-8.4 14.9 2.3 4.5 3.3 3.3 4.3 1.7 5.2-0.1-4.3 12.2-4.4 8.9-2 1.5-2 0.2-1.6 1.3-0.8 4.7 0.4 10.6-0.4 3.3-7.4 23.9 0.8 13.3 10 11.8-8.9 18.6 14.1 10.2 20.5 1.6 10.4-7.4-2-7.9-4.6-8.6-5.5-6.9-4.4-2.9-1.3-4.8 14.9-28.4-0.6-5.2-1.9-3.8-2.2-3.2-1.4-3.3-0.3-5.4 0.5-9.3-0.2-3.9-1.4-3.9-1.6-1.5-0.9-1.8 0.9-5 2.1-4.2 5.8-7.6 1.2-5 0.9-9.3 4.1-18.7 4.2-43.7 2.7-4.9 3-2.5 2.2-2.9 0.9-6.6 0-18.6 2.6-9.1 6-5.9 7.1-4.8 4.1-4.5 5.1 3 11.6 4.4 13.1 1.3 11.3 4.8 11.8 6.6z"
						id="636a0376d075bc3b3610420e" name="Puttalama">
					</path>
				</a>

				<a xlinkTitle="Ratnapura">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b3610420f" ? "#00FF00" : "#ffffff"}
						d="M383 1340.2l-0.3 7.3 3 3.3-3.3 3.2-1.6 4.5 9 7 10.8 0.9 22.9 5.1 24.3 3.3 9.3-1.5 11-0.9 14.6 0.5 13.8-1.9 25-13.1 1.2 16.4 3.3-1.6 3.2-1.3 6.1 6.6 7.6 2.4-1.1 4.2-1.4 3.4-1.7 1.7-11.9 5.5-2.1 5.8 4.6 7.4 6.8 5.5 10.1 1.9 10.6-4.3 9-6.7 8.1-0.4-7.3 11-4.5 11.5-8.1 9.7-4.2 9.9-4.4 19.2-8.3 11.9-6.7 12.7 1.3 7.3 2.8 7 0.4 27.5 4.9 9.5 6.3 8.3 8.4 4.6 8.1 5.7 4.2 8.1 3.5 10.3 8.1 9.1 4.1 11.3-2.2 7.9-9.3-3.1-16.2-3.3-5.2-6-6.7-5.3-8.4 0.8-8.4 2.1-8.5-1.4-32.4-11.8-25.3-4.8 0-4.2 2.4-2.4-5.7-4.2 0.4-4.2-5-6.1-10.6 1.8-7.9-1.4 2.9-8-6.4-11.7-19.4 2.5-7.5 0.1-3.1 7.2-8.7 2-8.6 1.2-3.8-5.5-7.1 0.3-13.7-6.8-6.6-0.2-7.5-3-6-5.1-5.4-5.6-15.9-27.8-18.7-26.3-2.3-7.6 6.6-2.5-6.4-12.3-9.8-9-6.2-2.4-4.9-4.6-2.6-12.9-13.5-13.1-4.2-8.9-2.9-8.4 0.7-7.1-7.8-20.4-1.4-9.2 9.7-8.7-10.9-11.6 2.3-5.3 1.9-6.2 4.8-7.6 5.7-6.9 6.8-3.1 18.3 18.6 5.5 7 6.7 5.3 3.2-1.7 4.5-1 3.2 3.8 2.1 4.4 11.1 2.4 13.4-7.6 5.5-0.6 6.7 0.3 9.5 5.4 12.2 4.1 8.7 1.2 8.8-0.3z"
						id="636a0376d075bc3b3610420f" name="Ratnapura">
					</path>
				</a>

				<a xlinkTitle="Gālle">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041fe" ? "#00FF00" : "#ffffff"}
						d="M332.6 1520.8l5.4 5.6 6 5.1 7.5 3 6.6 0.2 13.7 6.8 7.1-0.3 3.8 5.5-9.1 2.8-5.9 6 5.2 7.9 6.8 6.9-2.6 12.6-13.7-3.2-8.4-7.9-9.4-7.1-7.3-2.1-7 1.9 4.3 8.2 8.8 5.6 9.3 13.4 3.3 12.7-7.7 9.5-15.5-2.7 4.6 5.5 2.1 7.2-3.2 9.2-4 8.6 2.8 8.7 6.9 6.4 7.9 5.4 6.9 6.3-6 7.2-7 7.1-6.1 2.5-2.6 4.2 1.3 4.6 3.5 1.8 7.8 3.3-2.7 5.4-8 3-4.9 8.6 0.1 4.9 0.8 5.1-2.8-0.4-2.1-1-1.5-2.1-1.9-2-3.4-1-2.1 0.7-1.6 1.5-1.7 1.2-2.3-0.1-1.5-1.3-2.8-4-1.8-1-3.1-1.1-18.9-6.8-13.2-2.8-9.6-7.7-6.5-3.1-3.2 3.3-8.2-6.7-36-38.2-3-2.3-1.3-1.7-0.6-1.8 0.2-3.8-1.2-2-5.5-7.2-20.3-43.1-0.9-4.1 0.2-7.5-0.7-2.2-3.7-7.7-3.7-20.7-8.2-14.6-5.1-20.9 3.1 0.7 2.4 3.4 2.5 2.3 2.9-1.9 4.5-1.8 3.2 3.1 2.2 3.8 16.3 7.5 8 1.7 8.8 3.8 7.1 6.3 7.4 4.9 19.1 3.7 12.1-6.8 13.4-1.2 13 10.1 6.8 6.6 6.9 5.5 0.9-8.9-3.3-9.7 0-9.5 8.1-3.6 15.5-9.6 15.7-3.6z"
						id="636a0376d075bc3b361041fe" name="Gālle">
					</path>
				</a>

				<a xlinkTitle="Hambantŏṭa">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104200" ? "#00FF00" : "#ffffff"}
						d="M920.3 1483.2l-13.6 21.4-13.8 14-25.7 18.2-8.3 2.5-11.3 6-82 64.6-16.4 8.9-53.2 19-0.8-6.8-3.1-2.5-3.5 0.9-1.7 3.6-0.9 7.5-2.4 2.8-3.8 1-5.2 2.3-9.6 5.8-9.6 4.2-46 9.9-22.3 7.7-24.4 4.5-11.1 4.3-6.7 9.4-12-2.4-11.5 4.5-34.1 25.2-1 1.2-2.5-1.4-11.2-5-5.2-8.2 3.1-1.7 0.2-3.7-3.7-2.1-4.3-0.4-6.2-4-1-7.1 14.3-6.1-4.9-17.1 4.1-3.7 1.6-3.9-4.9-1.1-5.2 0.9-7.2-3.9-1.5-7.6 2.6-4 2.1-4.6-2.4-2.4-3.9 0.7-8.4-3.2-7.6-5.4 5.4-19.1 16.9-12.9-3-7 3-7.8-0.7-3.4 4.1-1.6 25.3 4.8 32.4 11.8 8.5 1.4 8.4-2.1 8.4-0.8 6.7 5.3 5.2 6 16.2 3.3 9.3 3.1 2.2-7.9-4.1-11.3-8.1-9.1 10.8-7.1 11.2-6 12.5-4.1 9.5-7.3-4.2-9.9 2.1-10.1 5.6 0 6-0.4 3.6-5.2 0-5.9 5.4 3.9 4.2-4.8 11.1-0.1 10.9 1.4 7.6 2.7 3.4 8.2 4.3 0.6 4.8-0.2 4-2.9 5.6-0.6 8.2 10.8 6.8 11.5 11 4.6 12.1-6.6 4.4-4.4 6.7-2.8 12.9-3.4 26.3-10.2 4.8-3.5 1.1 1.3 3.9 0.5 11.8-4.3 12.3 2.8 5.7-9.4 0-3.9-0.2-3.6 2-2.8 1.9-3.1-2.3-6-0.2-7.5 8.8-7 10.5-4.7 8-7.8 9.3-7.1 11.9-2.2 7.9-9.2 13.2 16.2 5.1 0.4 5.6 0.8 7.4 8.4 10.7 3.3 4 1.3z"
						id="636a0376d075bc3b36104200" name="Hambantŏṭa">
					</path>
				</a>

				<a xlinkTitle="Mātara">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104209" ? "#00FF00" : "#ffffff"}
						d="M459.9 1574.1l-4.1 1.6 0.7 3.4-3 7.8 3 7-16.9 12.9-5.4 19.1 7.6 5.4 8.4 3.2 3.9-0.7 2.4 2.4-2.1 4.6-2.6 4 1.5 7.6 7.2 3.9 5.2-0.9 4.9 1.1-1.6 3.9-4.1 3.7 4.9 17.1-14.3 6.1 1 7.1 6.2 4 4.3 0.4 3.7 2.1-0.2 3.7-3.1 1.7 5.2 8.2 11.2 5 2.5 1.4-6.8 7.9-18.1-1.1-7.6 1.1-5.9 2.3-6 3.4-10.8 8.1-6.2 1.4-7.3-2.8-7.8-4.1-7.5-2.2-25.6 3-7.3-1.4-3.7-3.7-2.3-4.8-3.3-5-7.5 4.4-6.7 0.5-11.9-1.7-0.8-5.1-0.1-4.9 4.9-8.6 8-3 2.7-5.4-7.8-3.3-3.5-1.8-1.3-4.6 2.6-4.2 6.1-2.5 7-7.1 6-7.2-6.9-6.3-7.9-5.4-6.9-6.4-2.8-8.7 4-8.6 3.2-9.2-2.1-7.2-4.6-5.5 15.5 2.7 7.7-9.5-3.3-12.7-9.3-13.4-8.8-5.6-4.3-8.2 7-1.9 7.3 2.1 9.4 7.1 8.4 7.9 13.7 3.2 2.6-12.6-6.8-6.9-5.2-7.9 5.9-6 9.1-2.8 8.6-1.2 8.7-2 3.1-7.2 7.5-0.1 19.4-2.5 6.4 11.7-2.9 8 7.9 1.4 10.6-1.8 5 6.1-0.4 4.2 5.7 4.2-2.4 2.4 0 4.2z"
						id="636a0376d075bc3b36104209" name="Mātara">
					</path>
				</a>

				<a xlinkTitle="Badulla">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041fb" ? "#00FF00" : "#ffffff"}
						d="M725.2 1142l-17.2 4.1 0 9.2-3.4 8.4-12.1 15.3-4 6.9-7.4 3.1-6.1-6.7-7.3-0.9-5.2 7.9-1.3 9 5.5 7.1 6.8 6.7 4.4 9.2 5.2 5.4 16.3-4.3 4.7 6.1 2.4 2.1 3.3 4 2.3 6 1.2 6.2 0 8.3-2.1 8-1.6 12.3-2.4 4.9-3 4.6-1.1 6.9-2.3 6.4-5.7 1.3-4.4-1.9-2.7 2.7-2 3.5-4.4 5.7-5.6 4.5-11.3 3.1-9.5 5.3 10.8 15-12.8 4-3.8 7.4-15 1.3-1.1 9.4 0.9 9.5-3.7 8.1 1.7 5.8 7.7 2.1 0.6 7.8-6.6 10.2-0.9 6.6 0.1 6.7 4.1 12.4 6.6 10.4-9.2 3.3-1.4 10.5-4.8-2.3-4.7-3.1-6.3 9.8-1.7 11.8-3.8-6.2-5.1-6.3-2-14.2-3-1.8-3.1-1.5-3-9.7-4.1-9.2-3.5-0.7-3.4-1.8-2.1-7.7-3.5-5.3-5.2-0.3-8.1 0.4-9 6.7-10.6 4.3-10.1-1.9-6.8-5.5-4.6-7.4 2.1-5.8 11.9-5.5 1.7-1.7 1.4-3.4 1.1-4.2-7.6-2.4-6.1-6.6-3.2 1.3-3.3 1.6-1.2-16.4 8.4-2.1 4.5-6.4-4.1-2-4-2.6 6.5-10.6-1.8-3-2.2-2.8-2.5-6.8-3-6.2-14.1-7.1-0.5-7.1 8-0.4 8.3 0.5 5.9-6.9 2.2-8.8 7-6.4 7.9-3.8 16.8-3.7 9.8-14.6 2-8.7 4-7.8 3.6-3.3 2.9-3.7 1.4-3.3-0.6-3.1-2.4-7.9 2.1-4.1 3-3.7-1.6-2.3-2-2.4-0.9-3.7 1-4.1-3.3-11.1 0.3-8 5.6-3.4 9.5-2.7 11.9-11.1 0.8-14.5-9.7-32.2-3.9-67.3-2.1-36.5 4.2-20.9 1.2 1.2 6.7 4.1 2.9 6.3 0.6 7.3 3.5 10.7 10.9 18.2 8-2.9 4.4-1 5.4-2 9.4-8.8 21.7-12.1 19.6 4.2 1.7 22.3-4.7 21.7-2.4 4.6-1.3 4 1.4 5.5 1.7 5.5 2.9 19.6 4.9 10.5 6.6 6.5 3.9-0.9 5.4 1 1.8 4 3.1 5.2 3.9 8 1.6 8z"
						id="636a0376d075bc3b361041fb" name="Badulla">
					</path>
				</a>

				<a xlinkTitle="Mŏṇarāgala">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b3610420a" ? "#00FF00" : "#ffffff"}
						d="M874.3 1452.8l-7.9 9.2-11.9 2.2-9.3 7.1-8 7.8-10.5 4.7-8.8 7 0.2 7.5 2.3 6-1.9 3.1-2 2.8 0.2 3.6 0 3.9-5.7 9.4-12.3-2.8-11.8 4.3-3.9-0.5-1.1-1.3-4.8 3.5-26.3 10.2-12.9 3.4-6.7 2.8-4.4 4.4-12.1 6.6-11-4.6-6.8-11.5-8.2-10.8-5.6 0.6-4 2.9-4.8 0.2-4.3-0.6-3.4-8.2-7.6-2.7-10.9-1.4-11.1 0.1-4.2 4.8-5.4-3.9 0 5.9-3.6 5.2-6 0.4-5.6 0-2.1 10.1 4.2 9.9-9.5 7.3-12.5 4.1-11.2 6-10.8 7.1-3.5-10.3-4.2-8.1-8.1-5.7-8.4-4.6-6.3-8.3-4.9-9.5-0.4-27.5-2.8-7-1.3-7.3 6.7-12.7 8.3-11.9 4.4-19.2 4.2-9.9 8.1-9.7 4.5-11.5 7.3-11 5.2 0.3 3.5 5.3 2.1 7.7 3.4 1.8 3.5 0.7 4.1 9.2 3 9.7 3.1 1.5 3 1.8 2 14.2 5.1 6.3 3.8 6.2 1.7-11.8 6.3-9.8 4.7 3.1 4.8 2.3 1.4-10.5 9.2-3.3-6.6-10.4-4.1-12.4-0.1-6.7 0.9-6.6 6.6-10.2-0.6-7.8-7.7-2.1-1.7-5.8 3.7-8.1-0.9-9.5 1.1-9.4 15-1.3 3.8-7.4 12.8-4-10.8-15 9.5-5.3 11.3-3.1 5.6-4.5 4.4-5.7 2-3.5 2.7-2.7 4.4 1.9 5.7-1.3 2.3-6.4 1.1-6.9 3-4.6 2.4-4.9 1.6-12.3 2.1-8 0-8.3-1.2-6.2-2.3-6-3.3-4-2.4-2.1-4.7-6.1-16.3 4.3-5.2-5.4-4.4-9.2-6.8-6.7-5.5-7.1 1.3-9 5.2-7.9 7.3 0.9 6.1 6.7 7.4-3.1 4-6.9 12.1-15.3 3.4-8.4 0-9.2 17.2-4.1 3.5 8.6 3.8 7.2 9-3.1 8.2-6-2.3-16.6-0.1-17.1 11 0.5 8.9-5 2.1-3.1 3.1-3.7 2-4.4-0.5-5.3-2.4-5.2-0.1-5.8 4.5-0.4 6.1-1.6 3-4.8 1.7-4.1 4.8-2.2 5.4-1.9 11-5.9 8.7 2.4-6.5 10.1 2.8 1.7 2.9 0.5-0.9 6 5.3 23.5-0.7 10.6 1.8 8.6 9.8 8.5 6.1 10.8 1.3 9.6 9.6 13.3-7.2 5.7-9.2 10.9-5.1 13.8 5.7 10.4 1.7 6.9 3.5 6.1 3.5 1.6 3.3 0 2.8 1.6 2.2 2.1 15.8 4 13.1 7.9-0.9 8.4-2.1 8.8 3.1 8.5 0 8.6 5.3 7.7 2.2 8.8-11.5 163.3z"
						id="636a0376d075bc3b3610420a" name="Mŏṇarāgala">
					</path>
				</a>

				<a xlinkTitle="Kegalle">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104204" ? "#00FF00" : "#ffffff"}
						d="M350.4 1106.2l5.4 13.6 19.1 16.8-0.7 8.6 3.7 2.6 11.3 6.3 5.3 6.5-1.1 7.9 0.1 6.6 6.4 6.3 5.2 6.5-2.5 5.9-3.5 5.4-4.8 1.2-4.8 0.3-7 7.5-15.3 2.5-5 4.7 6.7 16 3.2 5.6-3.2 6.8-0.2 8.9 0.6 1.4 1.4 0.4-3.9 6.3-6.1 5.4-3.4 1.1-2.4 3.3 2.5 3.4 2.8 2.9-3.1 16.6 3.8 12.8 12.9 4.2 10.2 7.6 3.4 11.7 0.7 6-5.1 4.4-8.8 0.3-8.7-1.2-12.2-4.1-9.5-5.4-6.7-0.3-5.5 0.6-13.4 7.6-11.1-2.4-2.1-4.4-3.2-3.8-4.5 1-3.2 1.7-6.7-5.3-5.5-7-18.3-18.6-6.8 3.1-0.3-4.4-0.6-4.3 5.9-5.5-1.4-8.1-7.6-3.9-9.6-0.6 1.4-3.7-0.1-4-6.6-21.2 2.3-12.9 5.6-13 6.4-4.4 3.3-7.6-9.3-2.7-10.8 2.5-5.4-11.1 1.9-12.6 7-3.7 5.8-5.4 1.1-15.3 4.4-3.4-0.8-6 9-5.2 9.2-8.2 9.7-6.9 10.3-4.9 21.6-4.8 4.7-0.2 3.2-4.3 1.5-5.3-0.5-9.1 1.5-8.5 9.7-3.8 10.6 1.4 6.4 6.7 4.1 8.6z"
						id="636a0376d075bc3b36104204" name="Kegalle">
					</path>
				</a>

				<a xlinkTitle="Colombo">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041fd" ? "#00FF00" : "#ffffff"}
						d="M256.8 1302l-5.7 6.9-4.8 7.6-1.9 6.2-2.3 5.3 10.9 11.6-9.7 8.7-12.9-3-14.4 6.1 2.9 12.9-8.7-2.2-5.7-13.4-2.3-1.3-2.8-0.5-5.4 6.3-6.9 3.5-4.9-2.3-4.9 0.6-17 14.6-4.9 2.2-5.1 1.2-12.8 4.8-20.4-12.7-0.5 7.4 2.7 8.3 1.4 5.7 0.1 5.5-0.9 1.5-16.5-42.4-6-33.6-0.6-3.3 0-32.1 0.5-1.2 9.6 3.7 7.3 3.8 7.8 1.9 3.4-1.9 4.1-1.6 21.9 6.4 7.6-1.5 7.6-0.6 6 3.7 5.2 4.9 5 2.8 5.1 2 7.8 0.9 9.5-0.5 0.5-8.7 1.8-8.4 7-7 8.7-4 12 1.2 8-2.8 9.6 0.6 7.6 3.9 1.4 8.1-5.9 5.5 0.6 4.3 0.3 4.4z"
						id="636a0376d075bc3b361041fd" name="Colombo">
					</path>
				</a>

				<a xlinkTitle="Gampaha">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b361041ff" ? "#00FF00" : "#ffffff"}
						d="M249.4 1150.7l0.8 6-4.4 3.4-1.1 15.3-5.8 5.4-7 3.7-1.9 12.6 5.4 11.1 10.8-2.5 9.3 2.7-3.3 7.6-6.4 4.4-5.6 13-2.3 12.9 6.6 21.2 0.1 4-1.4 3.7-8 2.8-12-1.2-8.7 4-7 7-1.8 8.4-0.5 8.7-9.5 0.5-7.8-0.9-5.1-2-5-2.8-5.2-4.9-6-3.7-7.6 0.6-7.6 1.5-21.9-6.4-4.1 1.6-3.4 1.9-7.8-1.9-7.3-3.8-9.6-3.7 4.4-10.6 1.2-5-0.1-5.3-21.2-75.2 3-11-0.2 6.8 1.7 4.2 2.3 3.3 2.1 3.9 4.3 14.9 2 3.6 2.8 0 0.6-4.2 1.3-1.8 1.4-0.1-0.1-13.7-1-5.9-2.2-4.9-2.1-1.5-5.8-1.3-2.6-1.7-1.9-3.8 0.7-3.6 1.7-3.2 0.9-3.2-2.6-19.2 10.5 0.5 8.2-2.2 8.6-1.1 3.4 3.9 5.2 0.6 6.5-4 7.7 3 9.4-3.7 16.8-13.3 10.6-0.4 12.2 8.6 12.8-3.8 10.8-7.7 12.3-2.2 4 4.4 1.3 3.8 2.5 3.7 11 12.6 7.7 5.6z"
						id="636a0376d075bc3b361041ff" name="Gampaha">
					</path>
				</a>
				<a xlinkTitle="Kaḷutara">
					<path
						onClick={changeData}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						cursor={"pointer"}
						fill={isHovered === "636a0376d075bc3b36104202" ? "#00FF00" : "#ffffff"}
						d="M243.3 1348.3l1.4 9.2 7.8 20.4-0.7 7.1 2.9 8.4 4.2 8.9 13.5 13.1 2.6 12.9 4.9 4.6 6.2 2.4 9.8 9 6.4 12.3-6.6 2.5 2.3 7.6 18.7 26.3 15.9 27.8-15.7 3.6-15.5 9.6-8.1 3.6 0 9.5 3.3 9.7-0.9 8.9-6.9-5.5-6.8-6.6-13-10.1-13.4 1.2-12.1 6.8-19.1-3.7-7.4-4.9-7.1-6.3-8.8-3.8-8-1.7-16.3-7.5-2.2-3.8-3.2-3.1-4.5 1.8-2.9 1.9-2.5-2.3-2.4-3.4-3.1-0.7-1.8-7.6-2.9-1.9-2-1.7-1.2-2.5 0.5-2.6 2.2-0.6 2.2 0.2 1.2 0-3.4-23.3-0.3-1.9-9.2-23.7-21.4-54.9 0.9-1.5-0.1-5.5-1.4-5.7-2.7-8.3 0.5-7.4 20.4 12.7 12.8-4.8 5.1-1.2 4.9-2.2 17-14.6 4.9-0.6 4.9 2.3 6.9-3.5 5.4-6.3 2.8 0.5 2.3 1.3 5.7 13.4 8.7 2.2-2.9-12.9 14.4-6.1 12.9 3z"
						id="636a0376d075bc3b36104202" name="Kaḷutara">
					</path>
				</a>
				<circle cx="302.6" cy="1147.4" id="0">
				</circle>
				<circle cx="616.8" cy="745.3" id="1">
				</circle>
				<circle cx="149.2" cy="439.8" id="2">
				</circle>
			</svg>
		</div>
	);
}
Map.propTypes = {
	handleDistrictClick : PropTypes.func.isRequired
};
export default Map;

