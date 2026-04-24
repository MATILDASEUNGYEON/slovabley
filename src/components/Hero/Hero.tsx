import "./Hero.css";
import TVBody from "./TVBody";
import Headline from "./Headline";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <TVBody />
      <Headline />
    </section>
  );
};

export default Hero;
