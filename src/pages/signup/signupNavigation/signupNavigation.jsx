import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserType from "../userType/userType";
import {Alert, CircularProgress, Grid} from "@mui/material";
import ProducerDetails from "../producerDetails/producerDetails";
import BuyerDetails from "../buyerDetails/buyerDetails";
import LoginDetails from "../loginDetails/loginDetails";
import Finish from "../finish/finish";
import Axios from "axios";


function SignupNavigation() {

	const [userType, setUserType] = useState();
	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [email,setEmail] = useState();
	const [telephoneNumber,setTelephoneNumber] = useState();
	const [nic,setNic] = useState();
	const [address,setAddress] = useState();
	const [fieldLocation,setFieldLocation] = useState();
	const [cropTypes,setCropTypes] = useState([]);
	const [error,setError] = useState();
	const [isErrorHidden,setErrorHidden] = useState(true);
	const [username,setUsername] = useState();
	const [password,setPassword] = useState();
	const [confirmPassword,setConfirmPassword] = useState();
	const [success,setSuccess] = useState(false);
	const [fail,setFail] = useState(false);
	const [cropList,setCropList] = useState([]);
	const [locationList,setLocationList] = useState([]);
	const [isLoading,setIsLoading] = useState(true);
	const [userNames,setUsernames] = useState([]);

	const [activeStep, setActiveStep] = React.useState(0);
	const steps = ["User Type", "User Details", "Login Details", "Finish"];

	useEffect(()=>{
		async function getCropList(){
			// eslint-disable-next-line no-undef
			const crops = await Axios.get(`${process.env.REACT_APP_API_URL}/cropTypes`);
			setCropList(crops.data);
		}
		getCropList();

		async function getLocations(){
			// eslint-disable-next-line no-undef
			const locations = await Axios.get(`${process.env.REACT_APP_API_URL}/locations`);
			setLocationList(locations.data);
		}
		getLocations();

		async function getUserNames(){
			// eslint-disable-next-line no-undef
			const userNames = await Axios.get(`${process.env.REACT_APP_API_URL}/users/getUserNames`);
			setUsernames(userNames.data.map(data => data.userName));
		}
		getUserNames();

		setIsLoading(false);
	},[]);

	function validateEmail(email)
	{
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
		{
			return (true);
		}
		return (false);
	}

	function validateNonEmpty(text){
		return text !== undefined && text !== "";
	}

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}

	function validatePhoneNumber(num)
	{
		if(/^\d{10}$/.test(num))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	function getLocationName(){
		for(let i = 0; i < locationList.length ; i++){
			if(locationList[i]._id === fieldLocation){
				return locationList[i].name;
			}
		}
		return null;
	}

	function getCropNames(){
		const names = [];
		for(let i = 0; i < cropList.length ; i++){
			if(cropTypes.includes(cropList[i]._id)){
				names.push({name: cropList[i].name});
			}
		}
		return names;
	}

	function validateUsername(){
		if(userNames.includes(username)){
			return false;
		}
		return (username !== undefined && username !== "");
	}

	function validatePassword(){
		return (password === confirmPassword);
	}

	function changeWindow(){
		window.location.assign("/");
	}

	function handleSubmit(){
		/*
		Check and create account or forward account request to the officer.
		output true if success, false if fail
		 */

		if(userType === 0){
			const userReqestBody = {
				userName: username,
				password: password,
				userType: 0,
				isActive: false
			};

			// eslint-disable-next-line no-undef
			Axios.post(`${process.env.REACT_APP_API_URL}/users`, userReqestBody ).then(async (res) => {
				if(!res.data.success){
					alert("Error occured!");
				}else{
					const producerRequestBody = {
						firstName: firstName,
						lastName: lastName,
						email: email,
						address: address,
						nic: nic,
						telNum: telephoneNumber,
						userName: username,
						cropTypes: cropTypes,
						location: fieldLocation,
						login: res.data.user._id
					};
					// eslint-disable-next-line no-undef
					Axios.post(`${process.env.REACT_APP_API_URL}/producers`,producerRequestBody).then(async (res)=>{
						if(!res.data.success){
							alert("Error occured!");
						}else{
							alert(userType + " " + firstName + " " + lastName);
							setSuccess(true);
							setFail(false);
						}
					});
				}
			});

		}else if(userType === 1){
			const userReqestBody = {
				userName: username,
				password: password,
				userType: 1,
				isActive: true
			};

			// eslint-disable-next-line no-undef
			Axios.post(`${process.env.REACT_APP_API_URL}/users`, userReqestBody ).then(async (res) => {
				if(!res.data.success){
					alert("Error occured!");
				}else{
					const buyerRequestBody = {
						firstName: firstName,
						lastName: lastName,
						email: email,
						address: address,
						nic: nic,
						telNum: telephoneNumber,
						userName: username,
						login: res.data.user._id
					};
					// eslint-disable-next-line no-undef
					Axios.post(`${process.env.REACT_APP_API_URL}/buyers`,buyerRequestBody).then(async (res)=>{
						if(!res.data.success){
							alert("Error occured!");
						}else{
							setSuccess(true);
							setFail(false);
						}
					});
				}
			});
		}
	}

	const handleNext = () => {
		if(activeStep === 0){
			if(userType === 0 || userType === 1){
				setActiveStep(activeStep + 1);
				setErrorHidden(true);
			}else{
				setError("Select user type!");
				setErrorHidden(false);
			}
		}else if(activeStep === 1){
			if((userType === 0 && validateNonEmpty(firstName) && validateNonEmpty(lastName) && validateEmail(email)
				&& validatePhoneNumber(telephoneNumber) && validateNonEmpty(nic) && validateNonEmpty(address)
				&& validateNonEmpty(fieldLocation) && validateNonEmptyArray(cropTypes)) ||
				(userType === 1 && validateNonEmpty(firstName) && validateNonEmpty(lastName) && validateEmail(email)
					&& validatePhoneNumber(telephoneNumber) && validateNonEmpty(nic) && validateNonEmpty(address))){
				setActiveStep(activeStep + 1);
				setErrorHidden(true);
			}else if(!validateEmail(email)){
				setError("Enter Correct Email Address!");
				setErrorHidden(false);
			}else if(!validatePhoneNumber(telephoneNumber)){
				setError("Enter Correct Phone Number!");
				setErrorHidden(false);
			}else{
				setError("Fill All Required Field!");
				setErrorHidden(false);
			}
		}else if(activeStep === 2){
			if(!validateNonEmpty(username) || !validateNonEmpty(password)){
				setError("Fill All Required Field!");
				setErrorHidden(false);
			}else if(!validateUsername()){
				setError("Username already in use");
				setErrorHidden(false);
			}else if(password.length < 8){
				setError("Password is too short");
				setErrorHidden(false);
			}else if(!validatePassword()){
				setError("Password and confirm password are not match");
				setErrorHidden(false);
			}else{
				setActiveStep(activeStep + 1);
				setErrorHidden(true);
			}
		}else{
			handleSubmit();
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
		setErrorHidden(true);
		setFail(false);

	};

	function handleUserTypeChange(event){

		if(event.target.name === "userType"){
			setUserType(event.target.value);
		}
	}

	function handleUserDetailsChange(event){
		if(event.target.name === "firstName"){
			setFirstName(event.target.value);
		}else if(event.target.name === "lastName"){
			setLastName(event.target.value);
		}else if(event.target.name === "email"){
			setEmail(event.target.value);
		}else if(event.target.name === "telephone"){
			setTelephoneNumber(event.target.value);
		}else if(event.target.name === "nic"){
			setNic(event.target.value);
		}else if(event.target.name === "address"){
			setAddress(event.target.value);
		}else if(event.target.name === "location"){
			setFieldLocation(event.target.value);
		}else if(event.target.name === "cropTypes"){
			setCropTypes(event.target.value);
		}
	}

	function handleLoginDetailsChange(event){
		if(event.target.name === "username"){
			setUsername(event.target.value);
		}else if(event.target.name === "password"){
			setPassword(event.target.value);
		}else if(event.target.name === "conPassword"){
			setConfirmPassword(event.target.value);
		}
	}

	function getStepContent(step) {
		switch (step){
		case 0:
			return <UserType userType={userType} handleChange={handleUserTypeChange}/>;
		case 1:
			if(userType === 0){
				return <ProducerDetails
					firstName={firstName}
					lastName={lastName}
					email={email}
					telephone={telephoneNumber}
					nic = {nic}
					address={address}
					location = {fieldLocation}
					cropTypes = {cropTypes}
					handleChange={handleUserDetailsChange}
					cropList = {cropList}
					locationList = {locationList}/>;
			}else{
				return <BuyerDetails
					firstName={firstName}
					lastName={lastName}
					email={email}
					telephone={telephoneNumber}
					nic = {nic}
					address={address}
					handleChange={handleUserDetailsChange}/>;
			}
		case 2:
			return <LoginDetails username={username} password={password} conPassword={confirmPassword} handleChange={handleLoginDetailsChange} />;

		case 3:
			return <Finish firstName={firstName} lastName={lastName} email={email} nic={nic} address={address} telephoneNumber={telephoneNumber} location={getLocationName()} cropTypes={getCropNames()} userType={userType} success={success} fail={fail}/> ;
		}



	}

	return (

		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			{isLoading ? (
				<Grid item align="center">
					<CircularProgress />
				</Grid>
			):(
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Typography component="h1" variant="h4" align="center">
						{/* eslint-disable-next-line no-undef */}
							Sign Up
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div hidden={isErrorHidden}>
						<Alert severity="error">{error}</Alert>
					</div>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
										Thank you for your order.
								</Typography>
								<Typography variant="subtitle1">
										Your order number is #2001539. We have emailed your order
										confirmation, and will send you an update when your order has
										shipped.
								</Typography>
							</React.Fragment>
						) : (

							<div>
								{getStepContent(activeStep)}
								<div hidden={success}>
									<React.Fragment>
										<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
											{activeStep !== 0 && (
												<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
														Back
												</Button>
											)}

											<Button
												variant="contained"
												onClick={handleNext}
												sx={{ mt: 3, ml: 1 }}
											>
												{activeStep === steps.length - 1 ? "Submit Details" : "Next"}
											</Button>
										</Box>
									</React.Fragment>
								</div>

								<div hidden={!success}>
									<React.Fragment>
										<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
											<Button onClick={changeWindow} sx={{ mt: 3, ml: 1 }}>
													Back To Dashboard
											</Button>
										</Box>
									</React.Fragment>
								</div>
							</div>


						)}
					</React.Fragment>
				</Paper>
			)}
		</Container>


	);
}

export default SignupNavigation;
