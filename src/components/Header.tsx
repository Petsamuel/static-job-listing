import DesktopSvg from "../images/bg-header-desktop.svg";
// import MobileSvg from "../images/bg-header-mobile.svg";

export default function Header() {
  return (
    <div>
      <header>
        <div className="w-screen header-bg-color bg-no-repeat">
          <img
            src={DesktopSvg}
            alt="background-image"
            className="bg-no-repeat bg-center bg-cover"
          />
        </div>
      </header>
    </div>
  );
}
