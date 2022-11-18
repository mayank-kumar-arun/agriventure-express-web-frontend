import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/customTable/customTable";
import {getProducerAllListingss} from "../../services/itemServices";



function producerItems(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/
	const [items, setItems] = useState([]);

	const columns = [
		{ field: "id", headerName: "Crop ID", width: 150 },
		{ field: "cropName", headerName: "Crop name", width: 150 },
		{ field: "fieldLocation", headerName: "District", width: 150 },
		{ field: "fieldCity", headerName: "City", width: 150 },
		{ field: "quantity", headerName: "Quantity", width: 100 },
		{ field: "minBid", headerName: "Minimum bid", width: 100},
		{ field: "edit",
			headerName: "",
			sortable: false,
			filterable: false,
			align: "right",
			headerAlign: "center",
			renderCell: (params) => (
				<Link to={`${params.id}`} style={{ textDecoration: "none" }}>
					<Button
						color={"primary"}
						disableFocusRipple={true}
						variant="outlined"
						size="small"
						style={{ marginLeft: 10 }}
						tabIndex={params.hasFocus ? 0 : -1}
					>Open</Button>
				</Link>
			)
		}
		// { field: "Delete",
		// 	headerName: "",
		// 	sortable: false,
		// 	filterable: false,
		// 	align: "right",
		// 	headerAlign: "center",
		// 	renderCell: (params) => (
		// 		<Link to={`${params.id}`} style={{ textDecoration: "none" }}>
		// 			<Button
		// 				color={"primary"}
		// 				disableFocusRipple={true}
		// 				variant="outlined"
		// 				size="small"
		// 				style={{ marginLeft: 10 }}
		// 				tabIndex={params.hasFocus ? 0 : -1}
		// 			>Delete</Button>
		// 		</Link>
		// 	)
		// }

	];

	useEffect(()=> {
		async function getItemData() {
			// eslint-disable-next-line no-undef
			const itemData = await getProducerAllListingss();
			setItems(itemData.data);

		}
		getItemData();
	},[]);


	const itemList = items.map((itemData) => {
		return {id:itemData._id, cropName:itemData.name, fieldLocation:itemData.location.district, fieldCity:itemData.location.city, quantity:itemData.quantity, minBid:itemData.minimum_bid};});

	return(

		<CustomTable rows = {itemList} columns = {columns} enableCheckBox={false}/>

	);
}

export default producerItems;
