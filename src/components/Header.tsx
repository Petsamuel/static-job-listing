import { Fragment } from "react";
import DesktopSvg from "../images/bg-header-desktop.svg";
// import MobileSvg from "../images/bg-header-mobile.svg";

export default function Header() {
  return (
    <Fragment>
      <header>
        <section className="inline-flex">
          <img src={DesktopSvg} alt="img" className="bg-[#5da5a4]" />
        </section>
        {/* <section className="lg:hidden md:block block">
          <img src={MobileSvg} alt="img" className="bg-[#5da5a4]" />
        </section> */}
      </header>
    </Fragment>
  );
}
