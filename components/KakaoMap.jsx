import parse from 'html-react-parser';
import mapSrc from '@/consts/map';
import styled from '@emotion/styled';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > #kakaoMap {
    width: 100%;

    object-fit: contain;

    .map {
      position: relative;
      object-fit: cover;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default function KakaoMap() {
  return <Wrap>{parse(mapSrc)}</Wrap>;
}
