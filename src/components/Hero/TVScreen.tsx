import "./TVScreen.css";
import { useStaticEffect } from "../../hooks/useStaticEffect";

interface TVScreenProps {
  canvasId?: string;
}

const TVScreen: React.FC<TVScreenProps> = ({ canvasId = "static" }) => {
  useStaticEffect(canvasId);

  return (
    <div className="tv-screen">
      <canvas id={canvasId}></canvas>
      <div className="scan-lines"></div>
      <div className="screen-glare"></div>
    </div>
  );
};

export default TVScreen;
