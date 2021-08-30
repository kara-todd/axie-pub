import React from 'react';

import Image from 'next/image';

const AxieImage = ({ id, className }) => (
  <Image
    className={className}
    src={`https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`}
    title={`Axie ${id}`}
    layout="fill"
    alt={''}
  />
);

export default AxieImage;
