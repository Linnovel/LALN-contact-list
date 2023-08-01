import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Modal from "../component/Modal.jsx"



/**
 * 
 * @returns para utilizar nuestro context en cualquier parte de la aplicacion
 * necesitamos importar desde react el hook useContext Y 
 * necesitamos importar el contexto desde appContexts
 */


export const Home = () => {
	// para acceder al store y al action de flux
	// Extrayendo el objeto actions de context/flux y el objeto store de el contexto
	const { actions, store } = useContext(Context);

	const handleDelete=(index) => {
	actions.deleteContact(index)
	
	}

	return (

		<div>
			<div className="d-flex-justify-content-flex-end text-center">
			<h1>Agrega tu contacto</h1>
			<Link to="/forms">
				<button className="btn btn-success">Agregar Contacto</button>
			</Link>
			</div>
			{
				store.contacList.map((contacto, index) => {
					return (
						<div className="d-flex row border-top border-bottom p-2 m-1" key={(`contacto-${index}`)}>
							<figure className="col-sm-5 col-md-3 col-lg-3 col-xl-2 mt-3">
								<img src="https://picsum.photos/200/200" className="card-rounded rounded" alt="un tipo ahi" />
							</figure>
							<div className="col-sm-7 col-md-6 col-lg-6 col-xl-8" >
								<h1>{contacto.name}</h1>
								<p><i className="fas fa-map-marker-alt" ></i><span><strong>{contacto.adress}</strong></span></p>
								<p><i className="fas fa-phone"></i><span>{contacto.phone}</span></p>
								<p><i className="fas fa-envelope"></i><span>{contacto.email}</span></p>
							</div>
							<div className="col-sm-12 col-md-3 col-lg-3 col-xl-2 m-auto row">
								<Link to={`/edit/${index}`}>
								<button type="submit" className="btn btn-success p-3 m-4" ><i className="fas fa-pen"></i></button> 
								</Link>
								<Modal index={index}/>
							</div>
						</div>
					)
				})
			}
		</div>
	);
};
