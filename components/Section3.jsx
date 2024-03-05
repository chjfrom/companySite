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

const ProductInfoBoxs = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 300px;
  > svg {
    width: 60px;
    height: 60px;
    @media (max-width: 1300px) {
      width: 56px;
      height: 56px;
    }
    @media (max-width: 1100px) {
      width: 52px;
      height: 52px;
    }
    @media (max-width: 1000px) {
      width: 48px;
      height: 48px;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Description = styled.div`
  text-align: left;
  font-size: 16px;
  letter-spacing: -2px;
  color: #979797;
`;

export default function Section3() {
  return (
    <Wrap>
      <SectionBox>
        <Title>
          검증된 솔루션 <br />
          <span>제품과 기술 소개</span>
        </Title>
        <ProductInfoBoxs>
          <ProductInfoBox>
            <svg
              width="87"
              height="71"
              viewBox="0 0 87 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H60.7975C65.8799 0 70 4.12008 70 9.20245V9.79755C70 14.8799 65.8799 19 60.7975 19H0V0Z"
                fill="url(#paint0_linear_1_378)"
              />
              <path
                d="M0 25.4417H40.7975C45.8799 25.4417 50 29.5618 50 34.6442V35.2393C50 40.3216 45.8799 44.4417 40.7975 44.4417H0V25.4417Z"
                fill="url(#paint1_linear_1_378)"
              />
              <path
                d="M0 50.8834H77.7975C82.8799 50.8834 87 55.0035 87 60.0859V60.681C87 65.7633 82.8799 69.8834 77.7975 69.8834H0V50.8834Z"
                fill="url(#paint2_linear_1_378)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_378"
                  x1="70"
                  y1="9.5"
                  x2="0"
                  y2="9.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.315" stop-color="#0047FF" />
                  <stop offset="1" stop-color="#012A93" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_378"
                  x1="50"
                  y1="34.9417"
                  x2="0"
                  y2="34.9417"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.315" stop-color="#0047FF" />
                  <stop offset="1" stop-color="#012A93" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_378"
                  x1="87"
                  y1="60.3834"
                  x2="0"
                  y2="60.3834"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.315" stop-color="#0047FF" />
                  <stop offset="1" stop-color="#012A93" />
                </linearGradient>
              </defs>
            </svg>
            <SubTitle>시스템 트레이딩 차트</SubTitle>
            <Description>
              금융 거래에 필요한 데이터 분석과 시각화를 제공하여 효율적인 거래 결정을 지원합니다.
            </Description>
          </ProductInfoBox>
          <ProductInfoBox>
            <svg
              width="106"
              height="74"
              viewBox="0 0 106 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="37" cy="37" r="37" fill="url(#paint0_linear_6_575)" />
              <g filter="url(#filter0_b_6_575)">
                <circle cx="69" cy="37" r="37" fill="black" fill-opacity="0.3" />
                <circle cx="69" cy="37" r="36" stroke="#C1C1C1" stroke-width="2" />
              </g>
              <defs>
                <filter
                  id="filter0_b_6_575"
                  x="22"
                  y="-10"
                  width="94"
                  height="94"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_6_575"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_6_575"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_6_575"
                  x1="74"
                  y1="37"
                  x2="0"
                  y2="37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.195" stop-color="#0047FE" />
                  <stop offset="1" stop-color="#012993" />
                </linearGradient>
              </defs>
            </svg>

            <SubTitle>금융플랫폼</SubTitle>
            <Description>
              금융플랫폼은 여러분의 금융 생활을 혁신적으로 변화시킵니다. 투자, 결제, 대출 등의
              다양한 금융 서비스를 한 곳에서 간편하게 이용해 보세요.
            </Description>
          </ProductInfoBox>
          <ProductInfoBox>
            <svg
              width="71"
              height="75"
              viewBox="0 0 71 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.2234 59.7972C51.4247 59.7972 49.1559 62.0661 49.1559 64.8648C49.1559 67.6635 51.4247 69.9324 54.2234 69.9324C57.0222 69.9324 59.291 67.6635 59.291 64.8648C59.291 62.0661 57.0222 59.7972 54.2234 59.7972ZM39.0208 0C36.222 0 31.9262 2.02703 30.4059 5.06757C31.9262 8.10811 36.222 10.1351 39.0208 10.1351C41.8195 10.1351 42.0613 7.86631 42.0613 5.06757C42.0613 2.26883 41.8195 0 39.0208 0Z"
                fill="url(#paint0_linear_2_463)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.597 68.2884C63.2583 62.1702 70.4395 50.6737 70.4395 37.5C70.4395 18.3869 55.3233 2.8044 36.3939 2.05526L39.2324 7.39153C54.0051 9.46566 65.3719 22.1554 65.3719 37.5C65.3719 48.0264 60.0227 57.3035 51.8944 62.7612L52.597 68.2884Z"
                fill="url(#paint1_linear_2_463)"
              />
              <path
                d="M24.3242 40.5404H34.4594"
                stroke="url(#paint2_linear_2_463)"
                stroke-width="5.06757"
                stroke-linecap="round"
              />
              <path
                d="M44.5947 24.3242L34.4596 40.5404"
                stroke="#0047FF"
                stroke-width="5.06757"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.216 15.2025C19.0147 15.2025 21.2836 12.9337 21.2836 10.135C21.2836 7.33621 19.0147 5.06738 16.216 5.06738C13.4173 5.06738 11.1484 7.33621 11.1484 10.135C11.1484 12.9337 13.4173 15.2025 16.216 15.2025ZM31.4189 74.9998C34.2177 74.9998 38.5135 72.9727 40.0338 69.9322C38.5135 66.8916 34.2177 64.8646 31.4189 64.8646C28.6202 64.8646 28.3784 67.1334 28.3784 69.9322C28.3784 72.7309 28.6202 74.9998 31.4189 74.9998Z"
                fill="url(#paint3_linear_2_463)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8424 6.71136C7.18113 12.8296 0 24.326 0 37.4997C0 56.6128 15.1161 72.1954 34.0455 72.9445L31.2071 67.6082C16.4343 65.5341 5.06757 52.8443 5.06757 37.4997C5.06757 26.9733 10.4167 17.6963 18.545 12.2386L17.8424 6.71136Z"
                fill="url(#paint4_linear_2_463)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_463"
                  x1="44.8484"
                  y1="69.9324"
                  x2="44.8484"
                  y2="-6.10352e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2965FF" />
                  <stop offset="1" stop-color="#002B99" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_463"
                  x1="53.4167"
                  y1="68.2884"
                  x2="53.4167"
                  y2="2.05526"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2965FF" />
                  <stop offset="1" stop-color="#002B99" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_463"
                  x1="24.3242"
                  y1="41.0404"
                  x2="34.4594"
                  y2="41.0404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0047FF" />
                  <stop offset="1" stop-color="#001753" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2_463"
                  x1="25.591"
                  y1="5.06738"
                  x2="25.591"
                  y2="74.9998"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2965FF" />
                  <stop offset="1" stop-color="#002B99" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2_463"
                  x1="17.0228"
                  y1="6.71136"
                  x2="17.0228"
                  y2="72.9445"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2965FF" />
                  <stop offset="1" stop-color="#002B99" />
                </linearGradient>
              </defs>
            </svg>
            <SubTitle>실시간 데이터 처리</SubTitle>
            <Description>
              실시간 데이터 처리 기술은 빠른 분석과 의사 결정을 지원하여 고객이 신속하고 효율적인
              전략을 수립할 수 있습니다.
            </Description>
          </ProductInfoBox>
        </ProductInfoBoxs>
      </SectionBox>
    </Wrap>
  );
}
