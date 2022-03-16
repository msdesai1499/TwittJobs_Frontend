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



export default function InstituteCourses() {


	const getAllInstituteCoursePostsFromServer = () => {
		axios.get(`${base_url}/company/courseSection/posts`, { params: { id: document.cookie } }).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setPosts(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};

	const getAllInstituteCourseProgramsFromServer = () => {
		axios.get(`${base_url}/company/courseSection/programs`, { params: { id: document.cookie } }).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setPrograms(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};

	const getAllInstituteCoursesFromServer = () => {
		axios.get(`${base_url}/company/courseSection/courses`, { params: { id: document.cookie } }).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setCourses(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};


	useEffect(() => {
		getAllInstituteCoursePostsFromServer();
		getAllInstituteCourseProgramsFromServer();
		getAllInstituteCoursesFromServer();
	}, []);


	const [posts, setPosts] = useState([])
	const [programs, setPrograms] = useState([])
	const [courses, setCourses] = useState([])




	const renderCard1 = (inst, index) => {

		return (

			<tr>
				<td>{inst.postName}</td>
				<td>{inst.postDetails}</td>

				<td><Button variant="contained"><BuildCircleIcon /></Button></td>
			</tr>
		);
	};

	const renderCard2 = (inst, index) => {

		return (

			<tr>
				<td>{inst.programName}</td>
				<td>{inst.programDetails}</td>

				<td><Button variant="contained"><BuildCircleIcon /></Button></td>
			</tr>
		);
	};

	const renderCard3 = (inst, index) => {

		return (

			<tr>
				<td>{inst.courseName}</td>
				<td>{inst.educationDiscipline}</td>
				<td>{inst.courseDetails}</td>

				<td><Button variant="contained"><BuildCircleIcon /></Button></td>
			</tr>
		);
	};








	const [InstitutePostDetails, setInstitutePostDetails] = useState({ orgId: document.cookie });
	const handleSubmit1 = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		console.log(InstitutePostDetails.orgId);

		axios({
			method: "post",
			url: `${base_url}/company/courseSection/posts/addPost`,
			data: InstitutePostDetails,

		})
			.then(function (response) {
				//handle success

				if (response.data === "Post Details Saved") {
					toast.success("Organization Post Details added Successfully");
					getAllInstituteCoursePostsFromServer();
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

	const [InstituteProgramDetails, setInstituteProgramDetails] = useState({ orgId: document.cookie });
	const handleSubmit2 = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		console.log(InstituteProgramDetails.orgId);

		axios({
			method: "post",
			url: `${base_url}/company/courseSection/programs/addProgram`,
			data: InstituteProgramDetails,

		})
			.then(function (response) {
				//handle success

				if (response.data === "Program Details Saved") {
					toast.success("Organization Program Details added Successfully");
					getAllInstituteCourseProgramsFromServer();
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

	const [InstituteCourseDetails, setInstituteCourseDetails] = useState({ orgId: document.cookie });
	const handleSubmit3 = (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		console.log(InstituteCourseDetails.orgId);

		axios({
			method: "post",
			url: `${base_url}/company/courseSection/courses/addCourse`,
			data: InstituteCourseDetails,

		})
			.then(function (response) {
				//handle success

				if (response.data === "Course Details Saved") {
					toast.success("Organization Course Details added Successfully");
					getAllInstituteCoursesFromServer();
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/instituteactivatedsubscriptions" >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Activated Subscriptions" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick1}>
						<ListItemIcon>
							<FolderIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Media Section" />
						{open2 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open2} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/instituteimagebasket">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Image Basket" />
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/institutedetails">
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
							<ListItemButton sx={{ pl: 2 }} >
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/instituteuserreports">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Users report " />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/instituteexportedreports">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Exported report" />
							</ListItemButton>

						</List>
					</Collapse>

				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div className='container' >

					<div className='container'>
						<Grid container rowSpacing={2}>
							<Grid item xs={12}>
								<form onSubmit={handleSubmit1}>
									<Card id="Card1">
										<CardHeader
											title="Post Details "
											titleTypographyProps={{ variant: 'h5' }}
											titleStyle={{ textAlign: "center" }}
											style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
										/>
										<Grid container rowSpacing={2} columnSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
											<Grid container xs={4} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>

												<Grid item xs={12}>

													<TextField
														fullWidth
														label="Post Name"
														onChange={(e) => {

															setInstitutePostDetails({ ...InstitutePostDetails, postName: e.target.value })
														}}
													/>

												</Grid>
												<Grid item xs={12} >

													<FormControl fullWidth>
														<InputLabel id="demo-simple-select-label">Status</InputLabel>
														<Select
															fullWidth
															label="Status"
															onChange={(e) => {

																setInstitutePostDetails({ ...InstitutePostDetails, postStatus: e.target.value })
															}}
														>
															<MenuItem value="true">Active</MenuItem>
															<MenuItem value="false">Inactive</MenuItem>

														</Select>
													</FormControl>

												</Grid>

											</Grid>
											<Grid container xs={8} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
												<Grid item xs={12}>

													<TextField

														fullWidth
														label="Post Details"
														onChange={(e) => {

															setInstitutePostDetails({ ...InstitutePostDetails, postDetails: e.target.value })
														}}
													/>

												</Grid>
											</Grid>
										</Grid>
										<div className='container' style={{ padding: "0rem 1rem 1rem 1rem", display: "flex", justifyContent: "right" }}>
											<Button type="submit" variant="contained" color='success' endIcon={<DoneIcon />}>Submit</Button>
										</div>


									</Card>
								</form>
							</Grid>
							<Grid item xs={12}>
								<Card style={{ padding: "1rem 0rem 0rem 0rem" }}>
									<div className='container'>
										<Table striped bordered hover>
											<thead>
												<tr>

													<th>Post Name</th>
													<th>Details</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{posts.map(renderCard1)}
											</tbody>
										</Table>
										<div style={{ display: "flex", justifyContent: "right", paddingBottom: '1rem' }}>
											{
												<Button variant='contained' color="error" endIcon={<DeleteIcon />}>DELETE</Button>
											}
										</div>
									</div>
								</Card>
							</Grid>
							<Grid item xs={12}>
								<form onSubmit={handleSubmit2}>
									<Card id="Card2">
										<CardHeader
											title="Program Details "
											titleTypographyProps={{ variant: 'h5' }}
											titleStyle={{ textAlign: "center" }}
											style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
										/>
										<Grid container rowSpacing={2} columnSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
											<Grid container xs={4} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>

												<Grid item xs={12}>

													<TextField
														fullWidth
														label="Program Name"
														onChange={(e) => {

															setInstituteProgramDetails({ ...InstituteProgramDetails, programName: e.target.value })
														}}
													/>

												</Grid>
												<Grid item xs={12} >

													<FormControl fullWidth>
														<InputLabel id="demo-simple-select-label">Program Status</InputLabel>
														<Select
															fullWidth
															label="Program Status"
															onChange={(e) => {

																setInstituteProgramDetails({ ...InstituteProgramDetails, programStatus: e.target.value })
															}}

														>
															<MenuItem value="true">Active</MenuItem>
															<MenuItem value="false">Inactive</MenuItem>

														</Select>
													</FormControl>

												</Grid>
											</Grid>
											<Grid container xs={8} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
												<Grid item xs={12}>

													<TextField
														fullWidth
														label="Program Details"
														onChange={(e) => {

															setInstituteProgramDetails({ ...InstituteProgramDetails, programDetails: e.target.value })
														}}
													/>

												</Grid>
											</Grid>
										</Grid>
										<div className='container' style={{ padding: "0rem 1rem 1rem 1rem", display: "flex", justifyContent: "right" }}>
											<Button type="submit" variant="contained" color='success' endIcon={<DoneIcon />}>Submit</Button>
										</div>


									</Card>
								</form>

							</Grid>
							<Grid item xs={12}>
								<Card style={{ padding: "1rem 0rem 0rem 0rem" }}>
									<div className='container'>
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>Program Name</th>
													<th>Details</th>
													<th>Action</th>
												</tr>

											</thead>
											<tbody>
												{programs.map(renderCard2)}
											</tbody>
										</Table>
										<div style={{ display: "flex", justifyContent: "right", paddingBottom: '1rem' }}>
											{
												<Button variant='contained' color="error" endIcon={<DeleteIcon />}>DELETE</Button>
											}
										</div>
									</div>
								</Card>
							</Grid>
							<Grid item xs={12}>
								<form onSubmit={handleSubmit3}>
									<Card id="Card3">
										<CardHeader
											title="Course Details "
											titleTypographyProps={{ variant: 'h5' }}
											titleStyle={{ textAlign: "center" }}
											style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
										/>
										<Grid container rowSpacing={2} columnSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
											<Grid container xs={4} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
												<Grid item xs={12} >

													<FormControl fullWidth>
														<InputLabel id="demo-simple-select-label">Educational Discipline</InputLabel>
														<Select
															fullWidth
															label="Educational Discipline"
															onChange={(e) => {

																setInstituteCourseDetails({ ...InstituteCourseDetails, educationDiscipline: e.target.value })
															}}
														>
															<MenuItem value="Distance and Learning Center">Distance and Learning Center</MenuItem>
															<MenuItem value="Training and Development">Training and Development</MenuItem>
															<MenuItem value="Coaching Tutor">Coaching Tutor</MenuItem>
															<MenuItem value="Home Tutor">Home Tutor</MenuItem>
															<MenuItem value="Agriculture Education">Agriculture Education</MenuItem>
															<MenuItem value="Liberal Education">Liberal Education</MenuItem>
															<MenuItem value="Business Education">Business Education</MenuItem>
															<MenuItem value="Vocational Educational">Vocational Education</MenuItem>
															<MenuItem value="Polytechnic Educational">Polytechnic Education</MenuItem>
															<MenuItem value="Law Educational">Law Education</MenuItem>
															<MenuItem value="Management Educational">Management Education</MenuItem>
															<MenuItem value="Commerce Educational">Commerce Education</MenuItem>
															<MenuItem value="Science Educational">Science Education</MenuItem>
															<MenuItem value="Arts Educational">Arts Education</MenuItem>
															<MenuItem value="Arts,Commerce & Science">Arts,Commerce & Science</MenuItem>
															<MenuItem value="Pharmacy Educational">Pharmacy Education</MenuItem>
															<MenuItem value="Medical Educational">Medical Education</MenuItem>
															<MenuItem value="Engineering and Technology">Engineering and Technology</MenuItem>
															<MenuItem value="Pre-Primary">Pre-Primary</MenuItem>


														</Select>
													</FormControl>

												</Grid>
												<Grid item xs={12}>

													<TextField
														fullWidth
														label="Course Name"
														onChange={(e) => {

															setInstituteCourseDetails({ ...InstituteCourseDetails, courseName: e.target.value })
														}}
													/>

												</Grid>

												<Grid item xs={12} >

													<FormControl fullWidth>
														<InputLabel id="demo-simple-select-label">Course Status</InputLabel>
														<Select
															fullWidth
															label="Course Status"
															onChange={(e) => {

																setInstituteCourseDetails({ ...InstituteCourseDetails, courseStatus: e.target.value })
															}}
														>
															<MenuItem value="true">Active</MenuItem>
															<MenuItem value="false">Inactive</MenuItem>

														</Select>
													</FormControl>

												</Grid>
											</Grid>
											<Grid container xs={8} rowSpacing={2} style={{ padding: "1rem 1rem 1rem 1rem" }}>
												<Grid item xs={12}>

													<TextField
														fullWidth
														label="Course Details"
														onChange={(e) => {

															setInstituteCourseDetails({ ...InstituteCourseDetails, courseDetails: e.target.value })
														}}
													/>

												</Grid>
											</Grid>
										</Grid>
										<div className='container' style={{ padding: "0rem 1rem 1rem 1rem", display: "flex", justifyContent: "right" }}>
											<Button type="submit" variant="contained" color='success' endIcon={<DoneIcon />}>Submit</Button>
										</div>


									</Card>
								</form>
							</Grid>
							<Grid item xs={12}>
								<Card style={{ padding: "1rem 0rem 0rem 0rem" }}>
									<div className='container'>
										<Table striped bordered hover>
											<thead>
												<tr>

													<th>Discipline Type</th>
													<th>Course Name</th>
													<th>Details</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{courses.map(renderCard3)}
											</tbody>
										</Table>
										<div style={{ display: "flex", justifyContent: "right", paddingBottom: '1rem' }}>
											{
												<Button variant='contained' color="error" endIcon={<DeleteIcon />}>DELETE</Button>
											}
										</div>
									</div>
								</Card>
							</Grid>
						</Grid>
					</div>



				</div>
			</Main>
		</Box>

	);
}
