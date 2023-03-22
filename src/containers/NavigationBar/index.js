import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
	// const [open, setOpen] = useState(false);

	return (
		<>
			<div className="navbar_main_container">
				<div className="max_width">
					<div className="navbar_container">
						<div className="logo_container">
							<h3>Logo</h3>
						</div>
						{/* <div className="toggle" onClick={() => setOpen(!open)}>
							<p>Logo</p>
						</div> */}
						{/* <div className={open ? "links_container new" : "links_container"}>
							{open && (
								<div className="close-btn" onClick={() => setOpen(!open)}>
									&#9747;
								</div>
							)} */}
							<div className="links_container">
								<div className="links">
									<ul>
										<li>
											<NavLink
												to="/marketPlace"
												// style={({ isActive }) =>
												// 	isActive ? activeStyle : undefined
												// }
											>
												MarketPlace
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/"
												// style={({ isActive }) =>
												// 	isActive ? activeStyle : undefined
												// }
											>
												Artists
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/"
												// style={({ isActive }) =>
												// 	isActive ? activeStyle : undefined
												// }
											>
												Community
											</NavLink>
										</li>
										<div className="button_container">
											<div>
												{/* <Dropdown
													overlay={WalletConnectedDropdown}
													placement="bottomRight"
													trigger={["click"]}
												> */}
												<div
													shape="round"
													type="primary"
													className="btn-filled"
												>
													{/* <ConnectButton /> */}
													Connect
												</div>
												{/* </Dropdown> */}
											</div>
										</div>
									</ul>
								</div>
							</div>
							<div className="btn-container">
								<button>Register</button>
							</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
