export default function Menu() {
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
          <button onClick={() => {}}> Section1</button>
          <button onClick={() => {}}> Section2</button>
          <button onClick={() => {}}> Section3</button>
          <button onClick={() => {}}> Section4</button>
        </li>
      </ul>
    </div>
  );
}
