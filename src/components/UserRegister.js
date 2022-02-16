import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import base_url from "../api/bootapi";

const UserRegister = () => {

	useEffect(() => {
		document.title = "User Registration Page";
	}, []);

	const [user, setUser] = useState({});

	//Form Handler
	const handleForm = (e) => {
		console.log(user);
		postDatatoServer(user);
		e.preventDefault();
	}

	//Creating function to post data on server
	const postDatatoServer = (data) => {

		axios.post(`${base_url}/register/candidate`, data).then(
			(response) => {
				console.log(response);
				console.log("User added Successfully");
			}, (error) => {
				console.log(error);
				console.log("Error");
			}
		)

	}


	return (

		<>
			<section className="vh-100" style={{ backgroundColor: '#eee' }}>
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-lg-12 col-xl-11">
							<div className="card text-black" style={{ borderRadius: '25px' }}>
								<div className="card-body p-md-5">
									<div className="row justify-content-center">
										<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

											<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

											<form className="mx-1 mx-md-4" onSubmit={handleForm}>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-user fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="text" id="userId" className="form-control" name="userId"
															onChange={(e) => {
																setUser({ ...user, userId: e.target.value });
															}}
														/>
														<label className="form-label" htmlFor="userId">User Id</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="text" id="firstName" className="form-control" name="firstName"
															onChange={(e) => {
																setUser({ ...user, firstName: e.target.value });
															}}
														/>
														<label className="form-label" htmlFor="firstName">First Name</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="text" id="lastName" className="form-control" name="lastName"
															onChange={(e) => {
																setUser({ ...user, lastName: e.target.value })
															}}
														/>
														<label className="form-label" htmlFor="lastName">Last Name</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="text" id="emailId" className="form-control" name="emailId"
															onChange={(e) => {
																setUser({ ...user, emailId: e.target.value })
															}}
														/>
														<label className="form-label" htmlFor="emailId">Enter Email Id</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="text" id="mobNo" className="form-control" name="mobNo"
															onChange={(e) => {
																setUser({ ...user, mobNo: e.target.value })
															}}
														/>
														<label className="form-label" htmlFor="mobNo">Enter Mobile Number</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-4">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input type="password" id="password" className="form-control" name="password"
															onChange={(e) => {
																setUser({ ...user, password: e.target.value })
															}}
														/>
														<label className="form-label" htmlFor="password">Enter Password</label>
													</div>
												</div>

												<div className="form-check d-flex justify-content-center mb-5">
													<input
														className="form-check-input me-2"
														type="checkbox"
														value=""
														id="form2Example3c"
													/>
													<label className="form-check-label" htmlFor="form2Example3">
														I agree all statements in <a href="#!">Terms of service</a>
													</label>
												</div>

												<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
													<button type="submit" className="btn btn-primary btn-lg">Register</button>
												</div>

											</form>

										</div>
										<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

											<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default UserRegister;