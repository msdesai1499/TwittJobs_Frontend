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
import axios from "axios";
import base_url from "../api/bootapi";

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



export default function UserEducationDetails() {



	const [UserData, setUserData] = useState({ userId: document.cookie });

	const getAllEducationFromServer = () => {
		axios.post(`${base_url}/client/educationsDetails`, UserData).then(
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
		getAllEducationFromServer();
	}, []);


	const [banks, setBanks] = useState([])




	const renderCard = (hostels, index) => {

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

				<td><Button variant="contained"><BuildCircleIcon /></Button></td>
			</tr>
		);
	};



	const [UserEducation, setUserEducation] = useState({ userId: document.cookie });
	const handleSubmit = () => {
		let a = document.cookie;
		console.log(a);
		console.log(React.version);
		setUserEducation({ ...UserEducation, userId: a.value })
		console.log(UserEducation);
		axios.post(`${base_url}/client/educationDetails`, UserEducation).then(
			(response) => {
				console.log(response);
				console.log("Education Details added Successfully");
				getAllEducationFromServer();
			}, (error) => {
				console.log(error);
				console.log("Error");
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
							<ListItemButton sx={{ pl: 2 }}>
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
							<SchoolIcon />
						</Avatar>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography component="h1" variant="h5">
							Enter your Educational details
						</Typography>
					</div>
					<div className='container'>
						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item xs={4}>
								<FormControl style={{ paddingTop: "1rem" }} fullWidth>
									<InputLabel style={{ paddingTop: "1rem" }}>Qualification Level</InputLabel>
									<Select
										fullWidth
										labelId="category"
										id="category"
										label="Qualification Level"
										autoFocus
										onChange={(e) => {

											setUserEducation({ ...UserEducation, qualificationLevel: e.target.value })
										}}
									>
										<MenuItem value={"SSC"}>SSC</MenuItem>
										<MenuItem value={"HSC"}>HSC</MenuItem>
										<MenuItem value={"Graduation"}>Graduation</MenuItem>
										<MenuItem value={"PG"}>PG</MenuItem>
										<MenuItem value={"Diploma"}>Diploma</MenuItem>
										<MenuItem value={"10+2"}>10 + 2</MenuItem>
										<MenuItem value={"Doctorate"}>Doctorate</MenuItem>
										<MenuItem value={"Post Doctorate"}>Post Doctorate</MenuItem>
										<MenuItem value={"PGDM"}>PGDM</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="i_name"
									label="Enter Institute Name"
									name="i_name"

									onChange={(e) => {

										setUserEducation({ ...UserEducation, instituteName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="degree"
									label="Degree"
									name="degree"

									onChange={(e) => {

										setUserEducation({ ...UserEducation, degree: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="uni_name"
									label="University Name"
									name="uni_name"
									onChange={(e) => {

										setUserEducation({ ...UserEducation, universityName: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="s_date"
									label="Start Date"
									name="s_date"
									InputLabelProps={{ shrink: "true" }}
									onChange={(e) => {

										setUserEducation({ ...UserEducation, startDate: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									type="date"
									fullWidth
									id="e_date"
									label="End Date"
									name="e_date"
									InputLabelProps={{ shrink: "true" }}

									onChange={(e) => {

										setUserEducation({ ...UserEducation, completedDate: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="grade"
									label="Grade/Percentage"
									name="grade"

									onChange={(e) => {

										setUserEducation({ ...UserEducation, gradePercentage: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="spcl"
									label="Area of Specialization"
									name="spcl"

									onChange={(e) => {

										setUserEducation({ ...UserEducation, areaOfSpecialization: e.target.value })
									}}
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									margin="normal"
									fullWidth
									id="class"
									label="Class"
									name="class"
									onChange={(e) => {

										setUserEducation({ ...UserEducation, classPassing: e.target.value })
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
							<h5>Educational Details list</h5>

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
