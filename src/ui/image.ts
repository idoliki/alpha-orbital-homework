import { styled } from '@stitches/react';

export const ImageWrapper = styled('div', {
   width: '100%',
   position: 'relative',
   overflow: 'hidden',

   variants: {
      size: {
         cardImage: {
            height: '150px',
         },
      },
   },
   defaultVariants: {
      size: 'cardImage',
   },
});
