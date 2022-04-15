import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Editor } from '@tinymce/tinymce-react';

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
import { useRef } from 'react';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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


export default function ContactUs() {
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};

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
								<b>Happy to hear from you...</b>
							</Typography>

							<Box component="form" noValidate sx={{ mt: 1 }} style={{ paddingBottom: '1rem' }}>
								<Grid container columnSpacing={3} rowSpacing={2} style={{ width: '50rem', paddingTop: '1rem' }}>
									<Grid item xs={4}>
										<TextField
											fullWidth
											label="Name"
											type="text"
										/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											fullWidth
											label="Email"
											type="email"
										/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											fullWidth
											label="Contact No"

										/>
									</Grid>
									<Grid item xs={4}>
										<FormControl fullWidth>
											<InputLabel>Subject Name</InputLabel>
											<Select
												fullWidth
												label="Subject Name"

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
									<Grid item xs={4}>
										<FormControl fullWidth>
											<InputLabel>Belongs To</InputLabel>
											<Select
												fullWidth
												label="Belongs To"

											>
												<MenuItem value="Individual">Individual</MenuItem>
												<MenuItem value="Institute/School">Institute/School</MenuItem>
												<MenuItem value="Coaching Class">Coaching Class</MenuItem>
												<MenuItem value="Tutor">Tutor</MenuItem>
												<MenuItem value="Other">Other</MenuItem>


											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={4}>
										<FormControl fullWidth>
											<InputLabel>Intend To</InputLabel>
											<Select
												fullWidth
												label="Intend To"

											>
												<MenuItem value="Know More">Know More</MenuItem>
												<MenuItem value="Take Subscription">Take Subscription</MenuItem>
												<MenuItem value="Plan a meeting">Plan a meeting</MenuItem>

												<MenuItem value="Other">Other</MenuItem>


											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={4}>
										<Button fullWidth variant='contained' color='warning'>To Know more</Button>
									</Grid>
									<Grid item xs={4}>
										<Button fullWidth variant='contained' color='success'>Interested to Subscribe</Button>
									</Grid>
									<Grid item xs={4}>
										<Button fullWidth variant='contained' color='primary'>Interested to Meet</Button>
									</Grid>
									<Grid item xs={12}>
										<Editor apiKey="xx25k2b5mqr063n0g3w6t5qzf6spgc09m2rnm1jkaohib6so"
											onInit={(evt, editor) => editorRef.current = editor}
											initialValue="<p>Enter your Message Here.</p>"
											init={{
												height: 200,
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
										<Button fullWidth style={{ height: '3.5rem' }} variant='contained' color='primary' >Submit Now</Button>
									</Grid>
								</Grid>
								<div style={{ paddingTop: '3rem' }}>
									<LocationOnIcon sx={{ fontSize: '3rem' }} style={{ marginLeft: '12rem' }} color='error' />
									<LocalPhoneIcon sx={{ fontSize: '3rem' }} style={{ marginLeft: '10rem' }} color='success' />
									<MailIcon sx={{ fontSize: '3rem' }} style={{ marginLeft: '10rem' }} color='primary' />
								</div>
								<div >
									<b style={{ paddingLeft: '5rem' }}>7/C, SUKHAWANI CLASSIC CHS, </b>
									<b style={{ paddingLeft: '2rem' }}>+91- 7420892902</b>
									<b style={{ paddingLeft: '4rem' }}>info@twittjobs.com</b>
								</div>
								<div style={{ paddingBottom: '1rem' }}><b style={{ paddingLeft: '7rem' }}>PIMPRI, PUNE-411018</b> </div>




							</Box>
						</Box>
						<div className='wrapper' style={{ backgroundColor: '#2074d4' }}>
							<div className='container'>
								<Typography variant='h6' component='h1' style={{ color: 'snow' }}>
									<b>Copyright © twittjobs.</b> All rights reserved

									<b style={{ paddingLeft: '33rem' }}>Terms and Conditions</b> <b style={{ paddingLeft: '2rem' }}>  Privacy Policy</b>

								</Typography>
							</div>
						</div>

					</Card>






					<div style={{ paddingBottom: '1rem' }}></div>
				</div>
			</div>
		</body>
	);
}



