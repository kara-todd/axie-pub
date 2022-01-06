import React from 'react';
import _get from 'lodash.get';

import AxieGenes from 'components/AxieGenes';
import AxieIcon from 'components/axie-icon/AxieIcon';
import AxiePrice from 'components/AxiePrice';
import AxieStats from 'components/AxieStats';

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

const AxieImage = ({ id, image, name }) => (
  <h2 className="m-0">
    <a
      className="flex flex-col items-center text-base"
      href={`https://marketplace.axieinfinity.com/axie/${id}?referrer=axie.pub`}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex items-center justify-center relative h-40 w-full">
        <img
          src={image}
          className="absolute h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      {name}
    </a>
  </h2>
);

const AxieMarketInfo = ({ id, breedCount, quality, cls, auction }) => (
  <div className="flex items-center w-full">
    {quality && (
      <abbr title="Quality" className="flex items-center px-2 pt-1">
        <AxieIcon cls={cls} /> {quality}%
      </abbr>
    )}
    <p className="flex items-center px-2 pt-1 m-0">
      <HeartIcon height={16} width={16} className="pr-1" /> {breedCount}
    </p>
    <AxiePrice auction={auction} className="px-2 pt-1 m-0" />
    <p
      className="m-0 text-sm absolute top-0 right-0 p-2"
      style={{ backgroundColor: `var(--color-${cls})` }}
    >
      {`#` + id}
    </p>
  </div>
);

const AxieCard = ({ class: axieClass, ...props }) => {
  const { id } = props;
  const cls = (axieClass || 'uknown').toLowerCase();

  return (
    <article key={id} className="m-0 relative pt-0 bg-[rgba(255,255,255,0.05)]">
      <header
        className="flex flex-col-reverse p-0 border-t"
        style={{ borderColor: `var(--color-${cls})` }}
      >
        <AxieImage {...props} />
        <AxieMarketInfo {...props} cls={cls} />
      </header>
      <AxieStats {...props} />
      <AxieGenes {...props} cls={cls} className="w-full" />
    </article>
  );
};

export default AxieCard;
