import React from 'react';
import _get from 'lodash.get';

import AxieIconPart from 'components/axie-icon/AxieIconPart';
import { parseGenes } from 'hooks/useGenes';

import tw from 'twin.macro';
import * as S from 'components/AxieGenes.styles';

// const { AxieGene } = require('agp-npm/dist/axie-gene');

const GeneCell = ({ partId, name, cls, bits, type }) => (
  <td
    css={[S.borderBot]}
    style={{ color: `var(--color-${cls})` }}
    title={partId}
    data-cls={cls}
    data-bits={bits}
    data-type={type}
  >
    {name}
  </td>
);

const AxieParts = ({ parts, className }) => (
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
      {parts.map(([part, gene]) => (
        <tr key={part}>
          <th css={[S.textLeft, S.borderBot, S.pl2]} title={part} scope="row">
            <AxieIconPart
              part={part}
              cls={_get(gene, 'd.cls', '')}
              width={28}
              height={28}
            />
          </th>
          <GeneCell {..._get(gene, 'd')} />
          <GeneCell {..._get(gene, 'r1')} />
          <GeneCell {..._get(gene, 'r2')} />
        </tr>
      ))}
    </tbody>
  </table>
);

const AxieGenes = ({ genes, className }) => {
  if (!genes) {
    return null;
  }

  // const axieGene = new AxieGene(genes);
  // const traits = parts.map((part) => [part, _get(axieGene, part)]);

  return (
    <div tw="flex flex-col">
      <section>
        <AxieParts
          parts={Object.entries(parseGenes(genes).parts)}
          className={className}
        />
      </section>
    </div>
  );
};

export default AxieGenes;
