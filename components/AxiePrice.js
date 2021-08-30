import React from 'react';
import _get from 'lodash.get';

const AxiePrice = ({ auction, className }) => {
  const currency = '$';
  const price = _get(auction, 'currentPriceUSD');
  // const currency = "Ξ";

  return (
    <p className={className}>
      {currency}
      {price}
    </p>
  );
};

export default AxiePrice;
