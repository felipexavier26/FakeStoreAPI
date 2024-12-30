import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa'; 
import './UsersModal.css'; 

function UsersModal({ showModal, handleClose, selectedUser }) {
    return (
        <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title className="d-flex align-items-center">
                    <FaUserAlt className="mr-2" style={{ color: '#2575fc', marginRight: '10px' }} />
                    <span>Detalhes do Usuário</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-content">
                    <div className="modal-info">
                        <strong>ID:</strong> <span>{selectedUser.id}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Nome:</strong> <span>{selectedUser.name.firstname} {selectedUser.name.lastname}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Email:</strong> <span>{selectedUser.email}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Username:</strong> <span>{selectedUser.username}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Telefone:</strong> <span>{selectedUser.phone}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Endereço:</strong> <span>{selectedUser.address.street}, {selectedUser.address.number}, {selectedUser.address.city}, {selectedUser.address.zipcode}</span>
                    </div>
                    <div className="modal-info">
                        <strong>Geolocalização:</strong> <span>Latitude: {selectedUser.address.geolocation.lat}, Longitude: {selectedUser.address.geolocation.long}</span>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={handleClose} className="custom-btn">
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UsersModal;
