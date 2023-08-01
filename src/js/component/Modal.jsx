import React, {useContext} from 'react'
import { Context } from '../store/appContext'

const Modal = ({index}) => {

    const {actions} = useContext(Context)


    return (<>

        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fas fa-trash"></i>
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete Windows</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to deleted this? 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary p-2" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary p-3" data-bs-dismiss="modal" onClick={() => actions.deleteContact(index)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Modal