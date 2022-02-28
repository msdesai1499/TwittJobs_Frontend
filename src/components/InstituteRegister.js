
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function InstituteRegister() {


	useEffect(() => {
		document.title = "Institute Registration Page";
	}, []);

	const [Institute, setInstitute] = useState({});

	//Form Handler
	const handleForm = (e) => {
		console.log(Institute);
		postDatatoServer(Institute);
		e.preventDefault();
	}

	//Creating function to post data on server
	const postDatatoServer = (data) => {

		axios.post(`${base_url}/register/institute`, data).then(
			(response) => {
				console.log(response);
				if (response.data === "Institute Registration Successful") {
					toast.success("Institute added Successfully");
				}
				else {
					toast.error("Error Occurred");
				}
			}, (error) => {
				console.log(error);
				toast.error("Error Occurred");
			}
		)

	}




	return (
		<div>
			<div className='container'>


				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign up
						</Typography>

						<form onSubmit={handleForm}>
							<Box sx={{ mt: 3 }}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											autoComplete="given-name"
											name="I_name"
											required
											fullWidth
											id="name"
											label="Institute Name"
											autoFocus
											onChange={(e) => {
												setInstitute({ ...Institute, instituteName: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">Category</InputLabel>
											<Select
												labelId="category"
												id="category"
												label="Select Institute Category"
												onChange={(e) => {
													setInstitute({ ...Institute, instituteCategory: e.target.value });
												}}
											>
												<MenuItem value={"Distance learning center"}>Distance learning center</MenuItem>
												<MenuItem value={"Service Provider"}>Service Provider</MenuItem>
												<MenuItem value={"Incubation Center"}>Incubation Center</MenuItem>
												<MenuItem value={"Training and Development"}>Training and Development</MenuItem>
												<MenuItem value={"Coaching classes/Institute"}>Coaching classes/Institute</MenuItem>
												<MenuItem value={"School"}>School</MenuItem>
												<MenuItem value={"Other"}>Other</MenuItem>
												<MenuItem value={"Arts,Commmerce & Science"}>Arts,Commmerce & Science</MenuItem>
												<MenuItem value={"Pharmacy"}>Pharmacy</MenuItem>
												<MenuItem value={"Architecture"}>Architecture</MenuItem>
												<MenuItem value={"Engineering"}>Engineering</MenuItem>


											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											autoComplete="email"
											onChange={(e) => {
												setInstitute({ ...Institute, instituteemail: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="contact"
											label="Mobile Number"
											name="contact"
											autoCapitalize="mobile-number"
											onChange={(e) => {
												setInstitute({ ...Institute, instituteMobno: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="password"
											label="Password"
											type="password"
											id="password"
											autoComplete="new-password"
											onChange={(e) => {
												setInstitute({ ...Institute, institutePassword: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="confirm_password"
											label="Confirm Password"
											type="password"
											id="c_password"
											onChange={(e) => {
												setInstitute({ ...Institute, instituteconPassword: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="I_Address"
											label="Institute Address"
											type="address"
											id="address"
											autoComplete="address"
											onChange={(e) => {
												setInstitute({ ...Institute, instituteAddress: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="City"
											label="City"
											type="text"
											id="city"

											onChange={(e) => {
												setInstitute({ ...Institute, instituteCity: e.target.value });
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="p_code"
											label="Pincode"
											type="number"
											id="code"
											autoComplete="pin-code"
											onChange={(e) => {
												setInstitute({ ...Institute, institutePincode: e.target.value });
											}}
										/>
									</Grid>

								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>

							</Box>
						</form>
					</Box>

				</Container>



			</div>
		</div>
	);
}

export default InstituteRegister;
