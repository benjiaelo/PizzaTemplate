import React from "react";
function Navbar(props) {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand text-white" href="#">
					{props.name}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								About Pizza <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Pizza Type <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
export default Navbar;
