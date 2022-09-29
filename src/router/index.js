import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Profile from "../pages/profile/profile";
import EditProfile from "../pages/editProfile/editProfile";
import HelpCenter from "../pages/helpCenter/helpCenter";
import OrderView from "../pages/orderView/orderView";
import ErrorPage from "../pages/notFound";
import AgriDataEntry from "../pages/agriDataEntry/agriDataEntry";
import ProducerDashboard from "../pages/producerDashboard/producerDashboard";
import Marketplace from "../pages/marketplace/marketplace";
import RefundRequests from "../pages/refundRequests/refundRequests";
import RefundRequestBuyer from "../pages/refundRequestBuyer/refundRequestBuyer";
import SupportRequests from "../pages/supportRequest/supportRequests";
import MySupport from "../pages/supportRequestsBuyer/mySupport";
import AddProducers from "../pages/addProducer/addProducers";
import ManageProducers from "../pages/managePruducers/manageProducers";
import ManageAccounts from "../pages/manageAccounts/manageAccounts";
import ItemView from "../pages/itemView/itemView";
import BuyMenu from "../pages/buyMenue/buyMenu";
import AddItem from "../pages/addItem/addItem";
import AgriDataManage from "../pages/agriDataManage/agriDataManage";
import MyProfile from "../pages/profile/myProfile";
import EditMyProfileForm from "../pages/editProfile/editProfileForm/editMyProfileForm";

/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
* */

function AppRouter(){

	// eslint-disable-next-line no-undef
	let type = 3;


	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard />} ></Route>
					<Route path = "/login" element={<Login />}></Route>
					<Route path = "/signup" element={<Signup />}></Route>
					<Route path = "*" element={<ErrorPage/>}></Route>

					{type === 0 ? (
						<Route path = "/producer" >
							<Route index element={<ProducerDashboard />}/>
							<Route path = "add-item" element={<AddItem />}></Route>
							<Route path = "orders" >
								<Route index element={<Orders/>} ></Route>
								<Route path = ":id" element={<OrderView/>} ></Route>
							</Route>
							<Route path = "helpcenter" element={<HelpCenter />}></Route>
							<Route path ="mySupport" element={<MySupport />}></Route>
							<Route path = "myProfile">
								<Route index element={<MyProfile />}></Route>
								<Route exact path = "edit" element={<EditMyProfileForm />}></Route>
							</Route>
							<Route path ="refund" element={<RefundRequests />}></Route>
						</Route>
					): type === 1 ? (
						<Route path = "/buyer">
							<Route path = "marketplace" >
								<Route index element={<Marketplace />} ></Route>
								<Route path = ":itemId" element={<ItemView/>} ></Route>
							</Route>
							<Route path = "buy-menu" >
								<Route index element={<BuyMenu/>} ></Route>
								<Route path = ":id" element={<OrderView/>} ></Route>
							</Route>
							<Route path = "myProfile">
								<Route index element={<MyProfile />}></Route>
								<Route exact path = "edit" element={<EditMyProfileForm />}></Route>
							</Route>
							<Route path ="orderView" element={<OrderView />}></Route>
							<Route path ="myrefund" element={<RefundRequestBuyer />}></Route>
						</Route>


					): type === 3 ?(

						<Route path = "/officer" >
							<Route index element={<ManageProducers />}></Route>
							<Route path ="addProducer" element={<AddProducers />}></Route>
							<Route path ="supportManagement" element={<SupportRequests />}></Route>
							<Route exact path = "profile/edit/:user_id" element={<EditProfile />}></Route>
							<Route path = "profile/:user_id" element={<Profile/>}></Route>
							<Route path = "agriDataManage">
								<Route index element={<AgriDataManage />}></Route>
								<Route path = "agridataentry" element={<AgriDataEntry />}></Route>
							</Route>
							<Route path ="orderView" element={<OrderView />}></Route>
						</Route>

					):type === 4 ?(
						<Route path = "/admin">
							<Route index element={<ManageAccounts />}></Route>
						</Route>
					):(
						<Route path = "*" element={<ErrorPage/>}></Route>
					)}
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
