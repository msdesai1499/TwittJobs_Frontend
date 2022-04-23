import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import CssBaseline from '@mui/material/CssBaseline';
import CardHeader from '@mui/material/CardHeader';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@material-ui/core/Card';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GroupsIcon from '@mui/icons-material/Groups';
import pic1 from './1.png';
import pic2 from './2.png';
import pic3 from './3.png';
import pic4 from './4.png';
import pic5 from './5.png';
import pic6 from './6.jpg';
import pic7 from './7.jpg';
import pic8 from './8.png';
import { createTheme, MenuItem, ThemeProvider } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import { width } from '@mui/system';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';


function Home() {


	const getInstituteDetail = (orgid) => {
		axios.get(`${base_url}/company/companyDetails`, { params: { id: orgid } }).then(
			(response) => {
				//For Success
				console.log(response)
				console.log(response.data.organizationName)
				return response.data.organizationName;



			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};




	let items = ["item1", "item2", "item3"];

	const getAllInstituteJobsFromServer = () => {
		axios.get(`${base_url}/company/posting/alljobs`).then(
			(response) => {
				//For Success
				console.log("Hello" + response)
				console.log(response.data)
				setVal(response.data);

			},
			(error) => {
				//For Error
				console.log(error)
				toast.error("Something went wrong");
			}
		);
	};



	useEffect(() => {
		getAllInstituteJobsFromServer();

	}, []);

	const [val, setVal] = useState([])


	return (
		<body style={{ backgroundColor: 'grey' }}>



			<div>

				<div className='wrapper' style={{ marginTop: '1rem', backgroundColor: 'grey' }}>

					<Card style={{ marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}>

						<Box
							sx={{
								marginTop: 8,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>

							<Typography component="h2" variant="h4" >
								<b>Job destination to satisfy your teaching aspirations</b>
							</Typography>
							<Typography component="h1" variant="h5" style={{ paddingTop: '1rem' }} >
								<b>538+ jobs...a click away</b>
							</Typography>
							<Box component="form" noValidate sx={{ mt: 1 }} style={{ paddingBottom: '1rem' }}>
								<Grid container columnSpacing={3} rowSpacing={2} style={{ width: '50rem', paddingTop: '1rem' }}>
									<Grid item xs={6}>
										<FormControl fullWidth>
											<InputLabel>Educational Discipline</InputLabel>
											<Select
												fullWidth
												label="Educational Discipline"

											>
												<MenuItem value="Distance Learning Center">Distance Learning Center</MenuItem>
												<MenuItem value="Training and Development">Training and Development</MenuItem>
												<MenuItem value="Coaching Tutor">Coaching Tutor</MenuItem>
												<MenuItem value="Home Tutor">Home Tutor</MenuItem>
												<MenuItem value="Agriculture Education">Agriculture Education</MenuItem>
												<MenuItem value="Liberal Education">Liberal Education</MenuItem>
												<MenuItem value="Business Education">Business Education</MenuItem>
												<MenuItem value="Vocational Education">Vocational Education</MenuItem>
												<MenuItem value="Polytechnic Education">Polytechnic Education</MenuItem>
												<MenuItem value="Law Education">Law Education</MenuItem>
												<MenuItem value="Management Education">Management Education</MenuItem>
												<MenuItem value="Commerce Education">Commerce Education</MenuItem>
												<MenuItem value="Science Education">Science Education</MenuItem>
												<MenuItem value="Arts Education">Arts Education</MenuItem>
												<MenuItem value="Arts,Commerce & Science">Arts,Commerce & Science</MenuItem>
												<MenuItem value="Pharmacy Education">Pharmacy Education</MenuItem>
												<MenuItem value="Medical Education">Medical Education</MenuItem>
												<MenuItem value="Engineering and Technology">Engineering and Technology</MenuItem>
												<MenuItem value="Pre-Primary">Pre-Primary</MenuItem>

											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={6}>
										<FormControl fullWidth>
											<InputLabel>Course Name</InputLabel>
											<Select
												fullWidth
												label="Course Name"

											>
												<MenuItem value="Computer Science">Computer Science</MenuItem>
												<MenuItem value="Chemistry">Chemistry</MenuItem>
												<MenuItem value="Trainer">Trainer</MenuItem>
												<MenuItem value="M Phil">M Phil</MenuItem>
												<MenuItem value="Bachelors">Bachelors</MenuItem>
												<MenuItem value="Secondary Schooling">Secondary Schooling </MenuItem>
												<MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
												<MenuItem value="Industrial Engineering">Industrial Engineering</MenuItem>
												<MenuItem value="CA">CA</MenuItem>
												<MenuItem value="Graduation in Engineering and Medical">Graduation in Engineering and Medical</MenuItem>
												<MenuItem value="M.Tech">M.Tech</MenuItem>
												<MenuItem value="B.Tech">B.Tech</MenuItem>
												<MenuItem value="Coaching">Coaching</MenuItem>
												<MenuItem value="Training and Development">Training and Development</MenuItem>
												<MenuItem value="State Board">State Board</MenuItem>
												<MenuItem value="CBSE">CBSE</MenuItem>
												<MenuItem value="Chartered Accountant">Chartered Accountant</MenuItem>
												<MenuItem value="SSC,CBSC">SSC,CBSC</MenuItem>
												<MenuItem value="CBSC">CBSC</MenuItem>
												<MenuItem value="Mathematics">Mathematics</MenuItem>
												<MenuItem value="Schooling">Schooling</MenuItem>
												<MenuItem value="BCA">BCA</MenuItem>
												<MenuItem value="Management Record">Management Record</MenuItem>
												<MenuItem value="Nursery">Nursery</MenuItem>

											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={10}>
										<TextField
											fullWidth
											label="Enter Keyword"
										/>
									</Grid>
									<Grid item xs={2}>
										<Button style={{ height: '3.5rem', width: '6.8rem' }} variant='contained' color='primary' endIcon={<SearchIcon />}>Search</Button>
									</Grid>
								</Grid>
								<div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem', paddingBottom: '5rem' }} >
									<FacebookIcon sx={{ fontSize: 45, color: '#4267B2' }} />
									<TwitterIcon sx={{ fontSize: 45, color: '#00acee' }} />
									<LinkedInIcon sx={{ fontSize: 45, color: '#0072b' }} />
									<YouTubeIcon sx={{ fontSize: 45, color: '#FF0000' }} />
									<InstagramIcon sx={{ fontSize: 45, color: '#8a3ab9' }} />
								</div>




							</Box>
						</Box>
					</Card>





					<Card style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<div id='container' style={{ marginTop: '1rem', marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem' }}>
							<div className='container' style={{ display: 'flex', justifyContent: 'center' }}> <h3>Explore Other Services</h3></div>
							<div className='photobanner' style={{ paddingTop: '3rem' }}>
								<img src={pic1}></img><img src={pic2} alt="" /><img src={pic3} alt="" />
								<img src={pic4}></img><img src={pic5} alt="" />
								<img src={pic6}></img><img src={pic7}></img><img src={pic8}></img>
								<img src={pic1}></img><img src={pic2} alt="" /><img src={pic3} alt="" />
								<img src={pic4}></img><img src={pic5} alt="" />
								<img src={pic6}></img><img src={pic7}></img><img src={pic8}></img>


							</div>

						</div>
					</Card>
					{val.map((item, index) => {
						return <Card style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem', height: '10rem' }}>
							<Grid container columnGap={8}>
								<Grid item xs={4}>
									<img src={pic4} style={{ height: '110px', maxWidth: '400px', paddingRight: '2rem', paddingTop: '1rem', paddingLeft: '1rem' }} ></img>
								</Grid>
								<Grid item xs={7}>
									<h6 style={{ paddingTop: '1rem' }}>{getInstituteDetail(item.orgId)}</h6>
									<h6><b>{item.postName}</b></h6>


								</Grid>
							</Grid>
							<div className='container' style={{ display: 'flex', justifyContent: 'right' }}>
								<Button variant='contained' color='primary' >GET DETAILS</Button>
								<Button variant='contained' color='success' style={{ marginLeft: '1rem' }} >APPLY NOW</Button>
							</div>
						</Card>
					})}
					<Card style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<Grid container>
							<Grid item xs={12}>
								<div className='wrapper' style={{ backgroundColor: '#2074d4' }}>
									<div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem' }}>
										<h3 style={{ color: 'snow' }}><b>Your new job is here!!</b></h3>

									</div>
									<div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem', paddingBottom: '3rem' }}>
										<Button variant='contained' style={{ backgroundColor: 'snow', color: "black", fontWeight: 'bold', fontSize: '1rem' }}>Submit Your Resume</Button>

									</div>
								</div>
								<Divider />
								<div className='container' style={{ display: 'flex', justifyContent: 'left', paddingTop: '2rem', paddingLeft: '7.5rem' }}>
									<PersonIcon sx={{ fontSize: '6rem' }} color='primary' />
									<div className='container' style={{ display: 'flex', justifyContent: 'center', marginLeft: '12rem', marginRight: '-4rem' }}>
										<ConnectWithoutContactIcon sx={{ fontSize: '6rem' }} color='primary' />

									</div>
									<div className='container' style={{ display: 'flex', justifyContent: 'center', marginRight: '-6rem' }}>
										<GroupsIcon sx={{ fontSize: '6rem' }} color='primary' />
									</div>
								</div>
								<div className='container' style={{ display: 'flex', justifyContent: 'left', paddingTop: '.5rem' }} >
									<h2 style={{ paddingLeft: '8rem' }} >538</h2>
									<div className='container' style={{ display: 'flex', justifyContent: 'right' }}>
										<h2>1204</h2>
									</div>
									<div className='container' style={{ display: 'flex', justifyContent: 'right', paddingRight: '8rem' }}>
										<h2>76520</h2>
									</div>
								</div>
								<div className='container' style={{ paddingBottom: '2rem', display: 'flex', paddingTop: '.5rem' }} >
									<h3 style={{ paddingLeft: '1rem' }} >Total Vacancy Available</h3>
									<h3 style={{ paddingLeft: '8rem' }} >Total Organization Connected</h3>
									<h3 style={{ paddingLeft: '8rem' }} >Total Candidate Registered </h3>
								</div>
								<Divider />
								<div className='wrapper' style={{ backgroundColor: '#2074d4' }}>
									<div className='container'>
										<Typography variant='h6' component='h1' style={{ color: 'snow' }}>
											<b>Copyright © twittjobs.</b> All rights reserved

											<b style={{ paddingLeft: '33rem' }}>Terms and Conditions</b> <b style={{ paddingLeft: '2rem' }}>  Privacy Policy</b>

										</Typography>
									</div>
								</div>


							</Grid>
						</Grid>
					</Card>
					<div style={{ paddingBottom: '1rem' }}></div>
				</div>
			</div>
		</body>
	);
}

export default Home;
