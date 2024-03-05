import styled from '@emotion/styled';
import MobileSection from './MobileSection';

const Wrap = styled.div`
  display: none;
  width: 100%;
  background-color: #070707;
  box-sizing: border-box;
  @media (max-width: 760px) {
    display: block;
  }
  > img {
    display: block;
    width: 100%;
  }
`;

export default function Mobile() {
  return (
    <Wrap>
      <img src="/companyMobile.png" />
      <MobileSection />
    </Wrap>
  );
}
