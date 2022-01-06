import React from 'react';
import _get from 'lodash.get';

import AxieIconPart from 'components/axie-icon/AxieIconPart';
import { parseGenes } from 'hooks/useGenes';

// const { AxieGene } = require('agp-npm/dist/axie-gene');

const GeneCell = ({ partId, name, cls, bits, type }) => (
  <td
    className="border-b border-white/10"
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
  <table className={`${className} text-xs border-collapse`}>
    <thead>
      <tr className="text-left">
        <td></td>
        <th scope="col">D</th>
        <th scope="col">R1</th>
        <th scope="col">R2</th>
      </tr>
    </thead>
    <tbody>
      {parts.map(([part, gene]) => (
        <tr key={part}>
          <th
            className="text-left border-b border-white/10 pl-2"
            title={part}
            scope="row"
          >
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
    <div className="flex flex-col">
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
