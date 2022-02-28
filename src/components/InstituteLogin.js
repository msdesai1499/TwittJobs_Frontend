import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function InstituteLogin() {

	const navigate = useNavigate();
	useEffect(() => {
		document.title = "Institute Login Page";
	}, []);


	const [Institute, setInstitute] = useState({});

	const handleForm = (e) => {
		console.log(Institute);

		getDatafromServer(Institute);
		e.preventDefault();
	}


	const getDatafromServer = (data) => {



		axios.post(`${base_url}/login/institute`, data).then(
			(response) => {
				if ((response.data) === "Please Enter Valid Login Details") {

					toast.error("Please Enter Valid Login Details");
				}
				else {

					console.log(response.data);
					document.cookie = response.data;
					navigate("/institutehome");
				}


			}, (error) => {
				console.log(error);
				console.log("Error");
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
							Sign in as Institute
						</Typography>
						<form onSubmit={handleForm}>
							<Box noValidate sx={{ mt: 1 }}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									onChange={(e) => {
										setInstitute({ ...Institute, instituteemail: e.target.value })
									}}
								/>
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={(e) => {
										setInstitute({ ...Institute, institutePassword: e.target.value })
									}}
								/>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<Link href="#" variant="body2">
											Forgot password?
										</Link>
									</Grid>
									<Grid item>
										<Link href="#" variant="body2">
											{"Don't have an account? Sign Up"}
										</Link>
									</Grid>
								</Grid>
							</Box>
						</form>
					</Box>

				</Container>


			</div>
		</div>
	);
}

export default InstituteLogin;
