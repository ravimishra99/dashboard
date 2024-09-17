import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import './ViewPage.css';

const ViewPage = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);

    useEffect(() => {
        const selectedClient = data.find(client => client.id === parseInt(id));
        setClient(selectedClient);
    }, [id]);

    if (!client) {
        return <div>Loading...</div>;
    }

    return (
        <div className='view-form-container'>
            <div className='view-form-content'>
                <div className='view-form-heading'>
                    <p>VIEW JOB SHEET</p>
                </div>

                <table className='view-table'>
                    <tbody>
                        <tr>
                            <td className='view-lebel'>Client Name:</td>
                            <td>{client.clientname}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Contact Info (Phone 10nos):</td>
                            <td>{client.contact}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Received Date:</td>
                            <td>{client.receiveddate}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Inventory Received:</td>
                            <td>{client.inventoryreceived}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Inventory Image/Document/Video:</td>
                            <td><a href="#!" className='view-file-link'>View File</a></td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Reported Issues:</td>
                            <td>{client.reportedissues}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Client Notes:</td>
                            <td>{client.clientnotes}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Assigned Technician:</td>
                            <td>{client.assignmenttechnician}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Deadline:</td>
                            <td>{client.deadline}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Estimated Amount:</td>
                            <td>{client.estimatedamount}</td>
                        </tr>
                        <tr>
                            <td className='view-lebel'>Status:</td>
                            <td>{client.status}</td>
                        </tr>
                    </tbody>
                </table>


                <div className='view-form-notes'>
                    <label htmlFor="addnote" className='view-update'>Add or Update Note:</label>
                    <br />
                    <textarea id="addnote" name="addnote" />
                </div>

                <div className='view-form-saving'>
                    <button className='view-save-btn'>SAVE NOTES</button>
                </div>
            </div>
        </div>
    );
};

export default ViewPage;
