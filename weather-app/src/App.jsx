import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import CityWeather from "./pages/CityWeather"
import './index.css'

function App() {

  return (
    <>
    <div className="bg-slate-800 w-[100vw] h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/city/:city" element={<CityWeather/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
