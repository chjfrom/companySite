import { initParticlesEngine } from '@tsparticles/react';
import { createContext, useContext, useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { loadBasic } from '@tsparticles/basic'; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { loadImageShape } from '@tsparticles/shape-image';

const ParticleContext = createContext({ init: false });

export const useParticles = () => useContext(ParticleContext);

export default function ParticleProvider({ children }) {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return <ParticleContext.Provider value={{ init }}>{children}</ParticleContext.Provider>;
}
