import axios from "axios";

import { useContext, useEffect } from "react";
import { ContextStore } from "../store/ContextStore";

const Header = () => {
  const { weatherApi, setWeatherApi } = useContext(ContextStore);

  const fetchData = () => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=41.6941&longitude=44.8337&current=temperature_2m&hourly=temperature_2m"
      )
      .then((res) => {
        setWeatherApi(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-[full width] h-[60px] bg-black">
        <div className="flex justify-between items-justify">
          <img
            className="ml-2"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt=""
          />
          <p className="text-white flex justify-center items-center ml-2 font-semibold">
            Weather
          </p>
          {weatherApi && weatherApi.current && (
            <div className="flex items-center ml-10 text-white">
              <span className="font-semibold ">Current Temperature:</span>
              <span className="flex ml-2 font-bold">
                {weatherApi.current.temperature_2m}&deg;
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
