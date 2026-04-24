import "./Headline.css";

const Headline: React.FC = () => {
  return (
    <div className="headline-section">
      <h1 className="big-headline">
        안녕하세요,
        <br />전 이승연입니다.
      </h1>
      <p className="sub-text">
        개발자입니다.
        <br />
        새로운 프로젝트를 함께 만들어 가고 싶다면{" "}
        <a href="#contact">연락주세요.</a>
      </p>
    </div>
  );
};

export default Headline;
