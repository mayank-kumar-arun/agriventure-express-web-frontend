import React, {useEffect, useState} from "react";
import {
	Alert,
	Breadcrumbs,
	Dialog, DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	Paper,
	Stack,
	Typography
} from "@mui/material";
import ItemDetailsForm from "./itemDetailsForm";
import SetBiddingCard from "./setBiddingCard";
import Container from "@mui/material/Container";
import ImageForm from "./imageForm";
import LocationForm from "./locationDetailForm";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import WarningIcon from "@mui/icons-material/Warning";
import moment from "moment";
import {producerAddListing} from "../../services/itemServices";
// eslint-disable-next-line no-unused-vars
import Divider from "@mui/material/Divider";
import authService from "../../services/auth.service";
import {LoadingButton} from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function AddItem(){
	const [Error, setError] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [serverResult, setServerResult] = useState({error: false, text: null});
	const [postLoading, setPostLoading] = useState(false);
	const [postResult, setPostResult] = useState(false);
	const [open, setOpen] = useState(false);

	const initialTime = moment();

	const [cropType, setCropType] = useState("");
	const [quantity, setQuantity] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [minimumBid, setMinimumBid] = useState("");
	const [minimumBidStep, setMinimumBidStep] = useState("");
	const [endTime, setEndTime] = useState(initialTime);

	const [district, setDistrict] = useState("");
	const [city, setCity] = useState("");
	const [location, setLocation] = useState({lat: "x", lng: "x"});

	const [images, setImages] = useState([]);

	useEffect(()=>{
		validateData();
	},[
		title,
		cropType,
		quantity,
		minimumBid,
		minimumBidStep,
		district,
		city,
		images,
		endTime
	]);

	const handleClickOpen = () => {
		if(Error == false){
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
		setServerResult({error: false, text: null});
		setPostResult(false);

	};
	const handleExit = () => {
		window.location.assign("/producer");
	};

	function validateData(){
		if(title === "" && cropType === "" && quantity === "" && minimumBid === "" && endTime.unix() === initialTime.unix() && district === "" && city === "" && images.length <=0 ){
			setError("Multiple Empty Fields");
			return false;
		}
		else if(title === "" ||cropType === "" || quantity === ""|| quantity < 1){
			setError("Invalid Item Details");
			return false;
		}else if(minimumBid === "" ||minimumBid <100 || endTime.unix() < initialTime.unix()+7200 ){
			setError("Invalid Bidding Setup");
			return false;
		}else if(district === "" || city === "" ){
			setError("Invalid Location Details");
			return false;
		}else if(images.length <=0 ){
			setError("At least One image is required");
			return false;
		}
		setError(false);
		return true;
	}

	const breadcrumbs = [
		<Link to={"/producer"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MY DASHBOARD
		</Link>,
		<Typography key="3" color="primary">
			ADD ITEM
		</Typography>,
	];

	async function onConfirm(){
		setPostLoading(true);
		const valid = validateData();
		if(valid){
			const data = {
				producer: authService.getCurrentUserId(),
				name: title,
				crop: cropType,
				images: images,
				description: description,
				quantity: quantity,
				location:{
					latitude:location.lat,
					longitude:location.lng,
					city:city,
					district:district.name
				},
				minimum_bid: minimumBid,
				minimum_bid_step:minimumBidStep,
				bid_end_time: endTime
			};

			let result = serverResult;
			try {
				result = await producerAddListing(data);
			}catch (e){
				result = {error: true, text: "Error: File too large"};
				setPostLoading(false);
				setPostResult(true);
				setServerResult(result);
				return;
			}
			setServerResult({error: result.data.Error, text: result.data.DisplayText});
			setPostResult(true);
			setPostLoading(false);

		}
		// setOpen(false);
	}

	const listingConfirmPopup = ()=>{
		return(
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{serverResult.error?"Error":"Confirm Bid Amount ?"}
				</DialogTitle>
				{postResult?
					serverResult.error==false?
						(<DialogContent>
							<Stack direction="row" alignItems="center" gap={1}>
								<CheckCircleIcon color={"success"}/>
								<DialogContentText id="alert-dialog-description">
									{serverResult.text}
								</DialogContentText>
							</Stack>
						</DialogContent>):
						(<DialogContent>
							<Stack direction="row" alignItems="center" gap={1}>
								<CancelIcon color={"error"}/>
								<DialogContentText id="alert-dialog-description">
									{serverResult.text}
								</DialogContentText>
							</Stack>
						</DialogContent>):
					(
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
						You are about to Add a Listing under the user {"<Add User name Here>"}
							</DialogContentText>
							<Divider sx={{marginTop: "30px", marginBottom: "10px"}}>Listing Details</Divider>
							<DialogContentText id="alert-dialog-description">
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Listing Title - {title}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Crop Type - {cropType}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Total quantity of - {quantity}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Description - {description.length > 40 ? description.slice(0, 40) + "..." : description}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Minimum Bidding Price - {
									Intl.NumberFormat("en", {style: "currency", currency: "LKR"}).format(minimumBid)
								} with steps of {Intl.NumberFormat("en").format(minimumBidStep)}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						Bid End TIme - {endTime.format()}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						District - {district.name}
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
						City - {city}
							</DialogContentText>
							{
								location.lat === "x" ?
									(<DialogContentText id="alert-dialog-description">
								Location - NOT SET
									</DialogContentText>) :
									(<DialogContentText id="alert-dialog-description">
								Location - lat: {location.lat} lng: {location.lng}
									</DialogContentText>)
							}
							<DialogContentText id="alert-dialog-description">
						Number of Images Uploaded - {images.length}
							</DialogContentText>
						</DialogContent>)}
				{postResult?
					serverResult.error==false?(
						<DialogActions>
							<Button onClick={handleExit} variant={"contained"} sx={{color:"white"}}>Complete</Button>
						</DialogActions>):
						(
							<DialogActions>
								<Button onClick={handleExit} variant={"contained"} color={"error"}>Discard</Button>
								<Button onClick={handleClose} variant={"contained"} color={"warning"}>Retry</Button>
							</DialogActions>):
					(<DialogActions>
						<Button onClick={handleClose} variant={"contained"} sx={{color:"white"}}>Discard</Button>
						<LoadingButton
							onClick={onConfirm}
							loading={postLoading}
							loadingIndicator="Loading…"
							variant="contained"
							color={"error"}
						>
								Confirm
						</LoadingButton>
					</DialogActions>)}
			</Dialog>
		);
	};

	return(
		<Container>
			<Grid container spacing={3} p={5} maxWidth={1600}>
				<Grid item md={12} maxHeight={50}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						{breadcrumbs}
					</Breadcrumbs>
				</Grid>
				{Error!=false?(
					<Grid item xs={12}>
						<Alert severity="warning">{Error}</Alert>
					</Grid> ):
					null
				}

				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<ItemDetailsForm
							title={title}
							cropType={cropType}
							quantity={quantity}
							description={description}
							setTitle={setTitle}
							setCropType={setCropType}
							setQuantity={setQuantity}
							setDescription={setDescription}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<SetBiddingCard
							setMinimumBid={setMinimumBid}
							setMinimumBidStep={setMinimumBidStep}
							setBidEndTime={setEndTime}
							minimumBid={minimumBid}
							minimumBidStep={minimumBidStep}
							bidEndTime={endTime}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<LocationForm
							setDistrict={setDistrict}
							setCity={setCity}
							setLocation={setLocation}
							district={district}
							city={city}
							location={location}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4} sx={{width:"100%"}}>
						<ImageForm
							images={images}
							setImages={setImages}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} minHeight={200} container>
					<Paper elevation={4} sx={{width:"100%"}}>
						<Grid container>
							<Grid item container xs={12} mb={3}>
								<Grid item container xs={12}>
									<Grid item xs={12} container justifyContent={"center"} m={3}>
										<Grid item xs={12}>
											<Typography variant={"h5"} align={"left"}>
												Actions
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
										<Grid item container xs={12} mt={3} justifyContent={"center"} spacing={3}>
											{Error!=false?(
												<Grid item xs={12}>
													<Alert severity="warning">{Error}</Alert>
												</Grid> ):
												(<Grid item xs={12}>
													<Stack direction="row" alignItems="center" gap={1} p={3}>
														<WarningIcon color={"warning"}/>
														<Typography textAlign={"left"} variant={"body1"}>Please verify all details before confirming. You cannot undo this action</Typography>
													</Stack>
												</Grid>)
											}
											<Grid item>
												<Button variant={"contained"} color={"warning"} onClick={handleExit} >Discard</Button>
											</Grid>
											<Grid item>
												<Button variant={"contained"} color={"error"} onClick={handleClickOpen} disabled={Error!=false?true:false}>Confirm</Button>
											</Grid>
										</Grid>
									</Grid>

								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				{listingConfirmPopup()}
			</Grid>
		</Container>
	);
}

export default AddItem;
