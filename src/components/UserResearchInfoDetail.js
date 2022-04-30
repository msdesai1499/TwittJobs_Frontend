import * as React from 'react';
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
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ArticleIcon from '@mui/icons-material/Article';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
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



export default function UserResearchInfoDetail() {

	const navigate = useNavigate();

	const handleLogout = () => {

		document.cookie = null;
		navigate("/");

	}
	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [DeleteUserData, setDeleteUserData] = useState({ id: document.cookie });

	const checkOrgName = (name) => {
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



	const [UserData, setUserData] = useState({ userId: document.cookie });

	const getAllResearchInfoFromServer = () => {
		axios.post(`${base_url}/client/researchInfos`, UserData).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setBanks(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				// toast.error("Something went wrong");
			}
		);
	};


	useEffect(() => {
		getAllResearchInfoFromServer();
	}, []);


	const [banks, setBanks] = useState([])




	const renderCard = (hostels, index) => {

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
								<button onClick={() => checkOrgName(hostels.isbnNumber)} variant="contained" color="success" endIcon={<DoneIcon />} >Apply</button>
								<button variant="contained" style={{ marginLeft: "1rem " }} endIcon={<DeleteIcon />} onClick={() => setmodalIsOpen(false)}>Close</button>
							</div>
						</div>

					</Modal>
				</td>
			</tr>
		);
	};



	const [UserResearchInfo, setUserResearchInfo] = useState({ userId: document.cookie });

	const handleSubmit = () => {
		let a = document.cookie;
		console.log(a);
		console.log(React.version);
		setUserResearchInfo({ ...UserResearchInfo, userId: document.cookie })
		console.log(UserResearchInfo);
		axios.post(`${base_url}/client/researchInfo`, UserResearchInfo).then(
			(response) => {
				console.log(response);

				if (response.data === "Research Information Saved") {
					toast.success("Research Information added Successfully");
				}
				else {
					toast.error("Error Occurred");
				}
				getAllResearchInfoFromServer();
			}, (error) => {
				console.log(error);
				toast.error("Error Occurred");
			}
		)

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
					<Button onClick={handleLogout} color="inherit">Logout</Button>
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userpreference">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Preference Selection" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userhome">
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
							<ListItemButton sx={{ pl: 2 }} >
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
					<ListItemButton component="a" href="/useruploadresume">
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
							<ListItemButton component="a" href="/useractivatedplan">
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
							<ArticleIcon />
						</Avatar>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography component="h1" variant="h5">
							Research Information
						</Typography>
					</div>
					<div className='container'>
						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="level"
									label="Level"
									name="level"
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="c_name"
									label="Enter Conference Name"
									name="c_name"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, conferenceName: e.target.value })
									}}

								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="place"
									label="Enter place of conference"
									name="place"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, placeOfConference: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="date"
									label="Date"
									name="date"
									InputLabelProps={{ shrink: "true" }}
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, date: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="text"
									fullWidth
									id="authors"
									label="Authors"
									name="authors"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, authors: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="text"
									fullWidth
									id="author_aff"
									label="Author Affiliation"
									name="author_aff"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, authorAffiliation: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="text"
									fullWidth
									id="title"
									label="Title of Paper"
									name="title"

									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, titleOfPaper: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="text"
									fullWidth
									id="j_name"
									label="Journal Name"
									name="j_name"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, journalName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="text"
									fullWidth
									id="issn"
									label="ISBN/ISSN Number"
									name="issn"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, isbnNumber: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="p_date"
									label="Publication Date"
									name="p_date"
									InputLabelProps={{ shrink: "true" }}
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, publicationDate: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="link"
									fullWidth
									id="link"
									label="Link (URL)"
									name="link"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, link: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="p_number"
									label="Page number"
									name="p_number"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, pageNumber: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="publisher"
									label="Publisher"
									name="publisher"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, publisher: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="vol"
									label="Volume"
									name="vol"
									onChange={(e) => {

										setUserResearchInfo({ ...UserResearchInfo, volume: e.target.value })
									}}
								/>
							</Grid>
						</Grid>
						<div style={{ paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
							<Button onClick={handleSubmit} variant='contained' endIcon={<DoneIcon />}>SUBMIT</Button>
						</div>
					</div>
					<div style={{ paddingTop: "1rem" }}>
						<Divider />
					</div>
					<div className='container'>
						<div style={{ paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
							<Button variant='contained' color='error' endIcon={<DeleteIcon />}>DELETE</Button>
						</div>
						<div style={{ paddingTop: '1rem' }}>
							<h5>Research Information list</h5>

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
									{banks.map(renderCard)}
								</tbody>
							</Table>
						</div>
					</div>

				</div>
			</Main>
		</Box>
	);
}
