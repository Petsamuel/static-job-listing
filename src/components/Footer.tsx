import { Fragment } from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Fragment>
      <section className="flex justify-center flex-col items-center ">
        <p className="">Made with 🤍 by Peter Samuel &copy; {year}</p>
        <p>
          <a href="http://github.com/Petsamuel">Github</a> ·{" "}
          <a href="http://linkedIn.com/in/bieefilled">LinkedIn</a> ·{" "}
          <a href="http://x.com/bieefilled">Twitter</a>
        </p>
      </section>
    </Fragment>
  );
}
