import React from 'react';
import ContentLoader from 'react-content-loader';

import useDevice, { DeviceBreakpoint } from '@/hooks/useDevice';

import { styled } from '@/ui/stitches.config';

const DesktopLayout = () => {
   return (
      <>
         <rect x='0' y='0' rx='3' ry='3' width='343' height='294' />
         <rect x='363' y='0' rx='3' ry='3' width='343' height='294' />
         <rect x='726' y='0' rx='3' ry='3' width='343' height='294' />
         <rect x='0' y='314' rx='3' ry='3' width='343' height='294' />
         <rect x='363' y='314' rx='3' ry='3' width='343' height='294' />
         <rect x='726' y='314' rx='3' ry='3' width='343' height='294' />
         <rect x='0' y='628' rx='3' ry='3' width='343' height='294' />
         <rect x='363' y='628' rx='3' ry='3' width='343' height='294' />
         <rect x='726' y='628' rx='3' ry='3' width='343' height='294' />
      </>
   );
};

const MobileLayout = () => {
   return (
      <>
         <rect x='0' y='0' rx='3' ry='3' width='100%' height='298' />
         <rect x='0' y='308' rx='3' ry='3' width='100%' height='298' />
      </>
   );
};

const ContentLoaderStyled = styled(ContentLoader, {
   width: '100%',
   height: '600px',
   '@laptop': {
      height: '1100px',
   },
});

const SkeletonArticlesGrid: React.FC = (props) => {
   const device = useDevice();

   return (
      <ContentLoaderStyled
         speed={4}
         backgroundColor='#f3f3f3'
         foregroundColor='#ecebeb'
         {...props}
      >
         {device === DeviceBreakpoint.LAPTOP ||
         device === DeviceBreakpoint.DESKTOP ? (
            <DesktopLayout />
         ) : (
            <MobileLayout />
         )}
      </ContentLoaderStyled>
   );
};
export default SkeletonArticlesGrid;
