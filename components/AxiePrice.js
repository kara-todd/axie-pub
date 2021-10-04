import React from 'react';
import _get from 'lodash.get';
import tw from 'twin.macro';

const AxiePrice = ({ auction, className }) => (
  <p tw="flex justify-center items-center" className={className}>
    <span tw="pr-4">${_get(auction, 'currentPriceUSD')}</span>
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
