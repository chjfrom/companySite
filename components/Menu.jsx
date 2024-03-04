import { useState } from 'react';

export default function Menu({ currentPage, onPageChange }) {
  return (
    <div className="gnbMenu">
      <ul className="gnbList">
        <li className={currentPage === 1 ? 'selected' : ''} onClick={() => onPageChange(1)}>
          메인화면
        </li>
        <li className={currentPage === 2 ? 'selected' : ''} onClick={() => onPageChange(2)}>
          회사소개
        </li>
        <li className={currentPage === 3 ? 'selected' : ''} onClick={() => onPageChange(3)}>
          제품과 기술소개
        </li>
        <li className={currentPage === 4 ? 'selected' : ''} onClick={() => onPageChange(4)}>
          대표 서비스
        </li>
        <li className={currentPage === 5 ? 'selected' : ''} onClick={() => onPageChange(5)}>
          상세안내
        </li>
      </ul>
    </div>
  );
}
