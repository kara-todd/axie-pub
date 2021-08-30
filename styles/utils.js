import { css } from '@emotion/react';

export const baseButton = css`
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

export const baseList = css`
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const borderBot = css`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const borderTop = css`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const relative = css`
  position: relative;
`;

export const absolute = css`
  position: absolute;
`;

export const inset0 = css`
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const insetX0 = css`
  right: 0px;
  left: 0px;
`;

export const top0 = css`
  top: 0;
`;

export const top1of2 = css`
  top: 50%;
`;

export const right0 = css`
  right: 0;
`;

export const fontMedium = css`
  font-weight: 500;
`;

export const fontSemi = css`
  font-weight: 600;
`;

export const fontBold = css`
  font-weight: 700;
`;

export const textXs = css`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const textSm = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const textBase = css`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const textLeft = css`
  text-align: left;
`;

export const textRight = css`
  text-align: right;
`;

export const textCenter = css`
  text-align: right;
`;

export const borderCollapse = css`
  border-spacing: 0;
  border-collapse: collapse;
`;

export const w100 = css`
  width: 100%;
`;

export const m0 = css`
  margin: 0;
`;

export const p0 = css`
  padding: 0;
`;

export const px2 = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const pl2 = css`
  padding-left: 0.5rem;
`;

export const p2 = css`
  padding: 0.5rem;
`;

export const p4 = css`
  padding: 1rem;
`;

export const borderGray3 = css`
  border: 1px solid var(--color-gray-3);
`;

export const backgroundGray4 = css`
  background-color: var(--color-gray-4);
`;

export const backgroundGray5 = css`
  background-color: var(--color-gray-5);
`;

export const flex = css`
  display: flex;
`;

export const flexCol = css`
  flex-direction: column;
`;

export const flexColRev = css`
  flex-direction: column-reverse;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const alignCenter = css`
  align-items: center;
`;
