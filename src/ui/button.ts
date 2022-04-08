import { styled } from '@/ui/stitches.config';

export const Button = styled('button', {
   $$background: 'red',
   background: 'transparent',
   border: '2px solid black',
   color: 'black',
   fontSize: '$small',
   fontFamily: '$primary',
   fontWeight: '500',
   padding: '9px 13px',
   borderRadius: '$primary',
   textAlign: 'center',
   cursor: 'pointer',
   transition: 'all .3s ease',
   variants: {
      fullWidth: {
         true: {
            width: '100%',
         },
      },
      active: {
         true: {
            background: 'black',
            color: 'White',
         },
      },
      color: {
         primary: {
            color: '$primary',
            borderColor: '$primary',
            '&:hover': {
               backgroundColor: '$primary',
               color: 'White',
            },
         },
         secondary: {
            color: '$secondary',
            borderColor: '$secondary',
            '&:hover': {
               backgroundColor: '$secondary',
               color: 'White',
            },
         },
      },
   },
   compoundVariants: [
      {
         active: true,
         color: 'primary',
         css: {
            backgroundColor: '$primary',
            color: 'White',
         },
      },
   ],
});

export const ButtonIcon = styled('button', {
   background: 'transparent',
   border: 'none',
   cursor: 'pointer',
   padding: 0,
   variants: {
      showOnHover: {
         true: {
            opacity: 0,
            '&:hover': { opacity: 1 },
            '&:focus': { opacity: 1 },
            '&:active': { opacity: 1 },
         },
      },
   },
});
