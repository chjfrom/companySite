import React, { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Menu from '@/components/Menu';
import Section1 from './Section1';

function App() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      if (!isScrolling) {
        setIsScrolling(true);
        const { deltaY } = e;
        const { scrollTop } = outerDivRef.current;
        const pageHeight = window.innerHeight;

        if (deltaY > 0) {
          if (currentPage < 5) {
            // 새로운 페이지가 5개인 경우에만 추가 스크롤 가능
            outerDivRef.current.scrollTo({
              top: pageHeight * currentPage + DIVIDER_HEIGHT * currentPage,
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(currentPage + 1);
          }
        } else {
          if (currentPage > 1) {
            outerDivRef.current.scrollTo({
              top: pageHeight * (currentPage - 2) + DIVIDER_HEIGHT * (currentPage - 2),
              left: 0,
              behavior: 'smooth',
            });
            setCurrentPage(currentPage - 1);
          }
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, { passive: false });
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [isScrolling, currentPage]);

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
      <div className="LoganStoneLogo">
        <img src="/LoganStoneLogo.svg" />
      </div>
      <div ref={outerDivRef} className="outer">
        <Dots currentPage={currentPage} onPageChange={onPageChange} /> {/* onPageChange 전달 */}
        <Section1 />
        <div className="inner bg-yellow">1</div>
        <div className="inner bg-blue">2</div>
        <div className="inner bg-pink">3</div>
        <div className="inner bg-green">4</div>
        <div className="inner bg-orange">5</div>
      </div>
      <Menu onPageChange={onPageChange} />
    </>
  );
}

export default App;
