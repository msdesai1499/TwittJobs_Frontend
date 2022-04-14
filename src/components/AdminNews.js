import * as React from 'react';
import { useState, useEffect } from 'react';
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
import ArticleIcon from '@mui/icons-material/Article';
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
import AlignVertical from '@mui/icons-material/AlignVerticalBottom';
import LocationCity from '@mui/icons-material/LocationCity';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
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



export default function AdminNews() {


	const getAllNewsFromServer = () => {
		axios.get(`${base_url}/newsSection/newsDetails`).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data)

				setBanks(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};


	useEffect(() => {
		getAllNewsFromServer();
	}, []);


	const [banks, setBanks] = useState([])

	const renderCard = (hostels, index) => {

		return (

			<tr>
				<td>{hostels.newsheading}</td>
				<td>{hostels.socialMediaLink}</td>
				<td>{hostels.noticeSection}</td>


				<td><Button variant="contained"><BuildCircleIcon /></Button></td>
			</tr>

		);
	};



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
						<Grid container rowSpacing={2}>
							<Grid item xs={12}>
								<Card id="Card1">
									<CardHeader
										title="News Details"
										titleTypographyProps={{ variant: 'h5' }}
										titleStyle={{ textAlign: "center" }}
										style={{ backgroundColor: "#D3D3D3", textAlign: "center" }}
									/>
									<div className='container' style={{ paddingBottom: "1rem", paddingTop: "1rem", display: "flex", justifyContent: "right" }}>
										<Button component="a" href="/adminnewsadd" variant='contained' color="success" endIcon={<AddIcon />}>Add New</Button>
										<Button variant='contained' color="error" style={{ marginLeft: "1rem" }} endIcon={<DeleteIcon />}>DELETE</Button>
									</div>
									<div className='container'>
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>News Heading</th>
													<th>Social Media Link</th>
													<th>Notice Section</th>


													<th>Action</th>

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