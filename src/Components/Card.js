import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = () => {
    const [clientData, setClientData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setClientData(data);
        setFilteredData(data); 
    }, []);

    const handleNewJobSheet = () => {
        navigate('/new-sheet');
    };

    const handleSearch = () => {
        const lowercasedInput = searchInput.toLowerCase();
        if (lowercasedInput.trim() === '') {
            setFilteredData(clientData); 
        } else {
            const filteredClients = clientData.filter(client =>
                client.clientname.toLowerCase().includes(lowercasedInput) ||
                client.clientid.toString().toLowerCase().includes(lowercasedInput)
            );
            setFilteredData(filteredClients);
        }
    };

    const handleView = (id) => {
        navigate(`/view/${id}`);
    };

   
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className='main-container'>
            <div className='container'>
                <div className='card-section'>
                    <div>
                        <p className='heading'>HARDIK TRADERS - CLIENT MANAGEMENT DASHBOARD</p>
                    </div>
                    <div className='search-box'>
                        <div className='search'>
                            <input
                                type='text'
                                placeholder='Search by Client Name or ID...'
                                className='input'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className='search-btn' onClick={handleSearch}>Search</button>
                        </div>
                        <div>
                            <button className='btn' onClick={handleNewJobSheet}>New Job Sheet</button>
                        </div>
                    </div>

                    <div className='client-info'>
                        <table>
                            <thead>
                                <tr>
                                    <th className="th-id">#</th>
                                    <th className="th-client-id">Client ID</th>
                                    <th className="th-client-name">Client Name</th>
                                    <th className="th-contact">Contact</th>
                                    <th className="th-received-date">Received Date</th>
                                    <th className="th-inventory">Inventory Received</th>
                                    <th className="th-reported-issues">Reported Issues</th>
                                    <th className="th-client-notes">Client Notes</th>
                                    <th className="th-technician">Assignment Technician</th>
                                    <th className="th-amount">Estimated Amount</th>
                                    <th className="th-deadline">Deadline</th>
                                    <th className="th-status">Status</th>
                                    <th className="th-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map(client => (
                                    <tr key={client.id}>
                                        <td>{client.id}</td>
                                        <td>{client.clientid}</td>
                                        <td>{client.clientname}</td>
                                        <td>{client.contact}</td>
                                        <td>{client.receiveddate}</td>
                                        <td>{client.inventoryreceived}</td>
                                        <td>{client.reportedissues}</td>
                                        <td>{client.clientnotes}</td>
                                        <td>{client.assignmenttechnician}</td>
                                        <td>{client.estimatedamount}</td>
                                        <td>{client.deadline}</td>
                                        <td>{client.status}</td>
                                        <td className='all-btn'>
                                            <button className='btns-view' onClick={() => handleView(client.id)}>View</button>
                                            <button className='btns-edit' onClick={() => handleEdit(client.id)}>Edit</button>
                                            <button className='btns-delete'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className='footer'>©  2024 HARDIK TRADERS </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
