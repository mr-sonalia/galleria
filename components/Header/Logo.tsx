import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      {/* <img className="logo" src={galleriaLogo} alt="" /> */}
      <Image width={130} height={42} src={"/assets/icons/galleria-logo.svg"} alt="Logo" className="logo"/>
    </div>
  );
};

export default Logo;
