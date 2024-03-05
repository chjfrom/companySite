import styled from '@emotion/styled';

const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
  padding: 0px 2%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    padding: 0px 6%;
  }
`;

const SectionBox = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 20px;
  column-gap: 30px;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    font-size: 13px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const VexkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 28%;
  font-size: 20px;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    font-size: 13px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const VexkImg = styled.div`
  box-sizing: border-box;
  flex: 1;
  > img {
    display: block;
    width: 100%;
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font-size: 2em;
  font-weight: 700;
  line-height: 46px;
  color: #fff;
  margin-bottom: 20px;
  > span {
    color: #0047ff;
  }
`;

const ContentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    display: flex;
    gap: 10px;

    .num {
      color: #0047ff;
      font-weight: 700;
      font-size: 1.3em;
    }

    p {
      color: #fff;
      font-weight: 700;
      font-size: 1.3em;
    }
  }
`;

export default function Section4() {
  return (
    <Wrap>
      <SectionBox>
        <VexkBox>
          <Title>
            대표 금융플랫폼 <br />
            <span>VEXK</span>
          </Title>
          <ContentsList>
            <div>
              <p className="num">01</p>
              <p>실시간 데이터 처리</p>
            </div>
            <div>
              <p className="num">02</p>
              <p>검증된 데이터 설계</p>
            </div>
            <div>
              <p className="num">03</p>
              <p>모바일 웹 반응형 처리</p>
            </div>
          </ContentsList>
        </VexkBox>
        <VexkImg>
          <img src="/vexk.png" />
        </VexkImg>
      </SectionBox>
    </Wrap>
  );
}
