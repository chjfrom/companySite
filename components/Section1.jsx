import styled from '@emotion/styled';
import ParticleBg from './ParticleBg';

const ParticleBgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default function Section1() {
  return (
    <div className="section">
      <ParticleBgBox>
        <ParticleBg />
      </ParticleBgBox>
      <h1>section1</h1>
    </div>
  );
}
