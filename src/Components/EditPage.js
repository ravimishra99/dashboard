import React, { useState } from 'react';
import './EditPage.css';

const EditPage = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className='edit-form-container'>
      <div className='edit-form-content'>
        <div className='edit-form-heading'>
          <p>EDIT JOB SHEET</p>
        </div>

        <div className='edit-form-size'>
          <form>
            <label htmlFor="clientName" className='edit-label'>Client Name:</label>
            <br />
            <input type="text" id="clientName" name="clientName" />

            <br />
            <label htmlFor="contactInfo" className='edit-label'>Contact Info (Phone 10nos):</label>
            <br />
            <input type="text" id="contactInfo" name="contactInfo" />

            <br />
            <label htmlFor="receivedData" className='edit-label'>Received Date:</label>
            <br />
            <input type="date" id="receivedData" name="receivedData" />
            
            <br />
            <label htmlFor="inventoryReceived" className='edit-label'>Inventory Received:</label>
            <br />
            <input type="text" id="inventoryReceived" name="inventoryReceived" />

            <br />
            <label htmlFor="uploadFile" className='edit-label'>Upload Inventory Image/Documentation/Video:</label>
            <br />
            <input type="file" id="uploadFile" name="uploadFile"
              accept="image/*,video/*,.pdf,.doc,.docx"
              onChange={handleFileUpload} />

            <br />
            {selectedFile && (
              <p className='selected-file'>Selected File: {selectedFile.name}</p>
            )}

            <br />
            <label htmlFor="reportedIssue" className='edit-label'>Reported Issues:</label>
            <br />
            <textarea id="reportedIssue" name="reportedIssue" />

            <br />
            <label htmlFor="clientNotes" className='edit-label'>Client Notes:</label>
            <br />
            <textarea id="clientNotes" name="clientNotes" />

            <br />
            <label htmlFor="assignedTechnician" className='edit-label'>Assigned Technician:</label>
            <br />
            <input type="text" id="assignedTechnician" name="assignedTechnician" />

            <br />
            <label htmlFor="deadline" className='edit-label'>Deadline:</label>
            <br />
            <input type="date" id="deadline" name="deadline" />

            <br />
            <label htmlFor="estimatedAmount" className='edit-label'>Estimated Amount:</label>
            <br />
            <input type="text" id="estimatedAmount" name="estimatedAmount" />

            <br />
            <label htmlFor="status" className='edit-label'>Status:</label>
            <br />
            <select id="status" name="status">
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <br />
            <div className='edit-form-saving'>
              <button className='edit-save-btn'>Save Changes</button>
              <button className='cancel-btn'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
