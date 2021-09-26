// prettier-ignore
export const geneTraitBits = {
  256: [
      { bits: [0, 4],     gene: "cls" },
   // { bits: [4, 8],     gene: "unknown" },
      { bits: [8, 13],    gene: "region" },
      { bits: [13, 18],   gene: "tag" },
      { bits: [18, 22],   gene: "bodySkin" },
      { bits: [22, 34],   gene: "xMas" },
      { bits: [34, 52],   gene: "pattern" },
      { bits: [52, 64],   gene: "color" },

      { bits: [64, 96],   gene: "eyes" },
      { bits: [96, 128],  gene: "mouth" },
      { bits: [128, 160], gene: "ears" },
      { bits: [160, 192], gene: "horn" },
      { bits: [192, 224], gene: "back" },
      { bits: [224, 256], gene: "tail" },
  ],
  512: [
      { bits: [0, 5],     gene: "cls" },
   // { bits: [5, 22],    gene: "unknown" },
      { bits: [22, 40],   gene: "region" },
      { bits: [40, 55],   gene: "tag" },
   // { bits: [55, 61],   gene: "unknown" },
      { bits: [61, 65],   gene: "bodySkin" },
      { bits: [65, 92],   gene: "pattern" },
      { bits: [92, 110],  gene: "color" },
   // { bits: [110, 149], gene: "unknown" },
      { bits: [149, 192], gene: "eyes" },
   // { bits: [192, 213], gene: "unknown" },
      { bits: [213, 256], gene: "mouth" },
   // { bits: [256, 277], gene: "unknown" },
      { bits: [277, 320], gene: "ears" },
   // { bits: [320, 341], gene: "unknown" },
      { bits: [341, 384], gene: "horn" },
   // { bits: [384, 405], gene: "unknown" },
      { bits: [405, 448], gene: "back" },
   // { bits: [448, 469], gene: "unknown" },
      { bits: [469, 512], gene: "tail" },
  ],
};

export const geneBits = {
  256: [
    { bits: [0, 2], gene: 'mystic' }, // Skin?
    { bits: [2, 6], gene: 'd.class' },
    { bits: [6, 12], gene: 'd.part' },

    { bits: [12, 16], gene: 'r1.class' },
    { bits: [16, 22], gene: 'r1.part' },

    { bits: [22, 26], gene: 'r2.class' },
    { bits: [26, 32], gene: 'r2.part' },
  ],
  512: [
    { bits: [0, 4], gene: 'mystic' }, // Skin?
    { bits: [4, 9], gene: 'd.class' },
    { bits: [11, 17], gene: 'd.part' },

    { bits: [17, 22], gene: 'r1.class' },
    // { bits: [22, 24],  gene: "r1.class" }, // Unknown.
    { bits: [24, 30], gene: 'r1.part' },

    { bits: [30, 35], gene: 'r2.class' },
    // { bits: [35, 37],  gene: "r1.class" }, // Unknown.
    { bits: [37, 43], gene: 'r2.part' },
  ],
};

const alleles256 = (offset) => ({
  mystic: [0, 2].map((n) => n + offset),
  d: {
    class: [2, 6].map((n) => n + offset),
    part: [6, 12].map((n) => n + offset),
  },
  r1: {
    class: [12, 16].map((n) => n + offset),
    part: [16, 22].map((n) => n + offset),
  },
  r2: {
    class: [22, 26].map((n) => n + offset),
    part: [26, 32].map((n) => n + offset),
  },
});

const alleles512 = (offset) => ({
  mystic: [0, 4].map((n) => n + offset),
  d: {
    class: [4, 9].map((n) => n + offset),
    part: [11, 17].map((n) => n + offset),
  },
  r1: {
    class: [17, 22].map((n) => n + offset),
    part: [24, 30].map((n) => n + offset),
  },
  r2: {
    class: [30, 35].map((n) => n + offset),
    part: [37, 43].map((n) => n + offset),
  },
});

export const geneSlotsMap = {
  256: {
    eyes: alleles256(64),
    mouth: alleles256(96),
    ears: alleles256(128),
    horn: alleles256(160),
    back: alleles256(192),
    tail: alleles256(224),
  },
  512: {
    eyes: alleles512(149),
    mouth: alleles512(213),
    ears: alleles512(277),
    horn: alleles512(341),
    back: alleles512(405),
    tail: alleles512(469),
  },
};

// prettier-ignore
export const geneMap = {
  class: {
   // 256 bit
   '0000': "beast",
   '0001': "bug",
   '0010': "bird",
   '0011': "plant",
   '0100': "aquatic",
   '0101': "reptile",
   '1000': "mech",
   '1001': "dawn",
   '1010': "dusk",

   // 512 bit
   '00000': "beast",
   '00001': "bug",
   '00010': "bird",
   '00011': "plant",
   '00100': "aquatic",
   '00101': "reptile",
   '10000': "dawn",
   '10001': "mech",
   '10010': "dusk",
  },


  region: {
    // 256 bit
    '00000': 'global',
    '00001': 'japan',
  },

  tag: {
    // 256 bit
    '00000': 'default',
    '00001': 'origin',
    '00011': 'meo1',
    '00100': 'meo2',

    // 512 bit
    '000000000000000': 'default',
    '000000000000001': 'origin',
    '000000000000010': 'meo1',
    '000000000000011': 'meo2',
  }
}
