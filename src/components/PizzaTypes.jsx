import React from "react";
 function PizzaTypes ({title}) {
	return (
		<>
			<div className="container">
                <hr/>
				<h3 className="mt-5 text-center">{title} Type</h3>
				<div className="row">
					<div className="col-md-3">
						<div className="card">
							<img
								src="img/pepperonipizza.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Pepperoni Pizza</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card">
							<img
								src="img/vegetablepizza.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Vegetable Pizza</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card">
							<img
								src="img/cheese-pizza.jfif"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Cheese Pizza</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card">
							<img
								src="img/Pizza-sham.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Sheri-Silver Pizza</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default PizzaTypes;
