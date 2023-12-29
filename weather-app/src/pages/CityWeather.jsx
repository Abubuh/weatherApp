import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import cloudIcon from "../assets/cloud-icon.png"
import sadIcon from "../assets/sad-icon.webp"
import windIcon from "../assets/wind-icon.png"
import humidityIcon from "../assets/humidity-icon.png"

const CityWeather = () => {
  const cityOnUrl = useParams()
  const [newCity, setNewCity] = useState(cityOnUrl)
  const [cityData, setCityData] = useState({})
  const navigate = useNavigate()
  const handleSearchInput = (event) => {
    const inputValue = event.target.value
    setNewCity(inputValue)
  }
  
  const redirectToCityUrl = () => {
    navigate(`/city/${newCity}`)
  }
  useEffect(() => {
    const CITY_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityOnUrl.city}&appid=`
    const API_KEY = "6805984d1bdaca0121edc32b2c8c062c"
    const fetchCityWeatherData = () => {
      fetch(CITY_WEATHER_URL + API_KEY)
      .then(data => data.json())
      .then(res => setCityData(res))
    }
    fetchCityWeatherData()
  }, [cityOnUrl])

  return (
    <>
    <section className="flex ">
      <div className="w-full flex flex-row mt-12 justify-center mb-20">
        <input type="text" defaultValue={cityOnUrl.city} className="w-2/12 rounded-sm px-2 mr-2 py-1" onChange={handleSearchInput}/>
        <button className="bg-slate-50 w-20 rounded-sm hover:bg-slate-200" onClick={redirectToCityUrl}>Search</button>
      </div>
    </section>
    {
      Object.values(cityData).length > 4 ?
      <section className="grid grid-cols-5 grid-flow-col w-11/12 mx-auto">
      <div className=" mx-auto text-center text-white text-5xl font-semibold col-span-3 ">
          <img src={cloudIcon} alt="" className="absolute mx-auto w-[24%]"/>
          <div className="text-black mt-[44%] mb-[35%] relative z-10">
            <p>{Math.round(cityData.main.temp - 273.15)}°C</p>
            <p>{cityData.name}</p>
          </div>
          <div className="min-w-96 max-[385px]">
            <p>{cityData.weather[0].main}</p>
            <p className="mb-4">{cityData.weather[0].description}</p>
            <div className="w-[384px] flex ">
              <div className="w-[383px] flex flex-col">
                <div className="flex">
                  <img src={windIcon} className="w-2/12 mr-2" alt="" />
                  <p className="text-lg self-center">{cityData.wind.speed} m/s</p>
                </div>
                <p className="text-base text-left ml-3">Wind velocity</p>
              </div>
              <div className="w-[383px] flex flex-col">
                <div className="flex justify-end">
                  <img src={humidityIcon} className="w-2/12 mr-2" alt="" />
                  <p className="text-lg self-center">{cityData.main.humidity}%</p>
                </div>
                <p className="text-base text-right ml-3">Humidity</p>
              </div>
            </div>
          </div>
      </div>
      <div className=" mx-auto text-center text-white text-5xl font-semibold col-span-3">
          
      </div>
    </section> : 
    <section className="h-[60vh] "> 
    <img src={sadIcon} alt="" className="w-[27%] mx-auto mb-10"/>
      <p className="text-white text-center text-6xl font-semibold">We didn't found your city! :( </p>
    </section>
  }
    </>
  )
}

export default CityWeather