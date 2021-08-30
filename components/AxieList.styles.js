import { css } from '@emotion/react';

export const borderlight = css`
  --tw-border-opacity: 0.1;
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--axie-card-min-width), 1fr)
  );
  grid-gap: 1.5rem;
`;
