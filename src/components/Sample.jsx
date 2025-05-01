import React, { useState } from 'react';
// import logo from './logo.png';
function RadioExample() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log('Selected:', event.target.value);
  };

  return (
    <div>
        {/* <img src="logo.png" alt="" /> */}
      <label>
        <input
          type="radio"
          value="Option1"
          checked={selectedOption === 'Option1'}
          onChange={handleChange}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          value="Option2"
          checked={selectedOption === 'Option2'}
          onChange={handleChange}
        />
        Option 2
      </label>
    </div>
  );
}

export default RadioExample;
