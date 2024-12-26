import React, { useState } from 'react';
import './BorrowerInfo.css';

const BorrowerInfoForm = ({ onContinue }) => {
  // State hooks for form inputs
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [numberOfUnits, setNumberOfUnits] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [file, setFile] = useState(null);

  // Sample values for select attributes
  const propertyTypes = ['House', 'Land', 'Commercial', 'Apartment'];
  const numberOfUnitsOptions = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      propertyName,
      propertyType,
      numberOfUnits,
      propertyAddress,
      file
    });
    // Call onContinue to go to the next step
    onContinue();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Borrower Company Info</h2>

      {/* Row for Property Name, Property Type, and Number of Units */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input 
            type="text" 
            id="propertyName" 
            value={propertyName} 
            onChange={(e) => setPropertyName(e.target.value)} 
            placeholder="Property Name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select 
            id="propertyType" 
            value={propertyType} 
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfUnits">Number of Units</label>
          <select 
            id="numberOfUnits" 
            value={numberOfUnits} 
            onChange={(e) => setNumberOfUnits(e.target.value)}
          >
            <option value="">Select Number of Units</option>
            {numberOfUnitsOptions.map((unit, index) => (
              <option key={index} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row for Property Address */}
      <div className="form-group">
        <label htmlFor="propertyAddress">Property Address</label>
        <textarea 
          id="propertyAddress" 
          value={propertyAddress} 
          onChange={(e) => setPropertyAddress(e.target.value)} 
          placeholder="Enter Property Address"
        />
      </div>

      {/* File Attachment */}
      <div className="file-upload">
        <label htmlFor="file">File Attachment</label>
        <input 
          type="file" 
          id="file" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button className="btn-secondary">Back</button>
        <button 
          className="btn-primary" 
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BorrowerInfoForm;
