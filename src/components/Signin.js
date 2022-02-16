
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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';


function Signin() {
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

						</Avatar>
						<Typography component="h1" variant="h5">
							Sign up
						</Typography>
						<Box component="form" noValidate sx={{ mt: 3 }}>
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
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Category</InputLabel>
										<Select
											labelId="category"
											id="category"
											label="Select Institute Category"
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
					</Box>

				</Container>



			</div>
		</div>
	);
}

export default Signin;
