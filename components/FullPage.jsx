import React, { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Menu from '@/components/Menu';
import Section1 from './Section1';

function App() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중인지 여부를 나타내는 상태 추가

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      if (!isScrolling) {
        // 스크롤 중일 때는 추가 스크롤 이벤트를 무시
        setIsScrolling(true); // 스크롤 시작 시 플래그 설정
        const { deltaY } = e;
        const { scrollTop } = outerDivRef.current;
        const pageHeight = window.innerHeight;

        if (deltaY > 0) {
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            outerDivRef.current.scrollTo({
              top: pageHeight + DIVIDER_HEIGHT,
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(2);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            outerDivRef.current.scrollTo({
              top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(3);
          } else {
            outerDivRef.current.scrollTo({
              top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
              left: 0,
              behavior: 'smooth',
            });
          }
        } else {
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(1);
          } else {
            outerDivRef.current.scrollTo({
              top: pageHeight + DIVIDER_HEIGHT,
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(2);
          }
        }

        setTimeout(() => {
          setIsScrolling(false); // 스크롤 종료 시 플래그 재설정
        }, 1000); // 스크롤 종료 후 1초 동안은 추가 스크롤 이벤트 무시
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, { passive: false });
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [isScrolling]); // isScrolling 상태를 의존성으로 추가

  const onPageChange = (pageNum) => {
    const pageHeight = window.innerHeight;
    outerDivRef.current.scrollTo({
      top: pageHeight * (pageNum - 1) + DIVIDER_HEIGHT * (pageNum - 1),
      left: 0,
      behavior: 'smooth',
    });
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div ref={outerDivRef} className="outer">
        <Dots currentPage={currentPage} onPageChange={onPageChange} /> {/* onPageChange 전달 */}
        <Section1 />
        <div className="inner bg-yellow">1</div>
        <div className="divider"></div>
        <div className="inner bg-blue">2</div>
        <div className="divider"></div>
        <div className="inner bg-pink">3</div>
      </div>
      <Menu onPageChange={onPageChange} />
    </>
  );
}

export default App;
