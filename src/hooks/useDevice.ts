import React from 'react';

export enum DeviceBreakpoint {
   'MOBILE',
   'LAPTOP',
   'DESKTOP',
}

const breakpoints = {
   laptop: 1024,
   desktop: 1360,
};

const useDevice = () => {
   const [device, setDevice] = React.useState(DeviceBreakpoint.LAPTOP);

   React.useEffect(() => {
      const detectedDevice =
         document.documentElement.clientWidth < breakpoints.laptop
            ? DeviceBreakpoint.MOBILE
            : document.documentElement.clientWidth < breakpoints.desktop
            ? DeviceBreakpoint.LAPTOP
            : DeviceBreakpoint.DESKTOP;
      setDevice(detectedDevice);
   }, []);

   return device;
};

export default useDevice;
