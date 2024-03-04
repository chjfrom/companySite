import ParticleBg from './ParticleBg';

export default function Section1() {
  return (
    <div className="inner sectionBox">
      <ParticleBg />
      <div className="section1 ection">
        <div className="section1Tex1">
          <p>
            <span className="fointText">신뢰</span>할 수 있는{' '}
            <span className="fointText">금융솔루션</span>
          </p>
        </div>
        <div className="section1Tex2">
          확인된 전문가들에 의해 개발된 <br />
          금융 솔루션으로 비즈니스 성장시켜보세요
        </div>
        <button className="startBtn" type="button">
          시작하기
        </button>
      </div>
    </div>
  );
}
