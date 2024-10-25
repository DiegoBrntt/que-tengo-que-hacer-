import React from 'react';
import Modal from './Modal.comoponent ';

class NewTaskButton extends React.Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-end m-2'>
                    <button className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Crear Tarea +
                    </button>
                </div>

                <Modal/>
            </>
        );
    }
}

export default NewTaskButton;
