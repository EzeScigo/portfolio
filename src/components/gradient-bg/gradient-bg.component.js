import React from 'react';
import styled from 'styled-components';

import useRainbow from '../../state/hooks/useRainbowHook';

const GradientBackground = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  return (
    <BackgroundDiv
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear,
          ${colorKeys[3]} ${transitionDelay}ms linear,
          ${colorKeys[4]} ${transitionDelay}ms linear,
          ${colorKeys[5]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[5]}),
            var(${colorKeys[4]}),
            var(${colorKeys[3]}),
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </BackgroundDiv>
  );
};

const BackgroundDiv = styled.div`
  position: relative;
  border: none;
  width: 100%;
  height: 100vh;
  /* position: fixed; */
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-items: center;
`;

export default GradientBackground;