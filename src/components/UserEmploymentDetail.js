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
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BadgeIcon from '@mui/icons-material/Badge';
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



export default function UserEmploymentDetail() {


	const [UserEmployment, setUserEmployment] = useState({ userId: document.cookie });
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		const loginFormData = new FormData();
		loginFormData.append("file", UserEmployment.file)
		loginFormData.append("userId", UserEmployment.userId)
		loginFormData.append("organizationName", UserEmployment.organizationName)
		loginFormData.append("typeOfExperience", UserEmployment.typeOfExperience)
		loginFormData.append("departmentName", UserEmployment.departmentName)
		loginFormData.append("fromDate", UserEmployment.fromDate)
		loginFormData.append("toDate", UserEmployment.toDate)
		loginFormData.append("experienceCertificateDate", UserEmployment.experienceCertificateDate)

		console.log(UserEmployment.userId);
		console.log(loginFormData.get("organizationName"));
		axios({
			method: "post",
			url: `${base_url}/client/employmentDetails`,
			data: loginFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(function (response) {
				//handle success
				console.log(response);
			})
			.catch(function (response) {
				//handle error
				console.log(response);
			});

	}

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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userpreference" >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Preference Selection" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userhome" >
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
							<ListItemButton sx={{ pl: 2 }} >
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
							<BadgeIcon />
						</Avatar>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography component="h1" variant="h5">
							Enter your Employment Information
						</Typography>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='container'>
							<Grid container rowSpacing={0} columnSpacing={4}>
								<Grid item xs={4}>
									<FormControl style={{ paddingTop: "1rem" }} fullWidth>
										<InputLabel style={{ paddingTop: "1rem" }}>Type of Experience</InputLabel>
										<Select
											fullWidth
											labelId="category"
											id="category"
											label="Type of Experience"
											autoFocus
											onChange={(e) => {

												setUserEmployment({ ...UserEmployment, typeOfExperience: e.target.value })
											}}
										>
											<MenuItem value={"Teaching"}>Teaching</MenuItem>
											<MenuItem value={"Industry"}>Industry</MenuItem>
											<MenuItem value={"Research"}>Research</MenuItem>
											<MenuItem value={"Adjunct"}>Adjunct</MenuItem>
											<MenuItem value={"Other"}>Other</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										fullWidth
										id="o_name"
										label="Enter Name of Organization"
										name="o_name"
										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, organizationName: e.target.value })
										}}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										fullWidth
										id="d_name"
										label="University/Board/Department/Branch Name"
										name="d_name"

										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, departmentName: e.target.value })
										}}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										type="date"
										fullWidth
										id="f_date"
										label="From Date"
										name="f_date"
										InputLabelProps={{ shrink: "true" }}

										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, fromDate: e.target.value })
										}}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										type="date"
										fullWidth
										id="e_date"
										label="Experience Certificate Issue Date"
										name="e_date"
										InputLabelProps={{ shrink: "true" }}
										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, experienceCertificateDate: e.target.value })
										}}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										type="date"
										fullWidth
										id="end_date"
										label="To Date"
										name="end_date"
										InputLabelProps={{ shrink: "true" }}
										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, toDate: e.target.value })
										}}
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										margin="normal"
										fullWidth
										type="file"
										id="grade"
										label="Document File"
										InputLabelProps={{ shrink: "true" }}
										name="grade"
										onChange={(e) => {

											setUserEmployment({ ...UserEmployment, file: e.target.files[0] })
										}}
									/>
								</Grid>
							</Grid>
							<div style={{ paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
								<Button type="submit" variant='contained' endIcon={<DoneIcon />}>SUBMIT</Button>
							</div>
						</div>
					</form>
					<div style={{ paddingTop: "1rem" }}>
						<Divider />
					</div>
					<div className='container'>
						<div style={{ paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
							<Button variant='contained' color='error' endIcon={<DeleteIcon />}>DELETE</Button>
						</div>
						<div style={{ paddingTop: '1rem' }}>
							<h5>Employment Information List</h5>

						</div>
						<div style={{ paddingTop: '1rem' }}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Date</th>
										<th>Type of Experience</th>
										<th>Name of Organization</th>
										<th>From Date</th>
										<th>To Date</th>
										<th>Experience Certificate Issue Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1-01-2022</td>
										<td>SSC</td>
										<td>10th</td>
										<td>MIT</td>
										<td>SPPU</td>
										<td>31-01-2022</td>
										<td><Button variant="contained"><BuildCircleIcon /></Button></td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>

				</div>
			</Main>
		</Box>
	);
}
