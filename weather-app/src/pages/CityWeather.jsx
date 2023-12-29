import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import cloudIcon from "../assets/cloud-icon.png"



const CityWeather = () => {
  const cityOnUrl = useParams()
  const [cityData, setCityData] = useState()

  useEffect(() => {
    const CITY_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityOnUrl.city}&appid=`
    const API_KEY = "6805984d1bdaca0121edc32b2c8c062c"
    const fetchCityWeatherData = () => {
      console.log(CITY_WEATHER_URL + API_KEY)
      fetch(CITY_WEATHER_URL + API_KEY)
      .then(data => data.json())
      .then(res => setCityData(res))
    }
    fetchCityWeatherData()
  }, [cityOnUrl])

  return (
    <>
    <section className="flex">
      <div className="w-full flex flex-row mt-12 justify-center mb-20">
        <input type="text" defaultValue={cityOnUrl.city} className="w-2/12 rounded-sm px-2 mr-2 py-1"/>
        <button className="bg-slate-50 w-20 rounded-sm hover:bg-slate-200">Search</button>
      </div>
    </section>
    {
      cityData ? 
      <section className="grid grid-cols-5 grid-flow-col w-11/12 mx-auto">
      <div className=" mx-auto text-center text-white text-5xl font-semibold col-span-3">
          <img src={cloudIcon} alt="" className="mx-auto w-10/12"/>
          <div className="fixed z-10 left-[27%] top-[44%] text-slate-800">
            <p>{Math.round(cityData.main.temp - 273.15)}°C</p>
            <p>{cityData.name}</p>
          </div>
            <div>
              <p>{cityData.weather[0].main}</p>
              <p>{cityData.weather[0].description}</p>
            </div>
      </div>
      <div className=" mx-auto text-center text-white text-5xl font-semibold col-span-3">
          
      </div>
    </section> : ""
  }
    </>
  )
}

export default CityWeather