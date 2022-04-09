import * as React from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Toolbar from '@mui/material/Toolbar';
import PublishIcon from '@mui/icons-material/Publish';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
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
import ArticleIcon from '@mui/icons-material/Article';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AlignVertical from '@mui/icons-material/AlignVerticalBottom';
import LocationCity from '@mui/icons-material/LocationCity';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import LockIcon from '@mui/icons-material/Lock';
import DoneIcon from '@mui/icons-material/Done';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import PhoneIcon from '@mui/icons-material/Phone';
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



export default function AdminManageUserAdd() {

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

	const [open7, setOpen7] = React.useState(false);

	const handleClickOpen = () => {
		setOpen7(true);
	};

	const handleClose = () => {
		setOpen7(false);
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
							<ListItemButton sx={{ pl: 2 }} component="a" href="/">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Subscriptions plans report" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick1}>
						<ListItemIcon>
							<SettingsIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Settings" />
						{open2 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open2} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/adminmanageuser">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Manage User" />
							</ListItemButton>


						</List>
					</Collapse>
					<ListItemButton onClick={handleClick2}>
						<ListItemIcon>
							<AlignVertical fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Marketing & Promotion" />
						{open3 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open3} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/adminproposalmanagement">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Proposal Management" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/admininquirymanagement">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Inquiry Management" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/admininquirystandards">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Inquiry Standards" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick3}>
						<ListItemIcon>
							<ArticleIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="News Section" />
						{open4 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open4} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/adminnews" >
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="News" />
							</ListItemButton>
						</List>
					</Collapse>
					<ListItemButton onClick={handleClick4}>
						<ListItemIcon>
							<LocationCity fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Institute Setting" />
						{open5 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open5} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/admininstitutecategory">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Institue Category" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/admininstitutefileimport">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="File Import" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/admininstitutedetails">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Institue Details" />
							</ListItemButton>

						</List>
					</Collapse>
					<ListItemButton onClick={handleClick5}>
						<ListItemIcon>
							<PublishIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Posting Section" />
						{open6 ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open6} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 2 }} component="a" href="/adminpostingresult">
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Posting Result" />
							</ListItemButton>

						</List>
					</Collapse>

				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div className='container'>

					<div className='container'>
						<Grid container columnSpacing={4}>
							<Grid item xs={12}>
								<Card id="Card1">
									<CardHeader
										title="Manage User"
										titleTypographyProps={{ variant: 'h5' }}
										titleStyle={{ textAlign: "center" }}
										style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
									/>
									<div className='container'>
										<Grid container style={{ paddingTop: '1rem', paddingBottom: '1rem' }} columnSpacing={2} rowSpacing={2} >
											<Grid item xs={12}>
												<Card style={{ marginRight: "1rem" }}>
													<div className='container'>
														<Grid container style={{ paddingTop: '1rem', paddingBottom: '1rem' }} columnSpacing={2} rowSpacing={2}>
															<Grid item xs={4}>
																<TextField
																	fullWidth
																	label="First Name"
																	type="text"
																/>
															</Grid>

															<Grid item xs={4}>
																<TextField
																	label="Last Name"
																	fullWidth
																/>
															</Grid>
															<Grid item xs={4}>
																<TextField
																	type="email"
																	label="Email"
																	autoComplete='email'
																	fullWidth
																/>
															</Grid>
															<Grid item xs={4}>
																<TextField
																	label="Mobile No."
																	fullWidth
																	autoComplete='on'
																/>
															</Grid>
															<Grid item xs={4}>
																<FormControl fullWidth>
																	<InputLabel>Account Status</InputLabel>
																	<Select

																		label="Account Status"

																	>
																		<MenuItem value="Active">Active</MenuItem>
																		<MenuItem value="Inactive">Inactive</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
															<Grid item xs={4}>
																<FormControl fullWidth>
																	<InputLabel>Member Group</InputLabel>
																	<Select

																		label="Member Group"

																	>
																		<MenuItem value="Institute">Institue</MenuItem>
																		<MenuItem value="Super Admin">Super Admin</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
															<Grid item xs={12}>
																<TextField
																	type="text"
																	label="Password"

																	fullWidth
																/>
															</Grid>
															<div style={{ display: 'flex', justifyContent: 'left', paddingTop: '1rem', paddingLeft: '1rem' }}>
																<Button variant='contained' color='success' endIcon={<DoneIcon />}>Submit</Button>
															</div>



														</Grid>
													</div>

												</Card>
											</Grid>

											<Grid item xs={12}>
												<Card>
													<CardHeader
														title="Change Email"
														titleTypographyProps={{ variant: 'h5' }}
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
													/>
													<div className='container' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
														<Grid item container columnSpacing={2}>
															<Grid item xs={12}>
																<TextField
																	type="email"
																	label="New Email"
																	fullWidth
																	autoComplete='email'
																/>
															</Grid>

															<div style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'left' }}>
																<Button variant='contained' color="primary" endIcon={<MailIcon />}>Change Email</Button>
															</div>
														</Grid>
													</div>

												</Card>
											</Grid>
											<Grid item xs={6}>
												<Card>
													<CardHeader
														title="Change Password"
														titleTypographyProps={{ variant: 'h5' }}
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
													/>
													<div className='container' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
														<Grid item container columnSpacing={2} rowSpacing={2}>
															<Grid item xs={12}>
																<TextField
																	type="password"
																	label="New Password"
																	fullWidth
																/>
															</Grid>
															<Grid item xs={12}>
																<TextField
																	type="password"
																	label="Confirm Password"
																	fullWidth
																/>
															</Grid>
															<div style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'left' }}>
																<Button variant='contained' color="primary" endIcon={<LockIcon />}>Change Password</Button>
															</div>
														</Grid>
													</div>

												</Card>
											</Grid>
											<Grid item xs={6}>
												<Card>
													<CardHeader
														title="Change Contact Number"
														titleTypographyProps={{ variant: 'h5' }}
														titleStyle={{ textAlign: "center" }}
														style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
													/>
													<div className='container' style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
														<Grid item container columnSpacing={2}>
															<Grid item xs={12}>
																<TextField
																	type="Number"
																	label="New Contact Number"
																	fullWidth
																/>
															</Grid>

															<div style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'left' }}>
																<Button variant='contained' color="primary" endIcon={<PhoneIcon />}>Change Number</Button>
															</div>
														</Grid>
													</div>

												</Card>
											</Grid>
										</Grid>
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
