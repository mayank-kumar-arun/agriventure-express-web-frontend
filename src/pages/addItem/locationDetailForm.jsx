import React, {useEffect, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {getAllDistricts} from "../../services/districtServices";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

// eslint-disable-next-line no-unused-vars
function LocationForm(props){
	const [districtArray, setDistrictArray] = useState([]);
	const [district, setDistrict] = useState("");
	const [cityArray, setCityArray] = useState([]);
	const [city, setCity] = useState("");
	const [location, setLocation] = useState({lat: "x", lng: "x"});
	const [isMapReset, setMapReset] = useState(false);

	useEffect( () => {
		async function fetchData() {
			const {data} = await getAllDistricts();
			setDistrictArray(data.districtList);
		}
		fetchData();
	},[]);

	useEffect( () => {
		const currentDistrict = districtArray.filter((ele)=>{
			return ele._id === district;
		});
		try{
			setCityArray(currentDistrict[0].cities);
			setCity("");
		}catch (e){
			setCity("");
		}
	},[district, districtArray]);

	useEffect(()=>{
		const currentDistrict = districtArray.filter((ele)=>{
			return ele._id === district;
		});

		let districtName = null;
		try{
			districtName = currentDistrict[0].name;
		}catch (e){
			districtName = null;
		}

		const data = {
			district:districtName,
			city:city,
			location:{lat:location.lat, lng:location.lng}
		};
		props.getValues(data);
	},[props.onSubmit]);

	const handleChangeDistrict = (event) => {
		setDistrict(event.target.value);
	};
	const handleChangeCity = (event) => {
		setCity(event.target.value);
	};
	const handleMapReset = ()=>{
		setLocation({lat: "x", lng: "x"});
		setMapReset(!isMapReset);
	};

	return(
		<Grid item container>
			<Grid container>
				<Grid item xs={12} container justifyContent={"center"}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Location Details
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<hr
								style={{
									color: "black",
									backgroundColor: "black",
									height: 0.1
								}}
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">District</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={district}
								label="District"
								onChange={handleChangeDistrict}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150 } } }}
							>
								{districtArray!=[]?districtArray.map((element)=>{
									return(
										<MenuItem key={element._id} value={element._id}>{element.name}</MenuItem>
									);
								}):""}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">City</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={city}
								label="City"
								onChange={handleChangeCity}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150} } }}
								disabled={cityArray.length==0?true:false}
							>
								{cityArray.length!=0?cityArray.map((element)=>{
									return(
										<MenuItem key={element} value={element}>{element}</MenuItem>
									);
								}):("")}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={2} mr={3} spacing={1}>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<TextField id="location-lat" label="Latitude" variant="outlined" disabled value={location.lat=="x"?"":location.lat}/>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<TextField id="location-lng" label="Longitude" variant="outlined" disabled value={location.lng=="x"?"":location.lng}/>
						</FormControl>
					</Grid>
				</Grid>
				{location.lat=="x"?
					(<Grid item xs={12} mt={3} ml={3} mr={3}>
						<Stack direction="row" alignItems="center" gap={1}>
							<InfoIcon color={"info"}/>
							<Typography textAlign={"center"} variant={"body1"}>Click on the map to get Location</Typography>
						</Stack>
					</Grid>):
					(<Grid item xs={6} mt={3} ml={3} mr={3}>
						<Button variant={"contained"} color={"warning"} onClick={handleMapReset}>Reset</Button>
					</Grid>)
				}

				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12} border={1} borderColor={"#bdbdbd"} mb={3} borderRadius={"4px"} bgcolor={"lightgray"}>
						<GoogleMap locationPointer={location} setPointer={setLocation} mapReset={isMapReset}/>
					</Grid>
				</Grid>

			</Grid>
		</Grid>
	);
}

LocationForm.propTypes={
	onSubmit: PropTypes.bool,
	getValues: PropTypes.func
};

export default LocationForm;
