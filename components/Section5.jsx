import styled from '@emotion/styled';
import KakaoMap from './KakaoMap';

const Wrap = styled.div`
  box-sizing: border-box;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 28px;
  margin-bottom: 20px;
`;

const Top = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  text-align: left;

  & > span {
    font-size: 40px;
    font-weight: 700;
    line-height: 46px;
  }
`;

const MapBox = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Bottom = styled.footer`
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;
  padding: 20px 0;

  color: #979797;

  > div {
    flex: 1;
  }
`;

const DirectionsBox = styled.div`
  display: flex;

  width: 100%;
`;

export default function Section5() {
  return (
    <Wrap className="inner sectionBox">
      <DirectionsBox>
        <Top>
          <span className="fointBlueText">로건스톤</span>
          <br />
          <span>찾아오시는길</span>
        </Top>
        <MapBox>
          <KakaoMap />
        </MapBox>
      </DirectionsBox>

      <Bottom>
        <div>
          <h4>(주)로건스톤</h4>
          <p>서울특별시 영등포구 국제금융로 20, 5층 B520호(여의도동, 율촌빌딩)</p>
          <br />
          <p>사업자등록번호: 564-81-01633</p>
          <p>전화번호: 000-0000-0000</p>
          <p>팩스번호: 0504-498-1998</p>
        </div>
        <div>
          <h4>고객지원</h4>
          <br />
          <ul>
            <ol>도움말 및 자료</ol>
            <ol>서비스 및 플랜</ol>
            <ol>커뮤니티</ol>
          </ul>
        </div>
      </Bottom>
    </Wrap>
  );
}
