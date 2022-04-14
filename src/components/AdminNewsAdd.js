import * as React from 'react';
import { useState, useEffect } from 'react';
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
import DoneIcon from '@mui/icons-material/Done';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';
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



export default function AdminNewsAdd() {

	const [AddNews, setAddNews] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form Submitted");
		const loginFormData = new FormData();
		loginFormData.append("file", AddNews.file)
		loginFormData.append("newsheading", AddNews.newsheading)
		loginFormData.append("socialMediaLink", AddNews.socialMediaLink)
		loginFormData.append("noticeSection", AddNews.noticeSection)


		axios({
			method: "post",
			url: `${base_url}/newsSection/newsDetails/addNews`,
			data: loginFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(function (response) {
				//handle success
				if (response.data === "Admin News saved successfully") {
					toast.success("Admin News Added Successfully");
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
							<ListItemButton sx={{ pl: 2 }}>
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
							<ListItemButton sx={{ pl: 2 }}>
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
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Proposal Management" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Inquiry Management" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
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
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Courses" />
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
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Institue Category" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="File Import" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
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
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Posting Result" />
							</ListItemButton>
							<ListItemButton sx={{ pl: 2 }}>
								<ListItemIcon>
									<KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Email status " />
							</ListItemButton>


						</List>
					</Collapse>

				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<div className='container'>
					<form onSubmit={handleSubmit}>
						<div className='container'>
							<Grid container columnSpacing={4}>
								<Grid item xs={12}>
									<Card id="Card1">
										<CardHeader
											title="News Details"
											titleTypographyProps={{ variant: 'h5' }}
											titleStyle={{ textAlign: "center" }}
											style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
										/>
										<div className='container'>
											<Grid container style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
												<Grid item xs={6}>
													<Card style={{ marginRight: "1rem" }}>
														<div className='container'>
															<Grid container style={{ paddingTop: '1rem', paddingBottom: '1rem' }} columnSpacing={2} rowSpacing={2}>
																<Grid item xs={12}>
																	<TextField
																		type='text'
																		fullWidth
																		label='News & Updates Heading'
																		onChange={(e) => {

																			setAddNews({ ...AddNews, newsheading: e.target.value })
																		}}

																	/>

																</Grid>



																<Grid item xs={12}>
																	<TextField
																		type="text"
																		label="Social Media News Post Link"
																		fullWidth

																		onChange={(e) => {

																			setAddNews({ ...AddNews, socialMediaLink: e.target.value })
																		}}
																	/>
																</Grid>
																<Grid item xs={6} >
																	<TextField
																		type="file"
																		required
																		autoFocus
																		fullWidth
																		label="Upload News"
																		InputLabelProps={{ shrink: true }}
																		onChange={(e) => {

																			setAddNews({ ...AddNews, file: e.target.files[0] })
																		}}
																	/>
																</Grid>


															</Grid>
														</div>

													</Card>
												</Grid>
												<Grid item xs={6}>
													<Card>
														<div className='container'>
															<Grid container style={{ paddingTop: '1rem', paddingBottom: '1rem' }} columnSpacing={2} rowSpacing={2}>


																<Grid item xs={12}>
																	<div>
																		Notice Section
																	</div>
																	<Grid item xs={12}>
																		<TextField
																			type="text"
																			label="Notice Section"
																			fullWidth
																			onChange={(e) => {

																				setAddNews({ ...AddNews, noticeSection: e.target.value })
																			}}

																		/>
																	</Grid>
																</Grid>

															</Grid>
														</div>

													</Card>
												</Grid>
											</Grid>
										</div>

										<div style={{ paddingTop: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'right', paddingRight: '1rem' }}>
											<Button type="submit" variant="contained" color='success' style={{ marginRight: '1rem' }} endIcon={<DoneIcon />}>Submit</Button>
											<Button variant="contained" endIcon={<ReplyIcon />}>Go Back</Button>
										</div>


									</Card>
								</Grid>
							</Grid>
						</div>
					</form>


				</div>
			</Main>
		</Box>

	);
}