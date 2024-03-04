import { useMemo } from 'react';
import Particles from '@tsparticles/react';
import { useParticles } from './ParticleProvider';
import Elipse from '@/public/ellipse.svg';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

const ParticleBgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
`;

export default function ParticleBg() {
  const { init } = useParticles();
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        // events: {
        //   onHover: {
        //     enable: true,
        //     mode: 'repulse',
        //   },
        // },
        // modes: {
        //   repulse: {
        //     distance: 200,
        //     duration: 0.4,
        //   },
        // },
      },
      particles: {
        move: {
          direction: 'outside',
          enable: !isMobile,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: true,
        },
        number: {
          value: 4,
          limit: 4,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ['image'],
          options: {
            image: [
              {
                src: Elipse.src,
              },
            ],
          },
        },
        size: {
          value: isMobile ? { min: 25, max: 100 } : { min: 50, max: 150 },
        },
      },
    }),
    [isMobile],
  );

  return (
    <ParticleBgBox>
      {init && <Particles id="particleBg" options={options} />}
      <Backdrop />
    </ParticleBgBox>
  );
}
