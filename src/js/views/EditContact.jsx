import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const initialState = {
    name: "",
    email: "",
    phone: "",
    adress: "",
};

const EditContact = () => {

    const navigate = useNavigate();
    // nuestras acciones 
    const { actions } = useContext(Context)
    // nuestro states
    const [newContact, setNewContact] = useState(initialState)

    const params = useParams();

    const handleChange = (event) => {
        setNewContact({ ...newContact, [event.target.name]: event.target.value })
    }

    const addNewContact = () => {

        const index = parseInt(params.index)
        
        actions.modifyEditContact(index, newContact);
        navigate("/");
    }



    return (
        <div className="container d-flex flex-column gap-2">
            <h2 className="text-center">Edit Contact</h2>
            <div>
                <label>Full Name</label>
                <input type="text" name="name" className="form-control" placeholder="Example Pedro Perez" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" className="form-control" placeholder=" Example XXX@Gmail.com" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" className="form-control" placeholder="Example 0414000-000" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Adress</label>
                <input type="text" name="adress" className="form-control" placeholder="Example Caracas-Hatillo" onChange={handleChange} />
            </div>
            <button className="btn btn-primary" onClick={addNewContact}>Actualizar Contacto</button>
            <Link to={"/"}>Or go back to Home</Link>

        </div>
    )
}

export default EditContact