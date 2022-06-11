import { useState } from "react";
const Bulb = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const switchLight = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <div className="switch">
      {switchOn ? (
        <img
          src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
          alt="bulbOn"
        />
      ) : (
        <img
          src="https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
          alt="bulbOff"
        />
      )}
      <button onClick={switchLight} className="btn">
        Switch
      </button>
    </div>
  );
};

export default Bulb;
