import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-6">
      {/* Dropdown */}
      <select
        onChange={handleChange}
        value={selectedColor}
        className="p-2 rounded text-black"
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* Color Display Box */}
      {selectedColor && (
        <div
                    style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: selectedColor,
                        marginTop: "20px"
                    }}
                />
            )}
        </div>
  );
};

export default ColorSwitcher;
