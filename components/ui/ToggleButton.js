import React, { useState } from 'react';

// Credit to: Lukas Hermann
// https://codepen.io/lhermann/pen/EBGZRZ
const ToggleButton = ({ label, checked, onChange, className }) => {
  const [isChecked, setChecked] = useState(checked);
  const bgColor = !isChecked ? 'bg-gray-400' : 'bg-green-600';
  const posX = !isChecked ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className="flex items-center w-full">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            value={isChecked}
            onChange={() => {
              setChecked(!isChecked);
              if (typeof onChange === 'function') {
                onChange(!isChecked);
              }
            }}
          />
          <div className={`block w-10 h-6 rounded-full ${bgColor}`}></div>
          <div
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${posX}`}
          />
        </div>
        {label && <div className="ml-3 text-gray-400">{label}</div>}
      </label>
    </div>
  );
};

export default ToggleButton;
