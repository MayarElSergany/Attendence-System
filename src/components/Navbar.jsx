import { Link } from 'react-router-dom';

// const style = {
// 	backgroundColor: "yellowgreen",
// 	display: "flex",
// 	justifyContent: "space-evenly",
// 	padding: "10px 20px",
// 	marginBottom: "30px",
// };


const navbarStyle = {
	backgroundColor: "#e3f2fd",
}

const paddingNav = {
	paddingRight: "100px",
}

const Navbar = () => {
	return (
		// <div style={style}>
		// 	<Link to="/">Home</Link>
		// 	<Link to="/about">About</Link>
		// 	<Link to="/task">Task</Link>
		// 	<Link to="/users">Users</Link>
		// 	<Link to="/users/add">Add a new user</Link>
		// </div>


		<nav className="navbar navbar-expand-lg navbar-light m-4" style={navbarStyle}>
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to="/" className="nav-link" end="true" aria-current="page" style={paddingNav}>Home</Link>
						<Link to="/about" className="nav-link" end="true" style={paddingNav}>About</Link>
						{/* <Link to="/task" className="nav-link" end="true" style={paddingNav}>Tasks</Link> */}
						<Link to="/users" className="nav-link" end="true" style={paddingNav}>Users</Link>
						<Link to="/users/add" className="nav-link" end="true" style={paddingNav}>Add New User</Link>



					</div>
				</div>
			</div>
		</nav>


	);
};

export default Navbar;
