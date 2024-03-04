//css
import '@/styles/reset.css';
import '@/styles/global.css';

import ParticleProvider from '@/components/ParticleProvider';

const App = ({ Component, pageProps }) => {
  return (
    <ParticleProvider>
      <Component {...pageProps} />
    </ParticleProvider>
  );
};

export default App;
