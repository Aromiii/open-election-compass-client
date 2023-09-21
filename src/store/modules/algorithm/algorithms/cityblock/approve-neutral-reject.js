export default {
  options: [
    {
      alias: 'approve',
      direction: 'positive',
      icon: 'check',
      colors: {
        base: '#009a3d',
        contrast: '#FFFFFF',
        lighter: '#C6F6D5',
        darker: '#005d29',
      },
    },
    {
      alias: 'neutral',
      direction: 'neutral',
      icon: 'minus',
      colors: {
        base: '#7a8493',
        contrast: '#FFFFFF',
        darker: '#424957',
        lighter: '#EDF2F7',
      },
    },
    {
      alias: 'reject',
      direction: 'negative',
      icon: 'times',
      colors: {
        base: '#ff4141',
        contrast: '#FFFFFF',
        darker: '#a81010',
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
