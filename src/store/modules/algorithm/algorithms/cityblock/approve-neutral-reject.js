export default {
  options: [
    {
      alias: 'approve',
      direction: 'positive',
      icon: 'check',
      colors: {
        base: '#00b248',
        contrast: '#FFFFFF',
        lighter: '#C6F6D5',
        darker: '#00803d',
      },
    },
    {
      alias: 'neutral',
      direction: 'neutral',
      icon: 'minus',
      colors: {
        base: '#84909f',
        contrast: '#FFFFFF',
        darker: '#545e6e',
        lighter: '#EDF2F7',
      },
    },
    {
      alias: 'reject',
      direction: 'negative',
      icon: 'times',
      colors: {
        base: '#ff0000',
        contrast: '#FFFFFF',
        darker: '#8f0000',
        lighter: '#FED7D7',
      },
    },
  ],
  points: [
    [2, 1, 0],
    [1, 2, 1],
    [0, 1, 2],
  ],
};
