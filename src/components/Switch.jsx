const Switch = ({ isOn }) => {
  return (
    <div>
      <button>Toggle{isOn ? "off" : "on"}</button>
    </div>
  );
};
export default Switch;
