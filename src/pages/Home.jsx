// import { fas fa-home me-3 } from "react-icons/fa";

const footerStyle = {
       backgroundColor: "#ADD8E6",
}

const Home = () => {
	return <>

		<div style={footerStyle} className="container">
			<h1>Home Page</h1>
			<br />
			<h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem ut nihil tempore laudantium cum temporibus, molestiae doloribus iure commodi, ipsa animi et expedita nemo dolorum tempora voluptates exercitationem sit?</h5>
			<br />
			<br />
			<br />
			<h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut soluta possimus incidunt, ullam, similique amet nemo provident vero, reiciendis deserunt nihil reprehenderit quas. Dolores repellat optio dicta minima sit.</h6>
			<br />
			<h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita quam, asperiores, numquam a non recusandae nesciunt perspiciatis, impedit et delectus laudantium nulla officiis. Recusandae laborum officiis aut at tempore?</h5>
			<br />
		</div>
		<br />

		<div style={footerStyle} className="container">
			<footer className="text-center text-lg-start container">
				<section
					className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
				>
				</section>
				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3"></i>Company name
								</h6>
								<p>
									Here you can use rows and columns to organize your footer content. Lorem ipsum
									dolor sit amet, consectetur adipisicing elit.
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Products
								</h6>
								<p>
									<a href="#!" class="text-reset">Angular</a>
								</p>
								<p>
									<a href="#!" class="text-reset">React</a>
								</p>
								<p>
									<a href="#!" class="text-reset">Vue</a>
								</p>
								<p>
									<a href="#!" class="text-reset">Laravel</a>
								</p>

							</div>

							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Useful links
								</h6>
								<p>
									<a href="#!" class="text-reset">Pricing</a>
								</p>
								<p>
									<a href="#!" class="text-reset">Settings</a>
								</p>
								<p>
									<a href="#!" class="text-reset">Orders</a>
								</p>
								<p>
									<a href="#!" class="text-reset">Help</a>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Contact
								</h6>
								<p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
								<p>
									<i className="fas fa-envelope me-3"></i>
									info@example.com
								</p>
								<p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
								<p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
							</div>
						</div>
					</div>
				</section>

				<div className="text-center p-4">
					© 2022 Copyright:
				</div>
			</footer>
		</div>

	</>;
};

export default Home;
