import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonText: React.FC = (props) => {
   return (
      <ContentLoader
         speed={5}
         width='100%'
         height={14}
         backgroundColor='#f3f3f3'
         foregroundColor='#ecebeb'
         {...props}
      >
         <rect x='0' y='0' rx='0' ry='0' width='100%' height='14' />
      </ContentLoader>
   );
};
export default SkeletonText;
