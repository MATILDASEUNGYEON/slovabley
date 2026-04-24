import "./About.css";
import Card from "./Card";

const About: React.FC = () => {
  const skills = [
    {
      icon: "✦",
      title: "Design",
      description: "UI/UX, 브랜딩, 타이포그래피를 다룹니다",
    },
    {
      icon: "◈",
      title: "Development",
      description: "React, Next.js, Tailwind로 웹을 만듭니다",
    },
    {
      icon: "◎",
      title: "Creative",
      description: "사진, 영상, 그래픽 작업도 합니다",
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">About</p>
        <h2 className="section-title">저는 이런 사람입니다.</h2>
        <p className="section-body">
          사용자 경험을 중심으로 생각하는 디자이너이자 프론트엔드 개발자입니다.
          좋은 디자인은 아름다움과 기능이 함께할 때 완성된다고 믿습니다. 커피 한
          잔과 함께 코드를 작성하는 것을 즐기고, 세상을 더 나은 곳으로 만드는
          프로젝트에 열정을 쏟고 있습니다.
        </p>
        <div className="cards">
          {skills.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
