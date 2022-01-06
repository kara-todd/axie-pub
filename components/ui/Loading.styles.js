import { css, keyframes } from "@emotion/react";

export { relative, flexCol, centerAll } from "app/styles/utils";

export const loadingRoot = css`
  --loading-color: rgb(0, 44, 110);
  --loading-size: 32px;
`;

export const vh100 = css`
  height: 100vh;
`;

export const rotate_pacman = keyframes`
  0% {
       transform: rotate(var(--rotate-begin));
  }
  50% {
       transform: rotate(var(--rotate-end));
  }
  100% {
       transform: rotate(var(--rotate-begin));
  }
`;

export const pellets = keyframes`
  0% {
    transform: translate(calc(var(--pellet-size) * 8), 50%);
  }

  75% {
    opacity: 0.7;
  }
  100% {
    transform: translate(0, 50%);
  }
`;

export const pacmanTop = css`
  --rotate-begin: 270deg;
  --rotate-end: 360deg;
`;

export const pacmanBot = css`
  --rotate-begin: 90deg;
  --rotate-end: 0deg;
`;

export const pacman = css`
  position: absolute;
  width: 0;
  height: 0;

  border-right: var(--loading-size) solid transparent;
  border-top: var(--loading-size) solid var(--loading-color);
  border-left: var(--loading-size) solid var(--loading-color);
  border-bottom: var(--loading-size) solid var(--loading-color);
  border-radius: 100%;

  animation: ${rotate_pacman} 0.5s 0s infinite;
`;

export const pellet = css`
  --pellet-size: calc(var(--loading-size) * 0.5);

  position: absolute;
  top: calc(var(--loading-size) / 2);
  left: 0;
  width: var(--pellet-size);
  height: var(--pellet-size);
  border: 1px solid var(--loading-color);
  border-radius: 100%;
  background: var(--loading-color);
  transform: translate(calc(var(--pellet-size) * 12), 50%);
  animation: ${pellets} 1s 0s infinite linear;
`;
