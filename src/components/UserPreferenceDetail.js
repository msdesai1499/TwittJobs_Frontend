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
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SaveIcon from '@mui/icons-material/Save';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ClearIcon from '@mui/icons-material/Clear';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InputBase from '@mui/material/InputBase';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActive';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUpload';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import ArticleIcon from '@mui/icons-material/Article';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Paper from '@mui/material/Paper';
import DirectionsIcon from '@mui/icons-material/Directions';
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



export default function UserPreferenceDetail() {

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
							<ListItemButton sx={{ pl: 2 }} >
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/userportfolio" >
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
							Post preference
						</Typography>
					</div>

					<div className='container' style={{ paddingTop: "2rem", paddingLeft: "9rem" }}>

						<Grid container rowSpacing={0} columnSpacing={4}>
							<Grid item >
								<FormGroup>
									<FormControlLabel control={<Checkbox />} label="Full Time/ Regular" />
									<FormControlLabel control={<Checkbox />} label="Accounts Manager" />
									<FormControlLabel control={<Checkbox />} label="Arts Primary Teacher" />
									<FormControlLabel control={<Checkbox />} label="Associate Professor" />
									<FormControlLabel control={<Checkbox />} label="Business Development & Operations Manager" />
									<FormControlLabel control={<Checkbox />} label="Coach" />
									<FormControlLabel control={<Checkbox />} label="English (PGT,TGT,PRT)" />
									<FormControlLabel control={<Checkbox />} label="Freelance AWS Trainers For E-learning Platform" />
									<FormControlLabel control={<Checkbox />} label="ISA Incharge" />
									<FormControlLabel control={<Checkbox />} label="Lab Assistant" />
									<FormControlLabel control={<Checkbox />} label="Math (PGT)" />
									<FormControlLabel control={<Checkbox />} label="PHP Developer" />
									<FormControlLabel control={<Checkbox />} label="Assistant Professor" />
									<FormControlLabel control={<Checkbox />} label="BCA teacher" />
									<FormControlLabel control={<Checkbox />} label="CA Faculty" />
									<FormControlLabel control={<Checkbox />} label="Counsellor" />
									<FormControlLabel control={<Checkbox />} label="Expert" />



								</FormGroup>
							</Grid>
							<Grid item>
								<FormGroup>
									<FormControlLabel control={<Checkbox />} label="Pre-primary Teacher" />
									<FormControlLabel control={<Checkbox />} label="Professor" />
									<FormControlLabel control={<Checkbox />} label="Science Primary Teacher" />
									<FormControlLabel control={<Checkbox />} label="Teacher" />
									<FormControlLabel control={<Checkbox />} label="Notification Through Mobile" />
									<FormControlLabel control={<Checkbox />} label="Part Time / Adhoc / Consolated" />
									<FormControlLabel control={<Checkbox />} label="Android Developer" />
									<FormControlLabel control={<Checkbox />} label="Mass Media (PGT)" />
									<FormControlLabel control={<Checkbox />} label="PGT English Teacher" />
									<FormControlLabel control={<Checkbox />} label="Pre Primary Teacher" />
									<FormControlLabel control={<Checkbox />} label="Primary Teacher English" />
									<FormControlLabel control={<Checkbox />} label="Quality Process Incharge" />
									<FormControlLabel control={<Checkbox />} label="Sports Incharge (Primary)" />
									<FormControlLabel control={<Checkbox />} label="Tutor / Teacher" />
									<FormControlLabel control={<Checkbox />} label="Branch Manager / Co-ordinator" />
									<FormControlLabel control={<Checkbox />} label="Career Counsellor" />
									<FormControlLabel control={<Checkbox />} label="Divisional Manager" />



								</FormGroup>
							</Grid>
							<Grid item >
								<FormGroup>
									<FormControlLabel control={<Checkbox />} label="Full Stack Trainer" />
									<FormControlLabel control={<Checkbox />} label="IT Technical Support" />
									<FormControlLabel control={<Checkbox />} label="Lecturer" />
									<FormControlLabel control={<Checkbox />} label="Maths Primary Teacher" />
									<FormControlLabel control={<Checkbox />} label="Planning Manager / Time Table Co-ordinator" />
									<FormControlLabel control={<Checkbox />} label="Preschool Teacher" />
									<FormControlLabel control={<Checkbox />} label="Psychology (PGT)" />
									<FormControlLabel control={<Checkbox />} label="Senior English Teacher" />
									<FormControlLabel control={<Checkbox />} label="Tutor / Faculty / Teacher" />
									<FormControlLabel control={<Checkbox />} label="Notification Through Email" />
									<FormControlLabel control={<Checkbox />} label="Accountancy (PGT)" />
									<FormControlLabel control={<Checkbox />} label="Area Sales Manager" />
									<FormControlLabel control={<Checkbox />} label="Assistance Professor" />
									<FormControlLabel control={<Checkbox />} label="Faculty coordinator" />
									<FormControlLabel control={<Checkbox />} label="HR Executive/ Office Superitendent" />
									<FormControlLabel control={<Checkbox />} label="Jury" />
								</FormGroup>
							</Grid>
						</Grid>
						<div className='container' style={{ display: "flex", justifyContent: "right", paddingBottom: "1rem" }}>
							<Button variant='contained' color="success" endIcon={<DoneIcon />}>Submit Preference</Button>
						</div>
					</div>
					<Divider />
					<div className='container' style={{ paddingTop: "1rem" }}>
						<h5>Institute Preference</h5>

						<div className='container'>
							<Grid container columnSpacing={3}>
								<Grid item xs={3}>
									<FormControl style={{ paddingTop: "1rem" }} fullWidth>
										<InputLabel style={{ paddingTop: "1rem" }}>Institute Category</InputLabel>
										<Select
											fullWidth
											labelId="category"
											id="category"
											label="Institute Category"
											required
										>
											<MenuItem value={"Engineering"}>Engineering</MenuItem>
											<MenuItem value={"Architecture"}>Architecture</MenuItem>
											<MenuItem value={"Pharmacy"}>Pharmacy</MenuItem>
											<MenuItem value={"Arts,Commerce & Scienece"}>Arts,Commerce & Scienece</MenuItem>
											<MenuItem value={"Other"}>Other</MenuItem>
											<MenuItem value={"School"}>School</MenuItem>
											<MenuItem value={"Training & Development"}>Training & Development</MenuItem>
											<MenuItem value={"Incubation Center"}>Incubation Center</MenuItem>
											<MenuItem value={"Service Provider"}>Service Provider</MenuItem>
											<MenuItem value={"Distance Learning Center"}>Distance Learning Center</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl style={{ paddingTop: "1rem" }} fullWidth>
										<InputLabel style={{ paddingTop: "1rem" }}>Location</InputLabel>
										<Select
											fullWidth
											labelId="category"
											id="category"
											label="Location"
											required
										>
											<MenuItem value={"Pune"}>Pune</MenuItem>
											<MenuItem value={"Nashik"}>Nashik</MenuItem>
											<MenuItem value={"Mumbai"}>Mumbai</MenuItem>
											<MenuItem value={"Ahmednagar"}>Ahmednagar</MenuItem>
											<MenuItem value={"Dadar Nagar Haveli"}>Dadar Nagar Haveli</MenuItem>
											<MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
											<MenuItem value={"Alephata"}>Alephata</MenuItem>
											<MenuItem value={"Koraput"}>Koraput</MenuItem>
											<MenuItem value={"Shirur"}>Shirur</MenuItem>
											<MenuItem value={"Yeola"}>Yeola</MenuItem>
											<MenuItem value={"Andarsul"}>Andarsul</MenuItem>
											<MenuItem value={"Junnar"}>Junnar</MenuItem>
											<MenuItem value={"Satara"}>Satara</MenuItem>
											<MenuItem value={"Dhule"}>Dhule</MenuItem>
											<MenuItem value={"Khed"}>Khed</MenuItem>

										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={6} style={{ paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
									<Paper
										component="form"
										sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, }}
									>

										<InputBase
											sx={{ ml: 1, flex: 1 }}
											placeholder="Search"
											inputProps={{ 'aria-label': 'search' }}
										/>
										<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
											<SearchIcon />
										</IconButton>
										<Divider sx={{ height: 28, m: 0.5, color: "red" }} orientation="vertical" />

									</Paper>
								</Grid>
							</Grid>
						</div>
						<div className='container' style={{ paddingTop: "1rem" }}>

							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Sr No</th>
										<th><ThumbsUpDownIcon /></th>
										<th>Level</th>
										<th>Name of Institute</th>
										<th>Address</th>
										<th>Category</th>
										<th>City</th>

									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1-01-2022</td>
										<td> <input type="checkbox"></input></td>
										<td>10th</td>
										<td>MIT</td>
										<td>SPPU</td>
										<td>31-01-2022</td>
										<td>Yeola</td>

									</tr>
								</tbody>
							</Table>
							<div style={{ display: "flex", justifyContent: "right", paddingBottom: "1rem" }}>
								<Button variant='contained' endIcon={<SaveIcon />}>Save Preference</Button>
							</div>
						</div>
					</div>
					<Divider />
					<div className='container' style={{ paddingTop: "1rem" }}>
						<h5>List of Preferred Institute</h5>
						<div style={{ paddingTop: "1rem" }}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Sr No</th>

										<th>Name of Institute</th>
										<th>Address</th>
										<th>Category</th>
										<th>City</th>
										<th>Action</th>

									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1-01-2022</td>

										<td>10th</td>
										<td>MIT</td>
										<td>SPPU</td>
										<td>31-01-2022</td>
										<td><Button variant='contained' color='error' ><ClearIcon /></Button></td>

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
