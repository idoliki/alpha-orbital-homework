import React from 'react';
import ContentLoader from 'react-content-loader';

import useDevice, { DeviceBreakpoint } from '@/hooks/useDevice';

import { styled } from '@/ui/stitches.config';

const DesktopLayout = () => {
   return (
      <>
         <rect x='0' y='0' rx='3' ry='3' width='205' height='41' />
         <rect x='216' y='0' rx='3' ry='3' width='205' height='41' />
         <rect x='433' y='0' rx='3' ry='3' width='205' height='41' />
         <rect x='648' y='0' rx='3' ry='3' width='205' height='41' />
         <rect x='865' y='0' rx='3' ry='3' width='205' height='41' />
      </>
   );
};

const MobileLayout = () => {
   return (
      <>
         <rect x='0' y='0' rx='3' ry='3' width='100%' height='38' />
         <rect x='0' y='48' rx='3' ry='3' width='100%' height='38' />
         <rect x='0' y='96' rx='3' ry='3' width='100%' height='38' />
         <rect x='0' y='144' rx='3' ry='3' width='100%' height='38' />
         <rect x='0' y='192' rx='3' ry='3' width='100%' height='38' />
      </>
   );
};

const ContentLoaderStyled = styled(ContentLoader, {
   width: '100%',
   height: '240px',
   '@laptop': {
      height: '41px',
   },
});

const SkeletonCategoryFilters: React.FC = (props) => {
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
export default SkeletonCategoryFilters;
