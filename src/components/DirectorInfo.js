import React from 'react';
import './DirectorInfo.css';

function DirectorInfo() {
  const fields = [
    { id: 6, label: "Director Name", type: "text" },
    { id: 7, label: "Director Role", type: "text" },
    { id: 8, label: "Years of Experience", type: "number" },
  ];

  return (
    <div className="director-info">
      <h2>Director Information</h2>
      <form>
        {fields.map((field) => (
          <div key={field.id} className="form-group">
            <label>{field.label}</label>
            <input type={field.type} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default DirectorInfo;