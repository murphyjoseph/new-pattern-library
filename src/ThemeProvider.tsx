import React, { useContext, useMemo } from 'react';
// import { themeObj } from './themeObj';

const ThemeContext = React.createContext({});

const ThemeProvider = ({ theme, children }: any) => {
  const appChildren = useMemo(() => children, [children]);
  console.log(children);
  return (
    <ThemeContext.Provider value={theme}>
      {appChildren}
    </ThemeContext.Provider>
  )
};

const useStyles: any = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useStyles must be used within a ThemeProvider')
  }
  return context;
}

const withStyles = (...styles: any) => (WrappedComponent: any) => {
  const WithStyles = (props: any) => {
    const theme = useStyles();
    let combinedStyles = {};
    if (!Array.isArray(styles)) {
      combinedStyles = styles(theme)
    } else {
      styles.forEach((val: any) => {
        if (typeof val === 'function') {
          combinedStyles = {
            ...combinedStyles,
            ...val(theme)
          }
        } else {
          combinedStyles = {
            ...combinedStyles,
            ...val,
          }
        }
      })
    }
    const compProps = {
      ...props,
      styles: combinedStyles,
    }
    return <WrappedComponent {...compProps} />
  }
  return WithStyles;
}
export { ThemeProvider, useStyles, withStyles };