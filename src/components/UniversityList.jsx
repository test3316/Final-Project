import axios from "axios";
import { useState, useEffect } from "react";

const UniversityList = () => {
  const [countryFetch, setCountryFetch] = useState("");
  const [optionValue, setOptionValue] = useState("georgia");
  const fetchUniversityData = () => {
    axios
      .get(
        `http://universities.hipolabs.com/search?country=${optionValue}&fbclid=IwAR0HlUqjIOGmvMjF0-rYBpyXG4JE__pFO0WsryzIkOQN4rP93Q30m7lJPII`
      )
      .then((res) => {
        setCountryFetch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUniversityData();
  }, [optionValue]);

  console.log(optionValue);
  const valueHandler = (e) => {
    setOptionValue(e.target.value);
  };

  return (
    <>
      <div className="">
        <label className="flex text-[30px] font-semibold  border  justify-center border-black m-2 rounded-xl">
          <select
            className="flex border-2 rounded-lg w-full m-2 text-center outline-none border-black"
            value={optionValue}
            onChange={valueHandler}
          >
            <option value="georgia">Georgia</option>
            <option value="ukraine">Ukraine</option>
            <option value="turkey">Turkey</option>
            <option value="azerbaijan">Azerbaijan</option>
            <option value="italy">Italy</option>
          </select>
        </label>
        <div className="">
          {countryFetch &&
            countryFetch.map((e, index) => (
              <div key={index} className="flex justify-between m-2">
                <div className="flex">
                  <p className="mr-2 font-semibold">Country:</p>{" "}
                  <div className="font-bold  text-[#1D3693]">{e.country}</div>
                </div>
                <div className="flex">
                  <p className="mr-2 font-semibold">University Name:</p>
                  <div className="font-bold  text-[#1D3693]">{e.name}</div>
                </div>
                <div className="flex">
                  <p className="mr-2 font-semibold">Webpage:</p>
                  <a
                    className="text-[#1D3693]"
                    target="_blank"
                    href={e.web_pages[0]}
                  >
                    {e.web_pages[0]}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UniversityList;
