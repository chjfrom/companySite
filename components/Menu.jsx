export default function Menu({ onPageChange }) {
  return (
    <div className="gnbMenu">
      <ul className="gnbList">
        <li onClick={() => onPageChange(1)}>메인화면</li>
        <li onClick={() => onPageChange(2)}>회사소개</li>
        <li onClick={() => onPageChange(3)}>제품과 기술소개</li>
        <li onClick={() => onPageChange(4)}>대표 서비스</li>
        <li onClick={() => onPageChange(5)}>상세안내</li>
        {/* <li>
          <span onClick={() => onPageChange(1)}>메인화면</span>
          <span onClick={() => onPageChange(2)}>회사소개</span>
          <span onClick={() => onPageChange(3)}>제품과 기술소개</span>
          <span onClick={() => onPageChange(3)}>대표 서비스</span>
          <span onClick={() => onPageChange(3)}>상세안내</span>
        </li> */}
      </ul>
    </div>
  );
}
