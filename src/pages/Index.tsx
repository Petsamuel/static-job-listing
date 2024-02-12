import { Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { data } from "../data";

export default function IndexPage() {
  // const [filterSkill, setFilterSkill] = useState(data);
  const [container, setContainer] = useState<string[]>([]);

  const addFilter = (userFilter: string | string[]) => {
    // Convert userFilter to an array if it's not already
    const newFilters = Array.isArray(userFilter) ? userFilter : [userFilter];

    // Create a copy of the current state array
    const newContainer = container.slice();

    // Use push on the copied array to add new unique values
    newFilters.forEach((filter) => {
      if (!newContainer.includes(filter)) {
        newContainer.push(filter);
      }
    });

    // Set the state with the new array
    setContainer(newContainer);
  };

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {container.length > 0 ? (
        <section className=" flex relative -mt-10 " id="filter">
          <div className="bg-white p-10 rounded-lg flex justify-between gap-32 items-center shadow-lg w-full mx-16 ">
            <div></div>
            <div className="cursor-pointer">Clear</div>
          </div>
        </section>
      ) : (
        ""
      )}
      <main className="my-14 flex justify-center mx-8">
        <div className="mx-2">
          {data.map((value) => (
            <div
              key={value.id}
              className="bg-[#ffffff] cursor-pointer lg:my-6 my-12  flex lg:flex-row flex-col lg:items-center rounded-lg shadow-lg lg:px-8  px-4  justify-between lg:gap-64 "
            >
              <div className="lg:py-10 pt-10 flex relative min-w-max">
                <div className="px-4 absolute lg:sticky  -left-25 -top-7 ">
                  <img
                    src={value.logo}
                    alt={value.company}
                    className="w-[4em] lg:w-[100%]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex py-2">
                    <span className="text-[#5ba4a4] font-bold text-lg ">
                      {value.company}{" "}
                    </span>
                    <span className="px-3">
                      {value.new == true ? (
                        <span className="py-1.5 px-3 bg-[#5ba4a4] rounded-full text-white uppercase text-sm">
                          New!
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                    <span>
                      {value.featured == true ? (
                        <span className="py-1.5 px-3 bg-[#2b3a37] rounded-full text-white uppercase text-sm">
                          featured
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-[#202c2a] hover:text-[#5ba4a4] py-3">
                      {value.position}
                    </p>
                  </div>
                  <div className="text-[#a8aeae] flex justify-between text-lg gap-4">
                    <span className="">{value.postedAt}</span>·
                    <span className="">{value.contract}</span>·
                    <span>{value.location}</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#5ba4a4] my-3 h-1 rounded-full"></div>

              <div className="font-semibold text-[#5ba4a4] items-center flex lg:place-content-end py-5 flex-wrap flex-auto space-y-1">
                <span
                  onClick={() => {
                    addFilter(value.role);
                  }}
                  className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white "
                >
                  {value.role}
                </span>
                <span
                  onClick={() => {
                    addFilter(value.level);
                  }}
                  className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white "
                >
                  {value.level}
                </span>
                <span>
                  {value.languages.map((val, key) => (
                    <span
                      onClick={() => {
                        addFilter(value.languages);
                      }}
                      className="p-2 mx-2 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white "
                      key={key}
                    >
                      {val}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
