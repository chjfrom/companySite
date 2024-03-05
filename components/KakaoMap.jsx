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

const IMAGE_URL =
  'http://t1.daumcdn.net/roughmap/imgmap/cec47a999dc21f22bf2dfd7886b7bf5b6039d903b3df2ae7d8d555e01f9c9d1e';

export default function KakaoMap() {
  return (
    <Wrap
      href="https://map.kakao.com/?urlX=496725&amp;urlY=1129958&amp;itemId=13057692&amp;q=%EB%AF%B8%EB%9E%98%EC%97%90%EC%85%8B%EC%84%BC%ED%84%B0%EC%9B%90%EB%B9%8C%EB%94%A9&amp;srcid=13057692&amp;map_type=TYPE_MAP&amp;from=roughmap"
      target="_blank"
    >
      <Image
        alt="로건스톤 지도 이미지링크"
        src={IMAGE_URL}
        // width="638"
        // height="358"
        fill
      />
    </Wrap>
  );
}
