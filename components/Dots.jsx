import React from 'react';

const Dot = ({ num, currentPage, onClick }) => {
  return (
    <div
      style={{
        width: currentPage === num ? 12 : 10,
        height: currentPage === num ? 12 : 10,
        borderRadius: 999,
        backgroundColor: currentPage === num ? '#fff' : '#a0a0a0',
        cursor: 'pointer',
        transitionDuration: 1000,
        transition: 'background-color 0.5s',
      }}
      onClick={() => onClick(num)} // 클릭 시 해당 페이지로 이동하는 함수 호출
    ></div>
  );
};

const Dots = ({ currentPage, onPageChange }) => {
  // onPageChange 추가
  return (
    <div className="dotsBox" style={{ position: 'fixed', top: '50%', right: 100 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} currentPage={currentPage} onClick={onPageChange}></Dot> {/* onClick 추가 */}
        <Dot num={2} currentPage={currentPage} onClick={onPageChange}></Dot> {/* onClick 추가 */}
        <Dot num={3} currentPage={currentPage} onClick={onPageChange}></Dot> {/* onClick 추가 */}
        <Dot num={4} currentPage={currentPage} onClick={onPageChange}></Dot> {/* onClick 추가 */}
        <Dot num={5} currentPage={currentPage} onClick={onPageChange}></Dot> {/* onClick 추가 */}
      </div>
    </div>
  );
};

export default Dots;
