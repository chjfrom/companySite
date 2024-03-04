import styled from '@emotion/styled';
import KakaoMap from './KakaoMap';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Inner = styled.div`
  width: 100%;
`;

export default function Section5() {
  return (
    <Wrap className="inner sectionBox">
      <div>
        <h1>section5</h1>
      </div>
      <Inner>
        <KakaoMap />
      </Inner>
    </Wrap>
  );
}
