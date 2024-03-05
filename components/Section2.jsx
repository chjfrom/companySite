import styled from '@emotion/styled';

const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
  padding: 0px 6%;
  margin: 0 auto;
`;

const SectionBox = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
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

const SubText = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font-size: 0.9em;
  line-height: 34px;
  color: #979797;
  font-weight: 700;
  > span {
    color: #fff;
  }
`;

export default function Section2() {
  return (
    <Wrap>
      <SectionBox>
        <Title>
          전문적인 솔루션 <br />
          <span>로건스톤 회사 소개</span>
        </Title>
        <SubText>
          <span>세상을 바꾸는 힘</span>은 로건스톤의 목표입니다. <br /> 우리는 모두가 행복한 삶을
          누릴 수 있는 가능성을 믿고 있습니다. 이러한 의지와 힘은 우리가 다양한 분야에서 성공적으로
          거둔 경험과 노하우를 통해 축적되었습니다. 로건 스톤은 당신의 비즈니스를 성공적으로
          이끌어내기 위해 열정적인 팀워크와 끈기 있는 지구력을 가지고 있습니다. <br />
        </SubText>
        <SubText>
          우리의 역량은 <span>금융서비스를 제공</span>하는 기업과 고객을 연결하는 원스톱서비스를
          제공하는 데에 있습니다. <br />
          우리는 고객의 다양한 <span>금융 니즈를 파악</span>하고, 그에 맞춤형{' '}
          <span>솔루션을 제공</span>하여 고객들이 보다 편리하고 효율적으로 금융 서비스를 이용할 수
          있도록 돕고 있습니다. 우리의 플랫폼은 고객들에게 <span>안전하고 빠른 거래</span>를
          보장하며, 금융 서비스를 보다 쉽게 이용할 수 있도록 도와줍니다. 함께하면 우리는 더 많은
          사람들에게 긍정적인 영향을 미칠 수 있는 <span>가능성을 창출</span>할 것입니다.
        </SubText>
      </SectionBox>
    </Wrap>
  );
}
