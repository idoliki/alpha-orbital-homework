import { styled } from '@/ui/stitches.config';

export const Container = styled('div', {
   width: '100%',
   padding: '15px',
   margin: '0 auto',
   '@tablet': {
      maxWidth: '750px',
   },
   '@desktop': {
      maxWidth: '1100px',
   },
});

export const Grid = styled('div', {
   display: 'grid',
   gap: '$normal',
   variants: {
      cols: {
         1: {
            gridTemplateColumns: 'repeat(1, 1fr);',
         },
         2: {
            '@laptop': {
               gridTemplateColumns: 'repeat(2, 1fr);',
            },
         },
         3: {
            '@laptop': {
               gridTemplateColumns: 'repeat(2, 1fr);',
            },
            '@desktop': {
               gridTemplateColumns: 'repeat(3, 1fr);',
            },
         },
         4: {
            '@laptop': {
               gridTemplateColumns: 'repeat(2, 1fr);',
            },
            '@dekstop': {
               gridTemplateColumns: 'repeat(4, 1fr);',
            },
         },
         5: {
            '@laptop': {
               gridTemplateColumns: 'repeat(5, 1fr);',
            },
         },
      },
      spacing: {
         xsmall: { gap: '$xsmall' },
         small: { gap: '$small' },
         normal: { gap: '$normal' },
         medium: { gap: '$medium' },
         large: { gap: '$large' },
         xlarge: { gap: '$xlarge' },
      },
   },
});
