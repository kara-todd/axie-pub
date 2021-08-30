import React from 'react';

const AxieImage = ({ id, className }) => (
  <img
    className={className}
    src={`https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`}
    title={`Axie ${id}`}
    alt={''}
  />
);

export default AxieImage;
