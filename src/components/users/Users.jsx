import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersModal from './UsersModal'; 
import { Button } from 'react-bootstrap';

function Users() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os usuários", error);
            });
    }, []);

    const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    return (
        <div style={{width: '80%', margin:'auto', marginTop: '50px'}}>
            <h2>Lista de Usuários</h2>
            <div className="table-container">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name.firstname} {user.name.lastname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => handleShowModal(user)}
                                    >
                                        Visualizar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedUser && (
                <UsersModal
                    showModal={showModal}
                    handleClose={handleCloseModal}
                    selectedUser={selectedUser}
                />
            )}
        </div>
    );
}

export default Users;
