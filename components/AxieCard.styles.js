import { css } from '@emotion/react';

export {
  absolute,
  borderGray3,
  flex,
  flexCol,
  flexColRev,
  top0,
  right0,
  justifyCenter,
  alignCenter,
  w100,
  m0,
  p0,
  p2,
  p4,
  px2,
  relative,
  textBase,
  textSm,
  textLeft,
} from 'styles/utils';

export const cardBg = css`
  padding-top: 0;
  background-color: var(--axie-card-bg);
`;

export const pr1 = css`
  padding-right: 0.25rem;
`;

export const pt1 = css`
  padding-top: 0.25rem;
`;

export const badge = css`
  right: 0;
  top: 0;
  padding: 0.5rem;
  color: var(--color-black);
`;

export const cardBorder = css`
  padding-top: 1rem;
  border-top: 0.25rem solid transparent;
`;

export const imageBox = css`
  height: 10rem;
`;

export const axieImage = css`
  height: 240px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
