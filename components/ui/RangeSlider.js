import React, { useState } from 'react';

import tw from 'twin.macro';
import { css } from '@emotion/react';

const RangeDot = ({ value, total, showLabel }) => (
  <div
    tw="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0"
    style={{ left: `${(value / total) * 100}%` }}
  >
    {showLabel && (
      <div tw="relative -mt-2 w-1">
        <div tw="absolute z-40 opacity-100 mb-2 left-0 min-w-full">
          <div tw="relative shadow-md">
            <div tw="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
              {value}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const RangeLabel = ({ val, className }) => (
  <div tw="absolute text-gray-400 -ml-1 bottom-0 -mb-6" className={className}>
    {`${val}`}
  </div>
);

// Credit to: haynajjar
// https://tailwindcomponents.com/component/range-slider
const RangeSlider = ({
  label,
  formatLabel,
  min,
  max,
  step,
  value: initialValue,
  className,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);
  const percentage = `${(value / max) * 100}`;

  return (
    <div
      tw="flex flex-col w-full justify-start items-start"
      className={className}
    >
      {(label || typeof formatLabel === 'function') && (
        <div tw="text-gray-400 mb-2">
          {typeof formatLabel !== 'function' && `${label}: ${value}`}
          {typeof formatLabel === 'function' && formatLabel(value)}
        </div>
      )}
      <div tw="flex w-full items-start h-12 justify-center">
        <div tw="py-1 relative min-w-full">
          <div tw="h-2 bg-gray-200 rounded-full">
            <input
              tw="absolute h-2 w-full opacity-0 cursor-pointer z-10"
              type="range"
              value={value}
              min={min}
              max={max}
              step={step}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setValue(value);
                if (typeof onChange === 'function') {
                  onChange(value);
                }
              }}
            />
            <div
              tw="absolute h-2 rounded-full bg-gray-600 w-0 text-green-800 transform"
              css={css`
                width: ${percentage}%;
              `}
            />
            <RangeDot value={value} total={max} />
            <RangeLabel val={min} css={tw`left-0`} />
            <RangeLabel val={max} css={tw`right-0`} />
          </div>
        </div>
      </div>
    </div>
  );
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
};

export default RangeSlider;
