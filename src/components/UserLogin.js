import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import UserProfile from "./UserProfile";

const UserLogin = () => {

	const navigate = useNavigate();
	useEffect(() => {
		document.title = "User Login Page";
	}, []);


	const [user, setUser] = useState({});

	const handleForm = (e) => {
		console.log(user);

		getDatafromServer(user);
		e.preventDefault();
	}


	const getDatafromServer = (data) => {


		
		axios.post(`${base_url}/login/candidates`, data).then(
			(response) => {
				if ((response.data) === "Unsuccessful") {
					console.log("hello");
					toast.error("Please Enter Correct Details");
				}
				else {

					console.log(response.data);
					document.cookie = response.data;
					navigate("/userhome");
				}


			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)

	}



	return (

		<>
			<section className="vh-100">
				<div className="container-fluid h-custom">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-md-9 col-lg-6 col-xl-5">
							<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
								alt="Sample image" />
						</div>
						<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
							<form onSubmit={handleForm}>

								<div className="divider d-flex align-items-center my-4">
									<p className="text-center fw-bold mx-3 mb-0">Login</p>
								</div>


								<div className="form-outline mb-4">
									<input type="text" id="emailId" className="form-control form-control-lg" name="emailId" placeholder="Enter Email Address"
										onChange={(e) => {
											setUser({ ...user, emailId: e.target.value })
										}}
									/>
									<label className="form-label" htmlFor="emailId">Email address</label>
								</div>


								<div className="form-outline mb-3">
									<input type="password" id="password" className="form-control form-control-lg"
										name="password"
										placeholder="Enter password"
										onChange={(e) => {
											setUser({ ...user, password: e.target.value })
										}}
									/>
									<label className="form-label" htmlFor="password">Password</label>
								</div>

								<div className="d-flex justify-content-between align-items-center">

									<div className="form-check mb-0">
										<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
										<label className="form-check-label" htmlFor="form2Example3">
											Remember me
										</label>
									</div>
									<a href="#!" className="text-body">Forgot password?</a>
								</div>

								<div className="text-center text-lg-start mt-4 pt-2">
									<button type="submit" className="btn btn-primary btn-lg"
										style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
									<p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
										className="link-danger">Register</a></p>
								</div>

							</form>
						</div>
					</div>
				</div>

			</section >
		</>
	)
}
export default UserLogin;