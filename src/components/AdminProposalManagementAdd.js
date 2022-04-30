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



export default function AdminProposalManagementAdd() {


	const navigate = useNavigate();

	const handleLogout = () => {

		document.cookie = null;
		navigate("/");

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
										title="Proposal Management"
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
																<FormControl fullWidth>
																	<InputLabel id="demo-simple-select-label">Select Institue</InputLabel>
																	<Select

																		label="Select Institue"

																	>
																		<MenuItem value="MIT Academy of Engineering">MIT Academy of Engineering</MenuItem>
																		<MenuItem value="Dr. Babasaheb Ambedkar Marathwada University">Dr. Babasaheb Ambedkar Marathwada University</MenuItem>
																		<MenuItem value="Dr. Babasaheb Ambedkar Technological University">Dr. Babasaheb Ambedkar Technological University</MenuItem>
																		<MenuItem value="Gondwana University">Gondwana University</MenuItem>
																		<MenuItem value="	College of Engineering, Pune (COEP)">	College of Engineering, Pune (COEP)</MenuItem>
																		<MenuItem value="Government College of Engineering, Aurangabad">Government College of Engineering, Aurangabad</MenuItem>
																		<MenuItem value="	Government College of Engineering, Karad">	Government College of Engineering, Karad</MenuItem>
																		<MenuItem value="	Government College of Engineering, Amravati">	Government College of Engineering, Amravati</MenuItem>
																		<MenuItem value="Veermata Jijabai Technological Institute">Veermata Jijabai Technological Institute</MenuItem>
																		<MenuItem value="Walchand College of Engineering">Walchand College of Engineering</MenuItem>
																		<MenuItem value="	Sardar Patel College of Engineering">	Sardar Patel College of Engineering</MenuItem>
																		<MenuItem value="Shri Guru Gobind Singhji Institute of Engineering and Technology">Shri Guru Gobind Singhji Institute of Engineering and Technology</MenuItem>
																		<MenuItem value="Usha Mittal Institute of Technology">Usha Mittal Institute of Technology</MenuItem>
																		<MenuItem value="Institute of Chemical Technology">Institute of Chemical Technology</MenuItem>
																		<MenuItem value="	Dr. Babasaheb Ambedkar Technological University">	Dr. Babasaheb Ambedkar Technological University</MenuItem>
																		<MenuItem value="	Department of Technology, Shivaji University, Kolhapur">	Department of Technology, Shivaji University, Kolhapur</MenuItem>
																		<MenuItem value="University Department of Chemical Technology, Aurangabad">University Department of Chemical Technology, Aurangabad</MenuItem>
																		<MenuItem value="University Institute of Chemical Technology, Kavayitri Bahinabai Chaudhari North Maharashtra University">University Institute of Chemical Technology, Kavayitri Bahinabai Chaudhari North Maharashtra University</MenuItem>
																		<MenuItem value="	University Department of Sant Gadge Baba Amravati University">	University Department of Sant Gadge Baba Amravati University</MenuItem>
																		<MenuItem value="Laxminarayan Institute of Technology">Laxminarayan Institute of Technology</MenuItem>
																		<MenuItem value="Government College of Engineering, Nagpur">Government College of Engineering, Nagpur</MenuItem>



																	</Select>
																</FormControl>
															</Grid>

															<Grid item xs={6}>
																<FormControl fullWidth>
																	<InputLabel id="demo-simple-select-label">Enquiry Name</InputLabel>
																	<Select

																		label="Enquiry Name"

																	>
																		<MenuItem value="Sample">Sample</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
															<Grid item xs={6}>
																<TextField
																	label="Po No."
																	fullWidth
																/>
															</Grid>
															<Grid item xs={6}>
																<TextField
																	type="date"
																	label="Start Date"
																	InputLabelProps={{ shrink: true }}
																	fullWidth
																/>
															</Grid>
															<Grid item xs={6}>
																<TextField
																	type="date"
																	label="Delivery Date"
																	InputLabelProps={{ shrink: true }}
																	fullWidth
																/>
															</Grid>
															<Grid item xs={12}>
																<div >
																	Payment Terms
																</div>
																<Editor apiKey="xx25k2b5mqr063n0g3w6t5qzf6spgc09m2rnm1jkaohib6so"
																	onInit={(evt, editor) => editorRef.current = editor}
																	initialValue="<p>Enter the Payment terms here.</p>"
																	init={{
																		height: 300,
																		menubar: false,
																		plugins: [
																			'advlist autolink lists link image charmap print preview anchor',
																			'searchreplace visualblocks code fullscreen',
																			'insertdatetime media table paste code help wordcount'
																		],
																		toolbar: 'undo redo | formatselect | ' +
																			'bold italic backcolor | alignleft aligncenter ' +
																			'alignright alignjustify | bullist numlist outdent indent | ' +
																			'removeformat | help',
																		content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
																	}}
																/>
															</Grid>
															<Grid item xs={12}>
																<div >
																	Important Note
																</div>
																<Editor apiKey="xx25k2b5mqr063n0g3w6t5qzf6spgc09m2rnm1jkaohib6so"
																	onInit={(evt, editor) => editorRef.current = editor}
																	initialValue="<p>Enter the Important Notes here.</p>"
																	init={{
																		height: 300,
																		menubar: false,
																		plugins: [
																			'advlist autolink lists link image charmap print preview anchor',
																			'searchreplace visualblocks code fullscreen',
																			'insertdatetime media table paste code help wordcount'
																		],
																		toolbar: 'undo redo | formatselect | ' +
																			'bold italic backcolor | alignleft aligncenter ' +
																			'alignright alignjustify | bullist numlist outdent indent | ' +
																			'removeformat | help',
																		content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
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
															<Grid item xs={6}>
																<TextField
																	fullWidth
																	type="date"
																	label='Proposal Date'
																	InputLabelProps={{ shrink: true }}
																/>
															</Grid>
															<Grid item xs={6}>
																<TextField
																	fullWidth
																	type="date"
																	label='PO Date'
																	InputLabelProps={{ shrink: true }}
																/>
															</Grid>
															<Grid item xs={12}>
																<TextField
																	label="First Page Image"
																	fullWidth
																/>
															</Grid>
															<Grid item xs={6}>
																<FormControl fullWidth>
																	<InputLabel>Proposal Status</InputLabel>
																	<Select

																		label="Proposal Status"

																	>
																		<MenuItem value="Proposal Communication">Proposal Communication</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
															<Grid item xs={6}>
																<FormControl fullWidth>
																	<InputLabel>Select Bank Account</InputLabel>
																	<Select

																		label="Select Bank Account"

																	>
																		<MenuItem value="Sachin Tupekar">Sachin Tupekar</MenuItem>
																		<MenuItem value="Swaraj IT Services">Swaraj IT Services</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
															<Grid item xs={12}>
																<FormControl fullWidth>
																	<InputLabel>Customer Contact List</InputLabel>
																	<Select

																		label="Customer Contact List"

																	>
																		<MenuItem value="Sample">Sample</MenuItem>



																	</Select>
																</FormControl>
															</Grid>
														</Grid>
													</div>

												</Card>
											</Grid>
										</Grid>
									</div>
									<div className='container'> <Table striped bordered hover>
										<thead>
											<tr>
												<th>Type</th>
												<th>Description</th>
												<th>Unit</th>
												<th>Units Rate </th>
												<th>Amount </th>




											</tr>
											<tr>
												<td> <FormControl fullWidth>
													<InputLabel>Select Type</InputLabel>
													<Select

														label="Select Type"

													>
														<MenuItem value="Hosting Renew">Hosting Renew</MenuItem>
														<MenuItem value="Domain Renew">Domain Renew</MenuItem>
														<MenuItem value="Development One Time">Development One Time</MenuItem>
														<MenuItem value="Development Monthly">Development Monthly</MenuItem>
														<MenuItem value="Development Weekly">Development Weekly</MenuItem>
														<MenuItem value="Development Hours">Development Hours</MenuItem>


													</Select>
												</FormControl></td>
												<td><TextField
													label="Description"
													fullWidth
												/></td>
												<td><TextField
													label="Unit"
													fullWidth
												/></td>
												<td><TextField
													label="Units Rate"
													fullWidth
												/></td>
												<td><TextField
													label="Amount"
													fullWidth
												/></td>

											</tr>
										</thead>
										<tbody>

										</tbody>
									</Table>
										<div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
											<Button variant="contained" color='success' style={{ marginRight: '1rem' }} endIcon={<DoneIcon />}>Submit</Button>
											<Button variant="contained" endIcon={<ReplyIcon />}>Go Back</Button>
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
