import styled from '@emotion/styled';

const SectionBox = styled.div`
  padding: 10px 40px 30px;
  color: #979797;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  @media (max-width: 450px) {
    font-size: 14px;
    padding: 8px 30px 30px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
    padding: 8px 24px 30px;
  }
  h4 {
    color: #fff;
  }

  .MarginBottom {
    margin-bottom: 20px;
  }
`;

export default function MobileSection() {
  return (
    <SectionBox>
      <div>
        <h4>(주)로건스톤</h4>
        <p>서울특별시 영등포구 국제금융로 20, 5층 B520호</p>
        <p className="MarginBottom">(여의도동, 율촌빌딩)</p>
      </div>
      <div>
        <p>사업자등록번호: 564-81-01633</p>
        <p>전화번호: 000-0000-0000</p>
        <p className="MarginBottom">팩스번호: 0504-498-1998</p>
      </div>
      <div>
        <h4 className="MarginBottom">고객지원</h4>
        <ul>
          <ol>도움말 및 자료</ol>
          <ol>서비스 및 플랜</ol>
          <ol>커뮤니티</ol>
        </ul>
      </div>
    </SectionBox>
  );
}
