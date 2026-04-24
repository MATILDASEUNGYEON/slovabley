import "./TVBody.css";
import TVScreen from "./TVScreen";

const TVBody: React.FC = () => {
  return (
    <div className="tv-wrap">
      <div className="tv-antenna-left"></div>
      <div className="tv-antenna-right"></div>
      <div className="tv-body">
        <div className="tv-screen-wrap">
          <TVScreen />
        </div>
        <div className="tv-controls">
          <div className="tv-button"></div>
          <div className="tv-button"></div>
          <div className="tv-knob"></div>
          <div className="tv-knob big"></div>
        </div>
      </div>
    </div>
  );
};

export default TVBody;
