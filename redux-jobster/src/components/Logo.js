import img from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img src={img} alt="jobster logo" style={{ margin: 50 }} className="logo" />
  );
};

export default Logo;
