import React from 'react';
import useIncrementingNumber from './useIncrementingNumberHook';

const rainbowColors = [
  '#01325c',
  '#053258',
  '#093254',
  '#0c3151',
  '#10314d',
  '#13314a',
  '#173046',
  '#1a3043',
  '#1e303f',
  '#22303b',
  '#252f38',
  '#292f34', 
  '#2c2f31',
  '#292f34', 
  '#252f38', 
  '#22303b', 
  '#1e303f',
  '#1a3043',
  '#173046',
  '#13314a',
  '#10314d',
  '#0c3151',
  '#093254',
  '#053258',
  '#01325c'
];
const paletteSize = rainbowColors.length;
const useRainbow = ({ intervalDelay = 3000 }) => {
  // const { current: uniqueId } = React.useRef(generateId());
  // Register all custom properties.
  // This only ever needs to be done once, so there are no dependencies.
  React.useEffect(() => {
    for (let i = 0; i < 5; i++) {
      try {
        CSS.registerProperty({
          name: `--magic-rainbow-color-${i}`,
          initialValue: rainbowColors[i],
          syntax: '<color>',
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);
  // Using that interval count, derive each current color value
  return {
    '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
    '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
    '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
    '--magic-rainbow-color-3': rainbowColors[(intervalCount + 4) % paletteSize],
    '--magic-rainbow-color-4': rainbowColors[(intervalCount + 5) % paletteSize],
    '--magic-rainbow-color-5': rainbowColors[(intervalCount + 6) % paletteSize],
  };
};
export default useRainbow;