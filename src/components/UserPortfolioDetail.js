import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BookIcon from '@mui/icons-material/Book';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
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



export default function UserPortfolioDetail() {


	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [DeleteUserData, setDeleteUserData] = useState({ id: document.cookie });

	const checkOrgName = (name) => {
		if (name === DeleteUserData.level) {
			const loginFormData = new FormData();
			loginFormData.append("id", DeleteUserData.id)
			loginFormData.append("level", DeleteUserData.level)
			axios({
				method: "delete",
				url: `${base_url}/client/portfolioInfo`,
				data: loginFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					//handle success
					console.log(response);
					if (response.data === "Portfolio is deleted successfully") {
						toast.success("Portfolio is deleted successfully");
						setmodalIsOpen(false);
					}
					else {
						toast.error("Error Occurred");
					}
					getAllPortfolioFromServer();
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

	const getAllPortfolioFromServer = () => {
		axios.post(`${base_url}/client/portfolioInfos`, UserData).then(
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
		getAllPortfolioFromServer();
	}, []);


	const [banks, setBanks] = useState([])




	const renderCard = (hostels, index) => {

		return (

			<tr>
				<td>{hostels.title}</td>
				<td>{hostels.level}</td>
				<td>{hostels.description}</td>
				<td>{hostels.fromDate}</td>
				<td>{hostels.toDate}</td>

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
								Confirm by entering Portfolio Level
							</h4>
							<p>
								<TextField
									margin="normal"
									fullWidth
									id="del_text"
									label="Enter Portfolio Level"
									InputLabelProps={{ shrink: true }}
									name="del_text"
									onChange={(e) => {

										setDeleteUserData({ ...DeleteUserData, level: e.target.value })
									}}
								/>

							</p>
							<div className='container' style={{
								display: "flex", justifyContent: "right", paddingBottom: "1rem", paddingRight: "1rem"
							}}>
								<button onClick={() => checkOrgName(hostels.level)} variant="contained" color="success" endIcon={<DoneIcon />} >Apply</button>
								<button variant="contained" style={{ marginLeft: "1rem " }} endIcon={<DeleteIcon />} onClick={() => setmodalIsOpen(false)}>Close</button>
							</div>
						</div>

					</Modal>
				</td>
			</tr>
		);
	};

	const [UserPortfolio, setUserPortfolio] = useState({ userId: document.cookie });
	const handleSubmit = () => {

		console.log(UserPortfolio);
		axios.post(`${base_url}/client/portfolioInfo`, UserPortfolio).then(
			(response) => {
				console.log(response);
				if (response.data === "Portfolio details saved successfully") {
					toast.success("Portfolio Details added Successfully");
				}
				else {
					toast.error("Error Occurred");
				}
				getAllPortfolioFromServer();
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
							<ListItemButton sx={{ pl: 2 }} >
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
					<ListItemButton component="a" href="/useruploadresume">
						<ListItemIcon>
							<CloudUploadOutlinedIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Upload Resume" />
					</ListItemButton>
					<ListItemButton component="a" href="/usernotification" >
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
							<BookIcon />
						</Avatar>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography component="h1" variant="h5">
							Portfolio
						</Typography>
					</div>
					<div className='container' style={{ paddingTop: "1rem" }}>
						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="title"
									label="Title"
									name="title"
									autoFocus
									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, title: e.target.value })
									}}
								/>
							</Grid>

							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="desc"
									label="Description"
									name="desc"

									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, description: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="level"
									label="Level"
									name="level"
									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, level: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="start_date"
									label="From Date"
									name="start_date"
									InputLabelProps={{ shrink: "true" }}
									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, toDate: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="to_date"
									label="To Date"
									name="to_date"
									InputLabelProps={{ shrink: "true" }}
									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, fromDate: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="org"
									label="Organization"
									name="org"
									onChange={(e) => {

										setUserPortfolio({ ...UserPortfolio, organizationName: e.target.value })
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
							<h5>Portfolio</h5>

						</div>
						<div style={{ paddingTop: '1rem' }}>
							<Table striped bordered hover>
								<thead>
									<tr>

										<th>Title</th>
										<th>Level</th>
										<th>Description</th>
										<th>From Date</th>
										<th>To Date</th>
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
