import React, { useState } from 'react';

function NestedDropdown() {
  const [selectedOptionLevel1, setSelectedOptionLevel1] = useState('');
  const [selectedOptionLevel2, setSelectedOptionLevel2] = useState('');

  const handleSelectLevel1 = (event) => {
    setSelectedOptionLevel1(event.target.value);
    setSelectedOptionLevel2(''); // Reset selected option for level 2 when a new option is selected for level 1
  };

  const handleSelectLevel2 = (event) => {
    setSelectedOptionLevel2(event.target.value);
  };

  return (
    <div>
      <select value={selectedOptionLevel1} onChange={handleSelectLevel1}>
        <option value="">Select an option for level 1</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {selectedOptionLevel1 && (
        <select value={selectedOptionLevel2} onChange={handleSelectLevel2}>
          <option value="">Select an option for level 2</option>
          {selectedOptionLevel1 === "option1" && (
            <>
              <option value="option1a">Option 1A</option>
              <option value="option1b">Option 1B</option>
            </>
          )}
          {selectedOptionLevel1 === "option2" && (
            <>
              <option value="option2a">Option 2A</option>
              <option value="option2b">Option 2B</option>
            </>
          )}
          {selectedOptionLevel1 === "option3" && (
            <>
              <option value="option3a">Option 3A</option>
              <option value="option3b">Option 3B</option>
            </>
          )}
        </select>
      )}
    </div>
  );
}

export default NestedDropdown;
