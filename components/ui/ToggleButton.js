import React, { useState } from 'react';

import tw from 'twin.macro';

// Credit to: Lukas Hermann
// https://codepen.io/lhermann/pen/EBGZRZ
const ToggleButton = ({ label, checked, onChange, className }) => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <div tw="flex items-center w-full" className={className}>
      <label tw="flex items-center cursor-pointer">
        <div tw="relative">
          <input
            type="checkbox"
            tw="sr-only"
            checked={isChecked}
            value={isChecked}
            onChange={() => {
              setChecked(!isChecked);
              if (typeof onChange === 'function') {
                onChange(!isChecked);
              }
            }}
          />
          <div
            tw="block w-10 h-6 rounded-full"
            css={!isChecked ? tw`bg-gray-400` : tw`bg-green-600`}
          ></div>
          <div
            tw="transform absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
            css={!isChecked ? tw`translate-x-0` : tw`translate-x-full`}
          />
        </div>
        {label && <div tw="ml-3 text-gray-400">{label}</div>}
      </label>
    </div>
  );
};

export default ToggleButton;
