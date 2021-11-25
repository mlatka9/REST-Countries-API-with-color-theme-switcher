export const theme = {
  colors: {
    white: '#FFF',
    darkBlue: '#2b3743',
    darkishBlue: '#3b4b5c',
    veryDarkBlue: '#202C37',
  },
  fontSize: {
    s: '14px',
    m: '16px',
  },
  fontWeight: {
    slim: 300,
    medium: 600,
    bold: 800,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    white: '#111517',
    darkBlue: 'white',
    darkishBlue: 'white',
    veryDarkBlue: '#FAFAFA',
  },
};
