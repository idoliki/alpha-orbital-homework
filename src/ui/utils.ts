import { styled } from '@/ui/stitches.config';

export const Spacer = styled('div', {
   variants: {
      size: {
         1: { my: '5px' },
         2: { my: '10px' },
         3: { my: '15px' },
         4: { my: '20px' },
         5: { my: '30px' },
         6: { my: '40px' },
         7: { my: '50px' },
         8: { my: '60px' },
         9: { my: '70px' },
      },
   },
   defaultVariants: {
      size: 3,
   },
});
