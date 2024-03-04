import React, { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Menu from '@/components/Menu';

function App() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault(); // 스크롤 동작을 막습니다.
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, down');
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, down');
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(3);
        } else {
          // 현재 3페이지
          console.log('현재 3페이지, down');
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, up');
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, up');
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(1);
        } else {
          // 현재 3페이지
          console.log('현재 3페이지, up');
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, { passive: false }); // passive: false를 통해 스크롤 이벤트를 캡처합니다.
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  const onPageChange = (pageNum) => {
    // 페이지 변경 이벤트 핸들러
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
