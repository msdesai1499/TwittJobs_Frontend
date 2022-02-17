import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormControl from '@mui/material/FormControl';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts'; import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActive';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUpload';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import axios from "axios";
import base_url from "../api/bootapi";

const drawerWidth = 300;


var fname = "";
var lname = "";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const steps = ['Enter Personal Details', 'Enter Contact Details', 'Enter Address'];

export default function UserHome() {

	const [userData, setUserData] = useState({ fname: "", lname: "", mobno: "" });
	useEffect(() => {
		console.log(document.cookie);
		let id = document.cookie;
		axios.get(`${base_url}/user/${id}`).then(
			(response) => {
				console.log(response);
				let frname = response.data['firstName'];
				let lrname = response.data['lastName'];
				let mobile = response.data['mobNo']
				console.log(fname + lname);
				setUserData({ ...userData, fname: frname, lname: lrname, mobno: mobile })

			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)
	}, []);


	const [open1, setOpen1] = React.useState(true);

	const handleClick = () => {
		setOpen1(!open1);
	};

	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const [open2, setOpen2] = React.useState(true);

	const handleClick1 = () => {
		setOpen2(!open2);
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const [UserProfile, setUserProfile] = useState({});

	const [UserContact, setUserContact] = useState({});

	const [UserAddress, setUserAddress] = useState({ id: document.cookie });
	// const [UserContact, setUserContact] = useState({});

	const handleNext = () => {

		console.log("Hello");
		// console.log(UserProfile);
		console.log(UserAddress);

		// Family Information Stored Successfully

		axios.post(`${base_url}/client/familyInfo`, UserProfile).then(
			(response) => {
				console.log(response);
				console.log("User added Successfully");
			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)
		axios.post(`${base_url}/client/contactInfo`, UserContact).then(
			(response) => {
				console.log(response);
				console.log("Contact added Successfully");
			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)

		axios.post(`${base_url}/client/addressInfo`, UserAddress).then(
			(response) => {
				console.log(response);
				console.log(response.data);
			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)


		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};



	const handleReset = () => {
		setActiveStep(0);
	};

	const renderStep = (step) => {

		switch (step) {
			case 0:
				return (



					<div className='container'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<PersonIcon />
							</Avatar>

						</div>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Typography component="h1" variant="h5">
								Enter your personal details
							</Typography>
						</div>
						<Grid container rowSpacing={0} columnSpacing={4} >
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="post"
									label="Enter your Current Post"
									name="post"
									value=""
									autoFocus
								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Prefix</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Prefix"
									>
										<MenuItem value={"Mr"}>Mr</MenuItem>
										<MenuItem value={"Mrs"}>Mrs</MenuItem>
										<MenuItem value={"Miss"}>Miss</MenuItem>
										<MenuItem value={"Mx"}>Mx</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}>
								<TextField
									type="file"
									margin="normal"
									fullWidth
									id="post"
									label="Upload your Photo"
									name="post"
									InputLabelProps={{
										shrink: true,
									}}

								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									required
									id="fname"
									label="Enter your First Name"
									name="fname"
									value={userData.fname}

								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="mname"
									required
									label="Enter your Middle Name"
									name="mname"

								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="lname"
									required
									label="Enter your last Name"
									name="lname"
									value={userData.lname}

								/>
							</Grid>

							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="offname"
									required
									label="Enter your Official Name"
									name="offname"
									onChange={(e) => {

										setUserProfile({ ...UserProfile, id: document.cookie })
									}}

								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="fathername"
									required
									label="Enter your Father Name"
									name="fathername"
									onChange={(e) => {

										setUserProfile({ ...UserProfile, fatherName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="mothername"
									required
									label="Enter your Mother Name"
									name="mothername"
									onChange={(e) => {
										setUserProfile({ ...UserProfile, motherName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Marital Status *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Marital Status"
										required

										onChange={(e) => {
											setUserProfile({ ...UserProfile, maritalStatus: e.target.value })
										}}
									>
										<MenuItem value={"Single"}>Single</MenuItem>
										<MenuItem value={"Widowed"}>Widowed</MenuItem>
										<MenuItem value={"Seperated"}>Seperated</MenuItem>
										<MenuItem value={"Married"}>Married</MenuItem>
										<MenuItem value={"Divorced"}>Divorced</MenuItem>

									</Select>

								</FormControl>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="spousename"
									label="Enter your Spouse Name"
									name="spousename"
									onChange={(e) => {
										setUserProfile({ ...UserProfile, spouseName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									id="wardname"
									label="Enter your Ward Name"
									name="wardname"

								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Gender *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Gender"
										required

										onChange={(e) => {
											setUserProfile({ ...UserProfile, gender: e.target.value })
										}}
									>
										<MenuItem value={"Male"}>Male</MenuItem>
										<MenuItem value={"Female"}>Female</MenuItem>

									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Is physically handicapped *</InputLabel>
									<Select
										fullWidth
										id="category"
										label="Is physically handicapped"
										required
										onChange={(e) => {
											setUserProfile({ ...UserProfile, physicallyHandicapped: false })
										}}
									>
										<MenuItem value={"Yes"}>Yes</MenuItem>
										<MenuItem value={"No"}>No</MenuItem>

									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									type='date'
									fullWidth
									id="dob"
									label="Date of Birth"
									name="dob"
									required
									InputLabelProps={{
										shrink: true,
									}}



									onChange={(e) => {
										setUserProfile({ ...UserProfile, dateOfBirth: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									type='text'
									fullWidth
									id="birth_place"
									label="Place of Birth"
									name="dob"
									onChange={(e) => {
										setUserProfile({ ...UserProfile, placeOfBirth: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Nationality</InputLabel>
									<Select
										fullWidth
										id="category"
										label="Nationality"
										required
										onChange={(e) => {
											setUserProfile({ ...UserProfile, nationality: e.target.value })
										}}
									>
										<MenuItem value={"Indian"}>Indian</MenuItem>
										<MenuItem value={"NRA"}>NRA</MenuItem>

									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Religion</InputLabel>
									<Select
										fullWidth
										id="category"
										label="Religion"
										onChange={(e) => {
											setUserProfile({ ...UserProfile, religion: e.target.value })
										}}
									>
										<MenuItem value={"African Traditional"}>African Traditional</MenuItem>
										<MenuItem value={"Agnostic"}>Agnostic</MenuItem>
										<MenuItem value={"Bahai"}>Bahai</MenuItem>
										<MenuItem value={"Buddhism"}>Buddhism</MenuItem>
										<MenuItem value={"Cao Dai"}>Cao Dai</MenuItem>
										<MenuItem value={"Chinese traditional"}>Chinese traditional</MenuItem>
										<MenuItem value={"Christanity"}>Christanity</MenuItem>
										<MenuItem value={"Hinduism"}>Hinduism</MenuItem>
										<MenuItem value={"Islam"}>Islam</MenuItem>
										<MenuItem value={"Jainism"}>Jainism</MenuItem>
										<MenuItem value={"Judaism"}>Judaism</MenuItem>
										<MenuItem value={"Juche"}>Juche</MenuItem>
										<MenuItem value={"Non-Religious"}>Non-Religious</MenuItem>
										<MenuItem value={"Neo-Paginism"}>Neo-Pagnisim</MenuItem>
										<MenuItem value={"Rastafarianism"}>Rastafarianism</MenuItem>
										<MenuItem value={"Secular"}>Secular</MenuItem>
										<MenuItem value={"Shinto"}>Shinto</MenuItem>
										<MenuItem value={"Sikhism"}>Sikhism</MenuItem>
										<MenuItem value={"Spiritism"}>Spiritism</MenuItem>
										<MenuItem value={"Tenrikyo"}>Tenrikyo</MenuItem>
										<MenuItem value={"Buddhism"}>Buddhism</MenuItem>
										<MenuItem value={"Unitarium-Universalist"}>Unitarium-Universalist</MenuItem>
										<MenuItem value={"Zoroastrianism"}>Zoroastrianism</MenuItem>
										<MenuItem value={"Primal-indigenous"}>Primal-indigenous</MenuItem>
										<MenuItem value={"Other"}>Other</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Category</InputLabel>
									<Select
										fullWidth
										id="category"
										label="category"
										onChange={(e) => {
											setUserProfile({ ...UserProfile, category: e.target.value })
										}}

									>
										<MenuItem value={"OPEN"}>OPEN</MenuItem>
										<MenuItem value={"SC"}>SC</MenuItem>
										<MenuItem value={"ST"}>ST</MenuItem>
										<MenuItem value={"NT"}>NT</MenuItem>
										<MenuItem value={"OBC"}>OBC</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									type='text'
									fullWidth
									id="caste"
									label="Caste"
									name="caste"
									onChange={(e) => {
										setUserProfile({ ...UserProfile, caste: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4} >
								<TextField
									margin="normal"
									type='text'
									fullWidth
									id="subcaste"
									label="Sub-Caste"
									name="subcaste"
									onChange={(e) => {
										setUserProfile({ ...UserProfile, subCaste: e.target.value })
									}}
								/>
							</Grid>
						</Grid>
					</div>
				);
			case 1:
				return (
					<div className='container'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<ContactsIcon />
							</Avatar>

						</div>
						<div style={{ display: 'flex', justifyContent: 'center', padding: "1rem" }}>
							<Typography component="h1" variant="h5">
								Enter your Contact details
							</Typography>
						</div>
						<Grid container rowSpacing={0} columnSpacing={4} >
							<Grid item xs={4} >
								<TextField
									margin="normal"
									fullWidth
									required
									id="mobno"
									label="Enter your Mobile Number"
									name="mobno"
									value={userData.mobno}
									autoFocus
									onFocus={(e) => {

										setUserContact({ ...UserContact, mobNo: e.target.value })
									}}

								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="amob"
									label="Enter your Alternate Mobile number"
									name="amob"
									onChange={(e) => {

										setUserContact({ ...UserContact, altMobNo: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="rmob"
									label="Enter your Residential phone number"
									name="rmob"
									onChange={(e) => {

										setUserContact({ ...UserContact, residentialPhone: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="fax"
									label="Enter your Fax number"
									name="fax"


									onChange={(e) => {

										setUserContact({ ...UserContact, faxNo: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="lnumber"
									label="Enter your Landline number"
									name="lnumber"

									onChange={(e) => {

										setUserContact({ ...UserContact, id: document.cookie })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									type="email"
									id="i_email"
									label="Enter your Insititute email address"
									name="i_email"

								/>
							</Grid>
						</Grid>
					</div>
				);
			case 2:
				return (
					<div className='container'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<HomeIcon />
							</Avatar>

						</div>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Typography component="h1" variant="h5">
								Enter your Address
							</Typography>
						</div>
						<div style={{ paddingTop: "1rem" }}>
							<Typography component="h1" variant="h6">
								Correspondence Address
							</Typography>
						</div>
						<Divider />
						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="add1"
									label="Address Line 1"
									name="add1"
									required
									autoFocus
									onChange={(e) => {

										setUserAddress({ ...UserAddress, address: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="add2"
									label="Address Line 2"
									name="add2"
								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Country *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Country *"
										required

										onChange={(e) => {

											setUserAddress({ ...UserAddress, country: e.target.value })
										}}
									>
										<MenuItem value={"India"}>India</MenuItem>
										<MenuItem value={"Japan"}>Japan</MenuItem>
										<MenuItem value={"Germany"}>Germany</MenuItem>
										<MenuItem value={"America"}>America</MenuItem>
										<MenuItem value={"Australia"}>Australia</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>State *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="State *"
										required
										onChange={(e) => {

											setUserAddress({ ...UserAddress, state: e.target.value })
										}}
									>
										<MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
										<MenuItem value={"Karnataka"}>Karnataka</MenuItem>
										<MenuItem value={"Delhi"}>Delhi</MenuItem>
										<MenuItem value={"Gujrat"}>Gujrat</MenuItem>
										<MenuItem value={"Telangana"}>Telangana</MenuItem>
										<MenuItem value={"Tamilnadu"}>Tamilnadu</MenuItem>
										<MenuItem value={"West Bengal"}>West Bengal</MenuItem>
										<MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
										<MenuItem value={"Uttarpradesh"}>Uttarpradesh</MenuItem>
										<MenuItem value={"Bihar"}>Bihar</MenuItem>
										<MenuItem value={"Madhyapradesh"}>Madhyapradesh</MenuItem>
										<MenuItem value={"Andhrapradesh"}>Andhrapradesh</MenuItem>
										<MenuItem value={"Punjab"}>Punjab</MenuItem>
										<MenuItem value={"Haryana"}>Haryana</MenuItem>
										<MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
										<MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
										<MenuItem value={"Chattisgarh"}>Chattisgarh</MenuItem>
										<MenuItem value={"Assam"}>Assam</MenuItem>
										<MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
										<MenuItem value={"Odisha"}>Odisha</MenuItem>
										<MenuItem value={"Kerala"}>Kerala</MenuItem>
										<MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
										<MenuItem value={"Puducherry"}>Puducherry</MenuItem>
										<MenuItem value={"Tripura"}>Tripura</MenuItem>
										<MenuItem value={"Mizoram"}>Mizoram</MenuItem>
										<MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
										<MenuItem value={"Manipur"}>Manipur</MenuItem>
										<MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
										<MenuItem value={"Nagaland"}>Nagaland</MenuItem>
										<MenuItem value={"Goa"}>Goa</MenuItem>
										<MenuItem value={"Andhaman and Nicobar islands"}>Andhaman and Nicobar islands</MenuItem>
										<MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
										<MenuItem value={"Dadra and Nagar Havelli"}>Dadar and Nagar Havelli</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="district"
									label="District"
									name="district"
									required
									onChange={(e) => {

										setUserAddress({ ...UserAddress, district: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="taluka"
									label="Taluka"
									name="taluka"
									required
									onChange={(e) => {

										setUserAddress({ ...UserAddress, taluka: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="city"
									label="City"
									name="city"
									required
									onChange={(e) => {

										setUserAddress({ ...UserAddress, city: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="pincode"
									label="Pincode"
									name="pincode"
									required
									onChange={(e) => {

										setUserAddress({ ...UserAddress, pincode: e.target.value })
									}}
								/>
							</Grid>
						</Grid>



						<div style={{ paddingTop: "2rem" }}>
							<Typography component="h1" variant="h6">
								Permanent Address
							</Typography>
						</div>
						<Divider />
						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="add1"
									label="Address Line 1"
									name="add1"
									required

									onChange={(e) => {

										setUserAddress({ ...UserAddress, permanentAddress: "true" })
									}}

								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="add2"
									label="Address Line 2"
									name="add2"
								/>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Country *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Country *"
										required
									>
										<MenuItem value={"India"}>India</MenuItem>
										<MenuItem value={"Japan"}>Japan</MenuItem>
										<MenuItem value={"Germany"}>Germany</MenuItem>
										<MenuItem value={"America"}>America</MenuItem>
										<MenuItem value={"Australia"}>Australia</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}  >
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>State *</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="State *"
										required
									>
										<MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
										<MenuItem value={"Karnataka"}>Karnataka</MenuItem>
										<MenuItem value={"Delhi"}>Delhi</MenuItem>
										<MenuItem value={"Gujrat"}>Gujrat</MenuItem>
										<MenuItem value={"Telangana"}>Telangana</MenuItem>
										<MenuItem value={"Tamilnadu"}>Tamilnadu</MenuItem>
										<MenuItem value={"West Bengal"}>West Bengal</MenuItem>
										<MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
										<MenuItem value={"Uttarpradesh"}>Uttarpradesh</MenuItem>
										<MenuItem value={"Bihar"}>Bihar</MenuItem>
										<MenuItem value={"Madhyapradesh"}>Madhyapradesh</MenuItem>
										<MenuItem value={"Andhrapradesh"}>Andhrapradesh</MenuItem>
										<MenuItem value={"Punjab"}>Punjab</MenuItem>
										<MenuItem value={"Haryana"}>Haryana</MenuItem>
										<MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
										<MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
										<MenuItem value={"Chattisgarh"}>Chattisgarh</MenuItem>
										<MenuItem value={"Assam"}>Assam</MenuItem>
										<MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
										<MenuItem value={"Odisha"}>Odisha</MenuItem>
										<MenuItem value={"Kerala"}>Kerala</MenuItem>
										<MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
										<MenuItem value={"Puducherry"}>Puducherry</MenuItem>
										<MenuItem value={"Tripura"}>Tripura</MenuItem>
										<MenuItem value={"Mizoram"}>Mizoram</MenuItem>
										<MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
										<MenuItem value={"Manipur"}>Manipur</MenuItem>
										<MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
										<MenuItem value={"Nagaland"}>Nagaland</MenuItem>
										<MenuItem value={"Goa"}>Goa</MenuItem>
										<MenuItem value={"Andhaman and Nicobar islands"}>Andhaman and Nicobar islands</MenuItem>
										<MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
										<MenuItem value={"Dadra and Nagar Havelli"}>Dadar and Nagar Havelli</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="district"
									label="District"
									name="district"
									required
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="taluka"
									label="Taluka"
									name="taluka"
									required
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="city"
									label="City"
									name="city"
									required
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="pincode"
									label="Pincode"
									name="pincode"
									required
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="philosophy"
									label="Teaching Philosophy"
									name="philosophy"
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="tools"
									label="ICT Used Tools"
									name="tools"
								/>
							</Grid>
						</Grid>
					</div>
				);


			default:
				return null;
		}
	};

	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Twittjobs
					</Typography>
					<Button color="inherit">Home</Button>
					<Button color="inherit">About Us</Button>
					<Button color="inherit">Contact Us</Button>
					<Button color="inherit">Dashboard</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader style={{ backgroundColor: '#1976d3' }}>
					<ListItemButton>
						<ListItemIcon>
							<AccountCircleIcon fontSize="large" style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Profile" style={{ color: "white" }} />
					</ListItemButton>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: "white" }} /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>

				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}

					aria-labelledby="nested-list-subheader"
				>
					<ListItemButton>
						<ListItemIcon>
							<SpeedIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemButton>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<PersonIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="User Section" />
						{open1 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open1} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon component="a" href="/userpreference">
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Preference Selection" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Personal Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/usereducation">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Educational Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/useremployment">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Employment Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userportfolio">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Portfolio" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/usersalary">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Salary Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/usermedical">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Medical Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userresearchinfo">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Research Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userachievement">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Achievement & Awards" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/usercertification">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Certification Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userdocument">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Document Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userresearchpaper">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Research Paper Details" />
							</ListItemButton>
						</List>
					</Collapse>
					<ListItemButton >
						<ListItemIcon>
							<CloudUploadOutlinedIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Upload Resume" />
					</ListItemButton>
					<ListItemButton component="a" href="/usernotification">
						<ListItemIcon>
							<NotificationsActiveOutlinedIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Notifications" />
					</ListItemButton>

					<ListItemButton onClick={handleClick1}>
						<ListItemIcon>
							<SettingsIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Settings" />
						{open2 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open2} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton component="a" href="/userchangepassword">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="medium" />
								</ListItemIcon>
								<ListItemText primary="Change Password" />
							</ListItemButton>
							<ListItemButton component="a" href="/useractivatedplan" >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="medium" />
								</ListItemIcon>
								<ListItemText primary="Activated Plans" />
							</ListItemButton>
						</List>
					</Collapse>

				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div >
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};




							if (isStepSkipped(index)) {
								stepProps.completed = false;
							}
							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>

					{activeStep === steps.length ? (
						<React.Fragment>
							<Typography sx={{ mt: 2, mb: 1 }}>
								All steps completed - you&apos;re finished
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleReset}>Reset</Button>
							</Box>
						</React.Fragment>
					) : (
						<React.Fragment>
							<div className='wrapper' style={{ paddingTop: '2rem' }}>
								{renderStep(activeStep)}
							</div>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button
									color="inherit"
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
								>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />






								<Button onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</div>
			</Main>
		</Box>
	);
}
