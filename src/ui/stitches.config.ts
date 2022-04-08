import { createStitches, globalCss, PropertyValue } from '@stitches/react';

export const { styled, theme, css, keyframes, getCssText } = createStitches({
   theme: {
      fonts: {
         primary: 'Inter, sans-serif',
      },
      colors: {
         primary: '#227c9d',
         secondary: '#ef476f',
         lightBackground: 'hsl(0deg 0% 98%)',
         textGray: '#787878',
         textBlack: '#000000',
      },
      radii: {
         primary: '4px',
      },
      shadows: {
         primary: 'hsl(0deg 0% 0% / 10%) 1px 2px 4px',
      },
      space: {
         xsmall: '3px',
         small: '5px',
         normal: '8px',
         medium: '12px',
         large: '15px',
         xlarge: '20px',
      },
      fontSizes: {
         small: '.9rem',
      },
   },
   media: {
      tablet: '(min-width: 768px)',
      laptop: '(min-width: 1024px)',
      desktop: '(min-width: 1360px)',
      largeDesktop: '(min-width: 1600px)',
   },
   utils: {
      my: (value: PropertyValue<'marginTop'>) => ({
         marginTop: value,
         marginBottom: value,
      }),
   },
});

export const globalStyles = globalCss({
   html: {
      fontSize: '16px',
   },
   body: {
      margin: 0,
      padding: 0,
      fontFamily: theme.fonts.primary,
      background: theme.colors.lightBackground,
   },
   p: {
      padding: 0,
      margin: 0,
   },
   a: {
      color: 'inherit',
      textDecoration: 'none',
   },
   '*': {
      boxSizing: 'border-box',
   },
});
