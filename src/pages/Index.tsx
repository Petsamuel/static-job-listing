import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { data } from "../data";

export default function IndexPage() {
  const [container, setContainer] = useState<string[]>([]);
  const [filterSearch, setFilterSearch] = useState([]);

  const toggleFilter = (userFilter: string | string[]) => {
    const filtersToAdd = Array.isArray(userFilter) ? userFilter : [userFilter];

    const newContainer = container.filter(
      (filter) => !filtersToAdd.includes(filter)
    );

    setContainer(() => [...newContainer, ...filtersToAdd]);
  };

  useEffect(() => {
    const filteredData = data.filter((obj) =>
      container.some(
        (item) =>
          obj.languages.includes(item) ||
          obj.role === item ||
          obj.level === item
      )
    );
    setFilterSearch(filteredData as never[]);
  }, [container]);

  console.log(filterSearch);

  const SearchResult = () => {
    return filterSearch.map((value) => (
      <>
        <div
          key={(value as { id: string }).id}
          className={
            (value as { featured: boolean }).featured
              ? "Featured bg-[#ffffff] cursor-pointer lg:my-6 my-12  flex lg:flex-row flex-col lg:items-center rounded-lg shadow-lg lg:px-8  px-4  justify-between lg:gap-20"
              : " bg-[#ffffff] cursor-pointer lg:my-6 my-12  flex lg:flex-row flex-col lg:items-center rounded-lg shadow-lg lg:px-8  px-4  justify-between lg:gap-20"
          }
        >
          <div className="lg:py-10 pt-10 flex relative min-w-max">
            <div className="px-4 absolute lg:sticky  -left-25 -top-7 ">
              {(value as { logo: string; company: string }).logo && (
                <img
                  src={(value as { logo: string }).logo}
                  alt={(value as { company: string }).company}
                  className="w-[4em] lg:w-[100%]"
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex py-2">
                <span className="text-[#5ba4a4] font-bold text-lg ">
                  {(value as { company: string }).company}
                </span>
                <span className="px-3">
                  {(value as { new: boolean }).new == true ? (
                    <span className="py-1.5 px-3 bg-[#5ba4a4] rounded-full text-white uppercase text-sm">
                      New!
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                <span>
                  {(value as { featured: boolean }).featured == true ? (
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
                  {(value as { position: string }).position}
                </p>
              </div>
              <div className="text-[#a8aeae] flex justify-between text-lg gap-4">
                <span className="">
                  {(value as { postedAt: string }).postedAt}
                </span>
                ·
                <span className="">
                  {(value as { contract: string }).contract}
                </span>
                ·<span>{(value as { location: string }).location}</span>
              </div>
            </div>
          </div>
          <div className="bg-[#5ba4a4] my-3 h-1 rounded-full"></div>

          <div className="font-semibold text-[#5ba4a4] items-center flex lg:place-content-end pb-5 flex-wrap lg:flex-nowrap">
            <div
              onClick={() => {
                toggleFilter((value as { role: string }).role);
              }}
              className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center gap-2"
            >
              {(value as { role: string }).role}
            </div>
            <div
              onClick={() => {
                toggleFilter((value as { level: string }).level);
              }}
              className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center"
            >
              {(value as { level: string }).level}
            </div>
            <div className="flex items-center ">
              {(value as { languages: string[] }).languages.map((val, key) => (
                <div
                  onClick={() => {
                    toggleFilter(val);
                  }}
                  key={key}
                  className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    ));
  };

  return (
    <Fragment>
      <header>
        <Header />
      </header>

      {filterSearch.length > 0 ? (
        <section className=" flex relative -mt-10 " id="filter">
          <div className="bg-white p-5 rounded-lg flex justify-between gap-32 items-center shadow-lg  mx-16 w-screen">
            <div className="flex items-center flex-wrap">
              {container.map((val, key) => (
                <div className="flex items-center font-bold m-2" key={key}>
                  <div className="p-2 bg-[#f2f8f6] text-[#5ba4a4] rounded-l-lg cursor-pointer w-fit">
                    <p className="px-2 ">{val}</p>
                  </div>
                  <span
                    onClick={() => null}
                    className="p-2 bg-[#5ba4a4] text-white rounded-r-lg cursor-pointer"
                  >
                    X
                  </span>
                </div>
              ))}
            </div>

            <div onClick={() => setContainer([])} className="cursor-pointer">
              Clear
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <main className="my-14 flex justify-center mx-8 h-fit">
        <div className="mx-2 ">
          {filterSearch.length === 0 ? (
            data.map((value) => (
              <>
                <div
                  key={value.id}
                  className={
                    (value as { featured: boolean }).featured
                      ? "Featured bg-[#ffffff] cursor-pointer lg:my-6 my-12  flex lg:flex-row flex-col lg:items-center rounded-lg shadow-lg lg:px-8  px-4  justify-between lg:gap-20"
                      : " bg-[#ffffff] cursor-pointer lg:my-6 my-12  flex lg:flex-row flex-col lg:items-center rounded-lg shadow-lg lg:px-8  px-4  justify-between lg:gap-20"
                  }
                >
                  <div className="lg:py-10 pt-10 flex relative min-w-max">
                    <div className="px-4 absolute lg:sticky  -left-25 -top-7 ">
                      {(value as { logo: string; company: string }).logo && (
                        <img
                          src={(value as { logo: string }).logo}
                          alt={(value as { company: string }).company}
                          className="w-[4em] lg:w-[100%]"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex py-2">
                        <span className="text-[#5ba4a4] font-bold text-lg ">
                          {(value as { company: string }).company}
                        </span>
                        <span className="px-3">
                          {(value as { new: boolean }).new == true ? (
                            <span className="py-1.5 px-3 bg-[#5ba4a4] rounded-full text-white uppercase text-sm">
                              New!
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                        <span>
                          {(value as { featured: boolean }).featured == true ? (
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
                          {(value as { position: string }).position}
                        </p>
                      </div>
                      <div className="text-[#a8aeae] flex justify-between text-lg gap-4">
                        <span className="">
                          {(value as { postedAt: string }).postedAt}
                        </span>
                        ·
                        <span className="">
                          {(value as { contract: string }).contract}
                        </span>
                        ·<span>{(value as { location: string }).location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#5ba4a4] my-3 h-1 rounded-full"></div>

                  <div className="font-semibold text-[#5ba4a4] items-center flex lg:place-content-end pb-5 flex-wrap lg:flex-nowrap">
                    <div
                      onClick={() => {
                        toggleFilter((value as { role: string }).role);
                      }}
                      className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center gap-2"
                    >
                      {(value as { role: string }).role}
                    </div>
                    <div
                      onClick={() => {
                        toggleFilter((value as { level: string }).level);
                      }}
                      className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center"
                    >
                      {(value as { level: string }).level}
                    </div>
                    <div className="flex items-center ">
                      {(value as { languages: string[] }).languages.map(
                        (val, key) => (
                          <div
                            onClick={() => {
                              toggleFilter(val);
                            }}
                            key={key}
                            className="p-1.5 mx-1 rounded-lg bg-[#f2f8f6] hover:bg-[#5ba4a4] hover:text-white flex items-center"
                          >
                            {val}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <SearchResult />
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
