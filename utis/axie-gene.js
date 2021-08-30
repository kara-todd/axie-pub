// prettier-ignore
const geneBitRanges = {
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

// prettier-ignore
const geneMap = {
  cls: {
   // 256 bit
   '0000': "Beast",
   '0001': "Bug",
   '0010': "Bird",
   '0011': "Plant",
   '0100': "Aquatic",
   '0101': "Reptile",
   '1000': "Mech",
   '1001': "Dawn",
   '1010': "Dusk",

   // 512 bit
   '00000': "Beast",
   '00001': "Bug",
   '00010': "Bird",
   '00011': "Plant",
   '00100': "Aquatic",
   '00101': "Reptile",
   '10000': "Dawn",
   '10001': "Mech",
   '10010': "Dusk",
  },


  region: {
    // 256 bit
    '00000': 'Global',
    '00001': 'Japan',
  },

  tag: {
    // 256 bit
    '00000': 'Default',
    '00001': 'Origin',
    '00011': 'Meo1',
    '00100': 'Meo2',

    // 512 bit
    '000000000000000': 'Default',
    '000000000000001': 'Origin',
    '000000000000010': 'Meo1',
    '000000000000011': 'Meo2',
  }
}
