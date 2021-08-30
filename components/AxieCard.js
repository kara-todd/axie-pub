import React from 'react';
import _get from 'lodash.get';

import AxieGenes from 'components/AxieGenes';
import AxieIcon from 'components/axie-icon/AxieIcon';
import AxiePrice from 'components/AxiePrice';
import AxieStats from 'components/AxieStats';

import tw from 'twin.macro';
import * as S from 'components/AxieCard.styles';

const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
);

const AxieCard = ({
  cls,
  auction,
  enableGenes,
  id,
  image,
  name,
  stats,
  quality,
  geneCalc,
  breedCount,
}) => (
  <article css={[S.m0, S.borderGray3, S.cardBg, S.relative]}>
    <header
      css={[S.flex, S.flexColRev, S.cardBorder, S.p0]}
      style={{ borderColor: `var(--color-${cls})` }}
    >
      <h2 css={S.m0}>
        <a
          css={[S.flex, S.flexCol, S.alignCenter, S.textBase]}
          href={`https://marketplace.axieinfinity.com/axie/${id}?referrer=axie.pub`}
          target="_blank"
        >
          <div css={[S.relative, S.imageBox, S.w100]}>
            <img src={image} css={[S.absolute, S.axieImage]} alt="" />
          </div>
          {name}
        </a>
      </h2>
      <div css={[S.flex, S.alignCenter, S.w100]}>
        <abbr title="Quality" tw="flex items-center" css={[S.px2, S.pt1]}>
          <AxieIcon cls={cls} /> {quality}%
        </abbr>
        <p css={[S.flex, S.alignCenter, S.px2, S.pt1, S.m0]}>
          <HeartIcon height={16} width={16} css={S.pr1} /> {breedCount}
        </p>
        <AxiePrice auction={auction} css={[S.px2, S.pt1, S.m0]} />
        <p
          css={[S.m0, S.textSm, S.absolute, S.top0, S.right0, S.p2]}
          style={{ backgroundColor: `var(--color-${cls})` }}
        >
          {`#` + id}
        </p>
      </div>
    </header>
    <AxieStats stats={stats} />
    {enableGenes && (
      <AxieGenes genes={geneCalc} quality={quality} cls={cls} css={[S.w100]} />
    )}
  </article>
);

export default AxieCard;
