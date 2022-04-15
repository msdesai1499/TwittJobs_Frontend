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
import IosShareIcon from '@mui/icons-material/IosShare';
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



export default function InstituteUserReports() {

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

					<div className='container' >
						<Grid container rowSpacing={2} >
							<Grid item xs={12}>
								<Card id="Card1">
									<CardHeader
										title="User Report"
										titleTypographyProps={{ variant: 'h5' }}
										titleStyle={{ textAlign: "center" }}
										style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
									/>
									<Grid container rowSpacing={2} columnSpacing={2} style={{ marginTop: "1rem", paddingLeft: '1rem', paddingRight: '1rem' }}>
										<Grid item xs={4}>
											<TextField
												type="date"
												fullWidth
												label="From Date"
												InputLabelProps={{ shrink: true }}
											/>
										</Grid>
										<Grid item xs={4}>
											<TextField
												type="date"
												fullWidth
												label="To Date"
												InputLabelProps={{ shrink: true }}
											/>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Category</InputLabel>
												<Select
													fullWidth
													label="Category"

												>
													<MenuItem value="Open">Open</MenuItem>
													<MenuItem value="SC">School</MenuItem>
													<MenuItem value="ST">ST</MenuItem>
													<MenuItem value="NT">NT</MenuItem>
													<MenuItem value="OBC">OBC</MenuItem>

												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Prefix</InputLabel>
												<Select
													fullWidth
													label="Prefix"

												>

													<MenuItem value="Mr">Mr</MenuItem>
													<MenuItem value="Mrs">Mrs</MenuItem>
													<MenuItem value="Miss">Miss</MenuItem>
													<MenuItem value="Mx">Mx</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<TextField
												fullWidth
												label="Experience (in years)"

											/>
										</Grid>
										<Grid item xs={4}>
											<TextField
												fullWidth
												label="Role"

											/>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Experience Type</InputLabel>
												<Select
													fullWidth
													label="Experience Type"

												>

													<MenuItem value="Teaching">Teaching</MenuItem>
													<MenuItem value="Industry">Industry</MenuItem>
													<MenuItem value="Research">Research</MenuItem>
													<MenuItem value="Adjunct">Adjunct</MenuItem>
													<MenuItem value="Other">Other</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Qualification</InputLabel>
												<Select
													fullWidth
													label="Qualification"

												>

													<MenuItem value="SSC">SSC</MenuItem>
													<MenuItem value="HSC">HSC</MenuItem>
													<MenuItem value="Graduation">Graduation</MenuItem>
													<MenuItem value="PG">PG</MenuItem>
													<MenuItem value="Diploma">Diploma</MenuItem>
													<MenuItem value="10+2">10+2</MenuItem>
													<MenuItem value="Doctorate">Doctorate</MenuItem>
													<MenuItem value="Post Doctorate">Post Doctorate</MenuItem>
													<MenuItem value="PGDM">PGDM</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<TextField
												type="text"
												fullWidth
												label="Certification"

											/>
										</Grid>
										<Grid item xs={4}>
											<TextField
												type="text"
												fullWidth
												label="Achivement"

											/>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Physical Disability</InputLabel>
												<Select
													fullWidth
													label="Physical Disability"

												>

													<MenuItem value="Yes">Yes</MenuItem>
													<MenuItem value="No">No</MenuItem>

												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<TextField
												type="text"
												fullWidth
												label="Age"

											/>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Gender</InputLabel>
												<Select
													fullWidth
													label="Gender"

												>

													<MenuItem value="Male">Male</MenuItem>
													<MenuItem value="Female">Female</MenuItem>

												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}>
											<FormControl fullWidth>
												<InputLabel id="demo-simple-select-label">Country</InputLabel>
												<Select
													fullWidth
													label="Country"

												>

													<MenuItem value="India">India</MenuItem>
													<MenuItem value="Japan">Japan</MenuItem>
													<MenuItem value="Germany">Germany</MenuItem>
													<MenuItem value="America">America</MenuItem>
													<MenuItem value="Australia">Australia</MenuItem>

												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={4}  >
											<FormControl fullWidth>
												<InputLabel>State </InputLabel>
												<Select
													fullWidth
													labelId="category"
													id="category"
													label="State "

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
												type="text"
												label="Location"
												fullWidth
											/>
										</Grid>
										<div className='container' style={{ paddingTop: '1rem', display: 'flex', justifyContent: 'right' }}>
											<Button variant='contained' color='primary' endIcon={<SearchIcon />}>Search</Button>
											<Button variant="contained" color='success' style={{ marginLeft: '1rem' }} endIcon={<IosShareIcon />}>Export Report</Button>
										</div>
									</Grid>


									<div className='container' style={{ paddingTop: '1rem' }}>
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>Sr No</th>
													<th> Date</th>
													<th>Name</th>
													<th>Email</th>
													<th>Contact No</th>

													<th>Action </th>


												</tr>
												<tr>
													<td>Sample </td>
													<td>Alandi</td>
													<td>Pune</td>
													<td>12345678</td>
													<td>123@gmail.com</td>


													<td>Sample</td>
												</tr>
											</thead>
											<tbody>

											</tbody>
										</Table>
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
