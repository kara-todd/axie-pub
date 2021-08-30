import React from 'react';
import _get from 'lodash.get';

import AxieIconBack from 'components/axie-icon/AxieIconBack';
import AxieIconEar from 'components/axie-icon/AxieIconEar';
import AxieIconEye from 'components/axie-icon/AxieIconEye';
import AxieIconHorn from 'components/axie-icon/AxieIconHorn';
import AxieIconMouth from 'components/axie-icon/AxieIconMouth';
import AxieIconTail from 'components/axie-icon/AxieIconTail';

const partComponent = {
  eyes: AxieIconEye,
  ears: AxieIconEar,
  horn: AxieIconHorn,
  mouth: AxieIconMouth,
  back: AxieIconBack,
  tail: AxieIconTail,
};

const AxieIconPart = ({ part, cls, ...props }) => {
  const Component = _get(partComponent, part);

  if (!Component) {
    return null;
  }

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...props}>
      <Component cls={cls} />
    </svg>
  );
};

export default AxieIconPart;
