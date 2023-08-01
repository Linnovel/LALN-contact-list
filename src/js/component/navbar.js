import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {actions, store} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
		
			<div className="ml-auto">
				<p></p>
			</div>
		</nav>
	);
};

