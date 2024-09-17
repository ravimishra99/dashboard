import React, { useState } from 'react'
import './NewSheet.css'

const NewSheet = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  return (
    <div className='form-container'>
      <div className='form-content'>
        <div className='form-heading'>
          <p>CREATE NEW JOB SHEET</p>
        </div>

        <div className='form-size'>
          <form>
            <label htmlFor="clientName" className='lebel'>Client Name:</label>
            <br />
            <input type="text" id="clientName" name="clientName" />

            <br />
            <label htmlFor="contactInfo" className='lebel'>Contact Info (Phone 10nos):</label>
            <br />
            <input type="text" id="contactInfo" name="contactInfo" />

            <br />
            <label htmlFor="receivedData" className='lebel'>Received Date:</label>
            <br />
            <input type="date" id="receivedData" name="receivedData" />
            <br />
            <label htmlFor="inventoryReceived" className='lebel'>Inventory Received:</label>
            <br />
            <input type="text" id="inventoryReceived" name="inventoryReceived" />

            <br />
            <label htmlFor="uploadFile" className='lebel'>Upload Inventory Image/Documentation/Video:</label>
            <br />
            <input type="file" id="uploadFile" name="uploadFile"
              accept='"image/*,video/*,.pdf,.doc,.doc'
              onChange={handleFileUpload} />

            <br />
            {selectedFile && (
              <p className='selected-file'>Selected File: {selectedFile.name}</p>
            )}
            
            <br />
            <label htmlFor="reportedIssue" className='lebel'>Reported Issues:</label>
            <br />
            <textarea
              id="reportedIssue"
              name="reportedIssue" />

            <br />
            <label htmlFor="clientNotes" className='lebel'>Client Notes:</label>
            <br />
            <textarea
              id="clientNotes"
              name="clientNotes" />

            <br />
            <label htmlFor="assignedTechnician" className='lebel'>Assigned Technician:</label>
            <br />
            <input type="text" id="assignedTechnician" name="assignedTechnician" />

            <br />
            <label htmlFor="deadline" className='lebel'>Deadline:</label>
            <br />
            <input type="date" id="deadline" name="deadline" />

            <br />
            <label htmlFor="estimatedAmount" className='lebel'>Estimated Amount:</label>
            <br />
            <input type="text" id="estimatedAmount" name="estimatedAmount" />

            <br />
            <label htmlFor="status" className='lebel'>Status:</label>
            <br />
            <select id="status" name="status">
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <br />
            <div className='form-saving'>
              <button className='save-btn'>SAVE JOB SHEET</button>
            </div>


          </form>
        </div>

      </div>
    </div>
  )
}

export default NewSheet