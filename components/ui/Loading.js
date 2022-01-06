import React from 'react';

import * as S from './Loading.styles';

const Loading = () => (
  <div css={[S.loadingRoot, S.relative]}>
    <div css={[S.pacman, S.pacmanTop]} />
    <div css={[S.pacman, S.pacmanBot]} />
    <div css={S.pellet} />
    <div css={S.pellet} style={{ animationDelay: '0.33s' }} />
    <div css={S.pellet} style={{ animationDelay: '0.66s' }} />
    <div css={S.pellet} style={{ animationDelay: '0.99s' }} />
  </div>
);

export default Loading;
