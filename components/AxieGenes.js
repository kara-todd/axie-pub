import React from 'react';
import _get from 'lodash.get';

const parts = ['eyes', 'ears', 'back', 'mouth', 'horn', 'tail'];

import AxieIconPart from 'components/axie-icon/AxieIconPart';

import * as S from 'components/AxieGenes.styles';

const GeneCell = ({ partId, name, cls }) => (
  <td
    css={[S.borderBot]}
    style={{ color: `var(--color-${cls})` }}
    title={partId}
  >
    {name}
  </td>
);

const AxieGenes = ({ genes, cls, quality, className }) => {
  const traits = Object.entries(genes).filter(([key]) => parts.includes(key));
  return (
    <table css={[S.textXs, S.borderCollapse]} className={className}>
      <thead>
        <tr css={S.textLeft}>
          <td></td>
          <th scope="col">D</th>
          <th scope="col">R1</th>
          <th scope="col">R2</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        {traits.map(([part, gene]) => (
          <tr key={part}>
            <th css={[S.textLeft, S.borderBot, S.pl2]} title={part} scope="row">
              <AxieIconPart part={part} cls={cls} width={28} height={28} />
            </th>
            <GeneCell {..._get(gene, 'd')} />
            <GeneCell {..._get(gene, 'r1')} />
            <GeneCell {..._get(gene, 'r2')} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AxieGenes;
