import styled from '@emotion/styled';
import KakaoMap from './KakaoMap';

const Wrap = styled.div`
  /* margin-top: 120px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const Top = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  padding: 10px 20%;
  text-align: left;

  & > span {
    font-size: 40px;
    font-weight: 700;
    line-height: 46px;
  }
`;

const Middle = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
`;

const Bottom = styled.footer`
  box-sizing: border-box;
  display: flex;
  background-color: #070707;
  font-size: 14px;
  width: 100%;
  padding: 7px 14px;
  justify-content: flex-start;
  text-align: left;

  > div {
    flex: 1;
  }
`;

export default function Section5() {
  return (
    <Wrap className="inner sectionBox">
      <Top>
        <span className="fointBlueText">로건스톤</span>
        <br />
        <span>찾아오시는길</span>
      </Top>
      <Middle>
        <KakaoMap />
      </Middle>
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
