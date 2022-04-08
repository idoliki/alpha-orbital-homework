import { styled } from '@/ui/stitches.config';

export const Card = styled('article', {
   display: 'flex',
   flexDirection: 'column',
   height: '100%',
   background: 'white',
   borderRadius: '$primary',
   border: '1px solid lightgray',
   position: 'relative',
   overflow: 'hidden',
});

export const CardOverlay = styled('div', {
   position: 'absolute',
   right: 0,
   top: 0,
   padding: '15px',
   zIndex: 2,
});

export const CardBody = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   padding: '$medium',
   flex: '1',
});
