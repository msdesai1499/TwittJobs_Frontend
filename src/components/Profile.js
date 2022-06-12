import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormControl from '@mui/material/FormControl';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
import SchoolIcon from '@mui/icons-material/School';
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ArticleIcon from '@mui/icons-material/Article';
import InputAdornment from '@material-ui/core';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
Modal.setAppElement('#root');


const drawerWidth = 300;



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



const useStyles = makeStyles(() => ({
	noBorder: {
		border: "none",
	},
}));

const App1 = (props) => {
	const { onChange, type } = props;
	const classes = useStyles();
}


export default function Profile() {



	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [DeleteUserData, setDeleteUserData] = useState({ id: 1 });
	let userData;

	const getUserIdfromUserName = () => {

		let url_loc = window.location.href
		const myarray = url_loc.split("/");
		const lastele = myarray.slice(-1);
		axios.get(`${base_url}/getUserId`, { params: { username: lastele[0] } }).then(
			(response) => {
				//For Success
				console.log(response.data)
				userData = {
					userId: response.data
				}
				getAllEducationFromServer();
				getAllEmploymentFromServer();
				getAllResearchInfoFromServer();

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
				return error;
			});

	};



	useEffect(() => {
		getUserIdfromUserName()
	}, []);


	const [banks1, setBanks1] = useState([])

	const getAllEducationFromServer = () => {
		axios.post(`${base_url}/client/educationsDetails`, userData).then(
			(response) => {
				//For Success
				console.log(response.data)
				setBanks1(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				// toast.error("Something went wrong");
			}
		);
	};


	const checkOrgName1 = (name) => {
		if (name === DeleteUserData.qualificationLevel) {
			const loginFormData = new FormData();
			loginFormData.append("id", DeleteUserData.id)
			loginFormData.append("qualificationLevel", DeleteUserData.qualificationLevel)
			axios({
				method: "delete",
				url: `${base_url}/client/educationDetails`,
				data: loginFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					//handle success
					console.log(response);
					if (response.data === "Record deleted successfully") {
						toast.success("Record deleted successfully");
						setmodalIsOpen(false);
					}
					else {
						toast.error("Error Occurred");
					}
					getAllEducationFromServer();
				})
				.catch(function (response) {
					//handle error
					console.log(response);
					toast.error("Error Occurred cdm");
				});

		} else {
			toast.error("Please enter valid Qualification Level");
		}

	}


	const renderCard1 = (hostels, index) => {

		return (

			<tr>
				<td>{hostels.qualificationLevel}</td>
				<td>{hostels.instituteName}</td>
				<td>{hostels.degree}</td>
				<td>{hostels.universityName}</td>
				<td>{hostels.startDate}</td>
				<td>{hostels.completedDate}</td>
				<td>{hostels.gradePercentage}</td>
				<td>{hostels.areaOfSpecialization}</td>

				<td><Button onClick={() => setmodalIsOpen(true)} variant="contained"><BuildCircleIcon /></Button>
					<Modal isOpen={modalIsOpen}
						onRequestClose={() => setmodalIsOpen(false)}
						style={
							{
								overlay: {
									backgroundColor: 'transparent',
									height: '350px',
									width: '500px',
									position: 'absolute',
									top: '375px',
									left: '1000px',
									right: '100px',
									bottom: '100px'
								},
								content: {
									color: 'black'
								},
								zIndex: '1001'

							}
						}
					>
						<div >
							<h4>
								Confirm by entering Qualification Level
							</h4>
							<p>
								<TextField
									margin="normal"
									fullWidth
									id="del_text"
									label="Enter Qualification Level"
									InputLabelProps={{ shrink: true }}
									name="del_text"
									onChange={(e) => {

										setDeleteUserData({ ...DeleteUserData, qualificationLevel: e.target.value })
									}}
								/>

							</p>
							<div className='container' style={{
								display: "flex", justifyContent: "right", paddingBottom: "1rem", paddingRight: "1rem"
							}}>
								<button onClick={() => checkOrgName1(hostels.qualificationLevel)} variant="contained" color="success" endIcon={<DoneIcon />} >Apply</button>
								<button variant="contained" style={{ marginLeft: "1rem " }} endIcon={<DeleteIcon />} onClick={() => setmodalIsOpen(false)}>Close</button>
							</div>
						</div>

					</Modal>
				</td>
			</tr>
		);
	}


	const [banks2, setBanks2] = useState([])

	const getAllEmploymentFromServer = () => {
		const loginFormData = new FormData();
		loginFormData.append("userId", userData.userId)
		console.log(loginFormData.get("userId"));
		axios({
			method: "post",
			url: `${base_url}/client/employmentDetail`,
			data: loginFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(function (response) {
				//handle success
				console.log(response);
				setBanks2(response.data);
			})
			.catch(function (response) {
				//handle error
				console.log(response);
			});
	};

	const checkOrgName2 = (name) => {
		if (name === DeleteUserData.namedel) {
			toast.success("Data Deleted Successfully");
			setmodalIsOpen(false);
		} else {
			toast.error("Please enter valid organization name");
		}

	}
	const renderCard2 = (hostels, index) => {

		return (

			<tr>
				<td>{hostels.typeOfExperience}</td>
				<td>{hostels.organizationName}</td>
				<td>{hostels.fromDate}</td>
				<td>{hostels.toDate}</td>
				<td>{hostels.experienceCertificateDate}</td>

				<td><Button onClick={() => setmodalIsOpen(true)} variant="contained"><BuildCircleIcon /></Button>
					<Modal isOpen={modalIsOpen}
						onRequestClose={() => setmodalIsOpen(false)}
						style={
							{
								overlay: {
									backgroundColor: 'transparent',
									height: '350px',
									width: '500px',
									position: 'absolute',
									top: '375px',
									left: '1000px',
									right: '100px',
									bottom: '100px'
								},
								content: {
									color: 'black'
								},
								zIndex: '1001'

							}
						}
					>
						<div >
							<h4>
								Confirm by entering Organization name
							</h4>
							<p>
								<TextField
									margin="normal"
									fullWidth
									id="org_name"
									label="Enter Name of Organization "
									InputLabelProps={{ shrink: true }}
									name="org_name"
									onChange={(e) => {

										setDeleteUserData({ ...DeleteUserData, namedel: e.target.value })
									}}
								/>

							</p>
							<div className='container' style={{
								display: "flex", justifyContent: "right", paddingBottom: "1rem", paddingRight: "1rem"
							}}>
								<button onClick={() => checkOrgName2(hostels.organizationName)} variant="contained" color="success" endIcon={<DoneIcon />} >Apply</button>
								<button variant="contained" style={{ marginLeft: "1rem " }} endIcon={<DeleteIcon />} onClick={() => setmodalIsOpen(false)}>Close</button>
							</div>
						</div>

					</Modal>
				</td>

			</tr >
		);
	};



	const [banks3, setBanks3] = useState([])

	const getAllResearchInfoFromServer = () => {
		axios.post(`${base_url}/client/researchInfos`, userData).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setBanks3(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				// toast.error("Something went wrong");
			}
		);
	};

	const checkOrgName3 = (name) => {
		if (name === DeleteUserData.isbnNumber) {
			const loginFormData = new FormData();
			loginFormData.append("id", DeleteUserData.id)
			loginFormData.append("isbnNumber", DeleteUserData.isbnNumber)
			axios({
				method: "delete",
				url: `${base_url}/client/researchInfo`,
				data: loginFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					//handle success
					console.log(response);
					if (response.data === "Research info deleted successfully") {
						toast.success("Research info deleted successfully");
						setmodalIsOpen(false);
					}
					else {
						toast.error("Error Occurred");
					}
					getAllResearchInfoFromServer();
				})
				.catch(function (response) {
					//handle error
					console.log(response);
					toast.error("Error Occurred cdm");
				});

		} else {
			toast.error("Please enter valid Qualification Level");
		}

	}







	const renderCard3 = (hostels, index) => {

		return (

			<tr>
				<td>{hostels.isbnNumber}</td>
				<td>{hostels.conferenceName}</td>
				<td>{hostels.placeOfConference}</td>
				<td>{hostels.date}</td>
				<td>{hostels.authors}</td>
				<td>{hostels.titleOfPaper}</td>
				<td>{hostels.journalName}</td>
				<td>{hostels.publicationDate}</td>

				<td><Button onClick={() => setmodalIsOpen(true)} variant="contained"><BuildCircleIcon /></Button>
					<Modal isOpen={modalIsOpen}
						onRequestClose={() => setmodalIsOpen(false)}
						style={
							{
								overlay: {
									backgroundColor: 'transparent',
									height: '350px',
									width: '500px',
									position: 'absolute',
									top: '375px',
									left: '1000px',
									right: '100px',
									bottom: '100px'
								},
								content: {
									color: 'black'
								},
								zIndex: '1001'

							}
						}
					>
						<div >
							<h4>
								Confirm by entering ISBN Number
							</h4>
							<p>
								<TextField
									margin="normal"
									fullWidth
									id="del_text"
									label="Enter ISBN Number Level"
									InputLabelProps={{ shrink: true }}
									name="del_text"
									onChange={(e) => {

										setDeleteUserData({ ...DeleteUserData, isbnNumber: e.target.value })
									}}
								/>

							</p>
							<div className='container' style={{
								display: "flex", justifyContent: "right", paddingBottom: "1rem", paddingRight: "1rem"
							}}>
								<button onClick={() => checkOrgName3(hostels.isbnNumber)} variant="contained" color="success" endIcon={<DoneIcon />} >Apply</button>
								<button variant="contained" style={{ marginLeft: "1rem " }} endIcon={<DeleteIcon />} onClick={() => setmodalIsOpen(false)}>Close</button>
							</div>
						</div>

					</Modal>
				</td>
			</tr>
		);
	};








	const [open1, setOpen1] = React.useState(true);

	const handleClick = () => {
		setOpen1(!open1);
	};
	const [open2, setOpen2] = React.useState(true);

	const handleClick1 = () => {
		setOpen2(!open2);
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
								<ListItemIcon>
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
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Educational Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Employment Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Portfolio" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Salary Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Medical Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Research Information" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Achievement & Awards" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Certification Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Document Details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
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
					<ListItemButton >
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
							<ListItemButton >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="medium" />
								</ListItemIcon>
								<ListItemText primary="Change Password" />
							</ListItemButton>
							<ListItemButton >
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
				<div className='container'>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<PersonIcon />
						</Avatar>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography component="h1" variant="h5">
							Profile
						</Typography>
					</div>
					<div className='container' style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem' }}>
						<Typography component="h1" variant="h5">
							<b>PERSONAL DETAILS</b>
						</Typography>
					</div>
					<div className='container' style={{ paddingTop: '1rem' }}>
						<Grid container rowSpacing={4} columnSpacing={0}>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Name :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='Name here'
										style={{ paddingLeft: '1rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Gender :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='Gender here'
										style={{ paddingLeft: '1rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Date of Birth :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='D.O.B here'
										style={{ paddingLeft: '1rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
						</Grid>
						<Divider style={{ marginTop: '2rem' }} />
						<div style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem', paddingBottom: '2rem' }}>
							<Typography component="h1" variant="h5">
								<b>CONTACT DETAILS</b>
							</Typography>
						</div>

						<Grid container rowSpacing={4} columnSpacing={0}>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Mobile Number :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='Mobile Number here'
										style={{ paddingLeft: '1rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Email :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='Email here'
										style={{ paddingLeft: '1rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
							<Grid item xs={4}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ paddingTop: '.2rem' }}>
										Address :
									</div>


									<TextField
										variant='standard'
										color='warning'
										defaultValue='Address here'
										style={{ paddingLeft: '1rem', maxWidth: '50rem' }}
										InputProps={{ readOnly: 'true' }}


									/>
								</div>
							</Grid>
						</Grid>
						<Divider style={{ marginTop: '2rem' }} />
						<div style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem', paddingBottom: '2rem' }}>
							<Typography component="h1" variant="h5">
								<b>EDUCATIONAL DETAILS</b>
							</Typography>
						</div>
						<div style={{ paddingTop: '1rem' }}>
							<Table striped bordered hover>
								<thead>
									<tr>

										<th>Qualification Level</th>
										<th>Institute Name</th>
										<th>Degree</th>
										<th>University Name</th>
										<th>Start Date</th>
										<th>Completed On</th>
										<th>Grade Percentage</th>
										<th>Area of Specialization</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{banks1.map(renderCard1)}

								</tbody>
							</Table>
						</div>


						<Divider style={{ marginTop: '2rem' }} />
						<div style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem', paddingBottom: '2rem' }}>
							<Typography component="h1" variant="h5">
								<b>EMPLOYMENT DETAILS</b>
							</Typography>
						</div>
						<div style={{ paddingTop: '1rem' }}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Type of Experience</th>
										<th>Name of Organization</th>
										<th>From Date</th>
										<th>To Date</th>
										<th>Experience Certificate Issue Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{banks2.map(renderCard2)}
								</tbody>
							</Table>
						</div>
						<Divider style={{ marginTop: '2rem' }} />
						<div style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem', paddingBottom: '2rem' }}>
							<Typography component="h1" variant="h5">
								<b>RESEARCH DETAILS</b>
							</Typography>
						</div>

						<div style={{ paddingTop: '1rem' }}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>ISBN Number</th>
										<th>Conference Name</th>
										<th>Place of Conference</th>
										<th>Date</th>
										<th>Authors</th>
										<th>Title of Paper</th>
										<th>Journal Name</th>
										<th>Publication Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{banks3.map(renderCard3)}
								</tbody>
							</Table>
						</div>

					</div>



				</div>
			</Main>
		</Box>
	);
}
