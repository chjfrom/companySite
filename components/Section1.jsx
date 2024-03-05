import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const StName = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  color: #979797;

  .typing {
    color: #ffffff;
    padding-left: 3px;
  }
`;

const StStrike = styled.span`
  color: #fff;
`;

const sayTitle = [
  '금융솔루션 A부터 Z까지',
  '선물거래통합시스템 최초 구축',
  '금융 서비스의 미래',
  '금융 성공을 위한 파트너',
];

function Title() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState('');

  useEffect(() => {
    const typeAnimation = () => {
      const greeting = sayTitle[greetingIndex];
      let typedGreeting = '';
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        typedGreeting += greeting[currentIndex];
        setCurrentGreeting(typedGreeting);
        currentIndex++;

        if (currentIndex === greeting.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setGreetingIndex((prevIndex) => (prevIndex + 1) % sayTitle.length);
            setCurrentGreeting('');
          }, 3500);
        }
      }, 150);

      return () => {
        clearInterval(typingInterval);
      };
    };

    typeAnimation();
  }, [greetingIndex]);

  return (
    <StName className="name">
      <span className="fointText">신뢰</span>할 수 있는{' '}
      <StStrike id="strike">{currentGreeting}</StStrike>
      <span className="typing" css={blinkAnimation}>
        |
      </span>
    </StName>
  );
}

export default function Section1() {
  return (
    <div className="inner sectionBox">
      <div className="section1 ection">
        <Title />
        <div className="section1Tex2">
          확인된 전문가들에 의해 개발된 <br />
          금융 솔루션으로 비즈니스 성장시켜보세요
        </div>
      </div>
    </div>
  );
}
