import React from 'react';
import _get from 'lodash.get';

const AxiePrice = ({ auction, className }) => (
  <p className="flex justify-center items-center" className={className}>
    <span className="pr-4">${_get(auction, 'currentPriceUSD')}</span>
    <span>
      Ξ
      {(
        parseInt(_get(auction, 'currentPrice'), 10) /
        1_000_000_000_000 /
        1_000_000
      ).toFixed(4)}
    </span>
  </p>
);

export default AxiePrice;
