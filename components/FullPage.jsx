import React, { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Menu from '@/components/Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

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

  return (
    <>
      <div className="pcWrap">
        <div className="LoganStoneLogo">
          <img src="/LoganStoneLogo.svg" />
        </div>
        <div ref={outerDivRef} className="outer">
          {/* <Dots currentPage={currentPage} onPageChange={onPageChange} /> */}
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
        <Menu currentPage={currentPage} onPageChange={onPageChange} />
      </div>
      <div className="mobileWrap">
        <img src="/companyMobile.png" />
      </div>
    </>
  );
}

export default FullPage;
