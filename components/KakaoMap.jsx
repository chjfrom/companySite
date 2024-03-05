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

const LINK_URL =
  'https://map.kakao.com/?urlX=483936&urlY=1118166&itemId=8050090&q=%EC%9C%A8%EC%B4%8C%EB%B9%8C%EB%94%A9&srcid=8050090&map_type=TYPE_MAP&from=roughmap';

const IMAGE_URL =
  'http://t1.daumcdn.net/roughmap/imgmap/cec47a999dc21f22bf2dfd7886b7bf5b6039d903b3df2ae7d8d555e01f9c9d1e';

export default function KakaoMap() {
  return (
    <Wrap href={LINK_URL} target="_blank">
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
