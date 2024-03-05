import styled from '@emotion/styled';
import Image from 'next/image';

const Wrap = styled.a`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 358px;
  display: inline-block;
  border-radius: 5px;

  img {
    object-fit: cover;
  }
`;

export default function KakaoMap() {
  return (
    <Wrap
      href="https://map.kakao.com/?urlX=496725&amp;urlY=1129958&amp;itemId=13057692&amp;q=%EB%AF%B8%EB%9E%98%EC%97%90%EC%85%8B%EC%84%BC%ED%84%B0%EC%9B%90%EB%B9%8C%EB%94%A9&amp;srcid=13057692&amp;map_type=TYPE_MAP&amp;from=roughmap"
      target="_blank"
    >
      <Image
        alt="로건스톤 지도 이미지링크"
        src="http://t1.daumcdn.net/roughmap/imgmap/f081893c2769b25def1d74c4c1646a0aef3f951508f7e670f410e56c0e364925"
        // width="638"
        // height="358"
        fill
      />
    </Wrap>
  );
}
