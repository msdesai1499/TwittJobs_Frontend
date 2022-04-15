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


export default function About() {
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
						<Grid container columnSpacing={2}>
							<Grid item xs={12}>
								<Card style={{ padding: '1rem 1rem 1rem 1rem' }}>
									<CardHeader
										title="Organization Overview"
										titleTypographyProps={{ variant: 'h5', color: 'snow' }}
										titleStyle={{ textAlign: "center" }}
										style={{ backgroundColor: "#2074d4", textAlign: "center" }}
									/>
									<div className='container' style={{ paddingTop: '1rem' }}>
										<h3>Twittjobs</h3>a project by Stunning Industries LLP is a Pune based online recruitment platform for educator and staff seeking job and the employer (educational institute) who need best people as assets. We've been doing this dedicatedly for education sector and we focus to provide assistance for job seeking, career management, recruitment and talent management products and services.
										<div style={{ paddingTop: '2rem' }}>
											We focus on innovation and are changing the way educator, staff and employer think about career and we're helping them actively to get the job destination to satisfy their teaching and allied aspirations with new tools and techniques.
										</div>
										<div style={{ paddingTop: '3rem', paddingBottom: '13rem' }}>
											<h3 style={{ paddingBottom: '1rem' }}>Twittjobs Vision</h3>We are committed to provide the best platform for educator and supporting staff to get excellent job matching with their profile. We aim at recruitment services to all educational institutions for hiring best match manpower.
										</div>

									</div>


								</Card>
							</Grid>

						</Grid>
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



