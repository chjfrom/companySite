import React, { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Menu from '@/components/Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Mobile from './mobile/Mobile';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;

  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5); /* 흰색 투명 배경 */
  backdrop-filter: blur(10px); /* 블러 효과 */
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  .bubbles {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    span:nth-child(even) {
      background: #0047ff;
      box-shadow: 0 0 0 1px rgba(0, 17, 255, 0.253), 0 0 60px rgba(0, 17, 255, 0.253),
        0 0 100px rgba(0, 17, 255, 0.253);
    }

    span {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.795);
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.363), 0 0 60px rgba(255, 255, 255, 0.219),
        0 0 100px #fff;
      animation: animate 500s linear infinite;
      animation-duration: calc(1800s / var(--i));
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(1);
    }
    100% {
      transform: translateY(-100vh) scale(0);
    }
  }
`;

function FullPage() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     if (!isScrolling) {
  //       setIsScrolling(true);
  //       const { deltaY } = e;
  //       const { scrollTop } = outerDivRef.current;
  //       const pageHeight = window.innerHeight;

  //       if (deltaY > 0) {
  //         if (currentPage < 5) {
  //           // 새로운 페이지가 5개인 경우에만 추가 스크롤 가능
  //           outerDivRef.current.scrollTo({
  //             top: pageHeight * currentPage + DIVIDER_HEIGHT * currentPage,
  //             left: 0,
  //             behavior: 'smooth',
  //           });
  //           setCurrentPage(currentPage + 1);
  //         }
  //       } else {
  //         if (currentPage > 1) {
  //           outerDivRef.current.scrollTo({
  //             top: pageHeight * (currentPage - 2) + DIVIDER_HEIGHT * (currentPage - 2),
  //             left: 0,
  //             behavior: 'smooth',
  //           });
  //           setCurrentPage(currentPage - 1);
  //         }
  //       }

  //       setTimeout(() => {
  //         setIsScrolling(false);
  //       }, 1000);
  //     }
  //   };

  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener('wheel', wheelHandler, { passive: false });
  //   return () => {
  //     outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
  //   };
  // }, [isScrolling, currentPage]);

  const onPageChange = (pageNum) => {
    const pageHeight = window.innerHeight;
    outerDivRef.current.scrollTo({
      top: pageHeight * (pageNum - 1) + DIVIDER_HEIGHT * (pageNum - 1),
      left: 0,
      behavior: 'smooth',
    });
    setCurrentPage(pageNum);
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const spans = [];
  for (let i = 0; i < 120; i++) {
    const randomX = Math.floor(Math.random() * windowSize.width);
    const randomY = Math.floor(Math.random() * windowSize.height);
    spans.push(<span key={i} style={{ '--i': i, left: `${randomX}px`, top: `${randomY}px` }} />);
  }

  return (
    <>
      <div className="pcWrap">
        <Container>
          <div className="bubbles">{spans}</div>s
        </Container>
        <Header>
          <div className="LoganStoneLogo">
            <a href="">
              <img src="/LoganStoneLogo.svg" />
            </a>
          </div>
          <Menu currentPage={currentPage} onPageChange={onPageChange} />
        </Header>

        <div ref={outerDivRef} className="outer">
          {/* <Dots currentPage={currentPage} onPageChange={onPageChange} /> */}
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
      <Mobile />
    </>
  );
}

export default FullPage;
