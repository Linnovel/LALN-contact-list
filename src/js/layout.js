import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./views/Forms.jsx";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import EditContact from "./views/EditContact.jsx"

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/forms" element={<Forms />} />
						<Route path="/edit/:index" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />    
					</Routes>
					<Footer />
			</BrowserRouter>  
		</div>
	);
};

export default injectContext(Layout);
