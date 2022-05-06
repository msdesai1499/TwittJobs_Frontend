import * as React from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Toolbar from '@mui/material/Toolbar';
import PublishIcon from '@mui/icons-material/Publish';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormControl from '@mui/material/FormControl';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import MenuIcon from '@mui/icons-material/Menu';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
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
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActive';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUpload';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import $ from 'jquery';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import SaveIcon from '@mui/icons-material/Save';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SchoolIcon from '@mui/icons-material/School';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FacebookIcon from '@mui/icons-material/Facebook';
import InputAdornment from '@mui/material/InputAdornment';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from '@iconify/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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



export default function InstituteDetails() {

	const navigate = useNavigate();

	const handleLogout = () => {

		document.cookie = null;
		navigate("/");

	}
	const [InstituteDetails, setInstituteDetails] = useState({ orgId: document.cookie });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		console.log(InstituteDetails.orgId);

		axios({
			method: "post",
			url: `${base_url}/company/companyDetails`,
			data: InstituteDetails,

		})
			.then(function (response) {
				//handle success

				if (response.data === "Organization Info added Successfully") {
					toast.success("Organization Details added Successfully");
				}
				else {
					toast.error("Error Occurred");
				}
				console.log(response);

			})
			.catch(function (response) {
				//handle error
				toast.error("Error Occurred");
				console.log(response);
			});

	}






	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};

	const [open1, setOpen1] = React.useState(true);

	const handleClick = () => {
		setOpen1(!open1);
	};
	const [open2, setOpen2] = React.useState(true);

	const handleClick1 = () => {
		setOpen2(!open2);
	};

	const [open3, setOpen3] = React.useState(true);

	const handleClick2 = () => {
		setOpen3(!open3);
	};

	const [open4, setOpen4] = React.useState(true);

	const handleClick3 = () => {
		setOpen4(!open4);
	};

	const [open5, setOpen5] = React.useState(true);

	const handleClick4 = () => {
		setOpen5(!open5);
	};

	const [open6, setOpen6] = React.useState(true);

	const handleClick5 = () => {
		setOpen6(!open6);
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

					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<SpeedIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
						{open1 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open1} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutehome">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>

						</List>
					</Collapse>

					<ListItemButton onClick={handleClick2}>
						<ListItemIcon>
							<CorporateFareIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Organization Section" />
						{open3 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open3} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Organization details" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutebranch">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Organization branch" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutecontacts">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Organization contacts" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutesocialmedia">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Organization Social Media" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick3}>
						<ListItemIcon>
							<SchoolIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Course Section" />
						{open4 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open4} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutecourses">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Courses" />
							</ListItemButton>
						</List>
					</Collapse>
					<ListItemButton onClick={handleClick4}>
						<ListItemIcon>
							<PublishIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Posting Section" />
						{open5 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open5} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutejobposting">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Job Posting" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutepostingresult">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Posting result" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/instituteemailstatus">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Email status" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick5}>
						<ListItemIcon>
							<PublishIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Download Reports" />
						{open6 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open6} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutejobapplyreports">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Job Apply report" />
							</ListItemButton>

						</List>
					</Collapse>

				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div className='container'>

					<div className='container'>
						<Grid container rowSpacing={2}>
							<Grid item xs={12}>
								<form onSubmit={handleSubmit}>
									<Card id="Card1">
										<CardHeader
											title="Organization Details"
											titleTypographyProps={{ variant: 'h5' }}
											titleStyle={{ textAlign: "center" }}
											style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
										/>
										<Grid container columnSpacing={2} rowSpacing={2} style={{ paddingTop: "2rem", paddingRight: "1rem", paddingLeft: "1rem", paddingBottom: "2rem" }}>
											<Grid item xs={6}>
												<Card>
													<CardHeader
														title="Organization Type"
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3" }} />
													<Grid container columnSpacing={2} rowSpacing={2} style={{ paddingTop: "2rem", paddingRight: "1rem", paddingLeft: "1rem", paddingBottom: "2rem" }}>
														<Grid item xs={12}>
															<FormControl fullWidth>
																<InputLabel id="demo-simple-select-label">Type</InputLabel>
																<Select


																	label="Type"
																	onChange={(e) => {

																		setInstituteDetails({ ...InstituteDetails, organizationType: e.target.value })
																	}}

																>
																	<MenuItem value="School">School</MenuItem>
																	<MenuItem value="College">College</MenuItem>
																	<MenuItem value="Coaching Class">Coaching Class</MenuItem>
																	<MenuItem value="Institute">Institute</MenuItem>
																	<MenuItem value="Training Center">Training Center</MenuItem>
																	<MenuItem value="University">University</MenuItem>
																	<MenuItem value="NGO/Foundation">NGO/Foundation</MenuItem>
																	<MenuItem value="Other">Other</MenuItem>
																</Select>
															</FormControl>
														</Grid>

													</Grid>

												</Card>

											</Grid>
											<Grid item xs={6}>
												<Card>
													<CardHeader
														title="Organization Name"
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3" }}
													/>
													<Grid container columnSpacing={2} rowSpacing={2} style={{ paddingTop: "2rem", paddingRight: "1rem", paddingLeft: "1rem", paddingBottom: "2rem" }}>
														<Grid item xs={12}>
															<TextField
																fullWidth
																type="text"
																label="Name of Organization"
																required
																onChange={(e) => {

																	setInstituteDetails({ ...InstituteDetails, organizationName: e.target.value })
																}}
															/>
														</Grid>
													</Grid>
												</Card>
											</Grid>

											<Grid item xs={6}>
												<Card>
													<CardHeader
														title="Organization Description"
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3" }}
													/>
													<Grid container columnSpacing={2} rowSpacing={2} style={{ paddingTop: "2rem", paddingRight: "1rem", paddingLeft: "1rem", paddingBottom: "2rem" }}>

														<Grid item xs={12}>
															<TextField
																fullWidth
																label="Description"
																onChange={(e) => {

																	setInstituteDetails({ ...InstituteDetails, organizationDescription: e.target.value })
																}}
															/>
														</Grid>
														<Grid item xs={12}>
															<TextField
																fullWidth
																label="Organization Address"
																onChange={(e) => {

																	setInstituteDetails({ ...InstituteDetails, organizationAddress: e.target.value })
																}}
															/>
														</Grid>


													</Grid>
												</Card>
											</Grid>

											<Grid item xs={6}>
												<Card>

													<Card >
														<CardHeader
															title="Organization Vision"
															titleStyle={{ textAlign: "center" }}
															style={{ backgroundColor: "#D3D3D3" }}
														/>

														<Grid container columnSpacing={2} rowSpacing={2} style={{ paddingTop: "2rem", paddingRight: "1rem", paddingLeft: "1rem", paddingBottom: "2rem" }}>
															<Grid item xs={12}>
																<TextField
																	fullWidth
																	label="Organization Slogan"
																	onChange={(e) => {

																		setInstituteDetails({ ...InstituteDetails, organizationSlogan: e.target.value })
																	}}
																/>
															</Grid>
															<Grid item xs={12}>
																<TextField
																	fullWidth
																	label="Organization Vision"
																	onChange={(e) => {

																		setInstituteDetails({ ...InstituteDetails, organizationVision: e.target.value })
																	}}
																/>
															</Grid>
															<div className='container' style={{ paddingTop: "1rem", marginRight: '-0.5rem', display: 'flex', justifyContent: 'right' }} >
																<Button type="submit" variant='contained' color='success' endIcon={<DoneIcon />}>SUBMIT</Button>
															</div>
														</Grid>
													</Card>
												</Card>
											</Grid>

										</Grid>




									</Card>
								</form>
							</Grid>


						</Grid>

					</div>



				</div>
			</Main>
		</Box>

	);
}
