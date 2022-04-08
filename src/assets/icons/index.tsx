import React from 'react';
import Close from './close.svg';

const iconTypes = {
   close: Close,
} as const;

interface IconProps extends React.SVGProps<SVGSVGElement> {
   name: keyof typeof iconTypes;
}

const SvgIcon: React.FC<IconProps> = ({ name, ...props }) => {
   const ImageIcon = iconTypes[name];

   return <ImageIcon {...props} />;
};

export default SvgIcon;
