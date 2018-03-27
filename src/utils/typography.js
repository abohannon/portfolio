import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.6,
  headerFontFamily: ['roboto', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['roboto', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    '::selection': {
      backgroundColor: '#42a5f5',
      color: '#fff',
    },
  }),
});

export default typography;
