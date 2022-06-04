import logo from "../assets/reward.png";
const Badge = () => {
  return (
    <div className="hovertext" data-hover="Points: 100">
      <img className="badge" src={logo} alt="badge" />
    </div>
  );
};

export default Badge;
