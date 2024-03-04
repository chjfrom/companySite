export default function Menu({ onPageChange }) {
  return (
    <div
      className="menu"
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className="actions">
        <li>
          <button onClick={() => onPageChange(1)}> Section1</button>
          <button onClick={() => onPageChange(2)}> Section2</button>
          <button onClick={() => onPageChange(3)}> Section3</button>
        </li>
      </ul>
    </div>
  );
}
