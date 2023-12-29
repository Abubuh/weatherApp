import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {

  const [city, setCity] = useState()

  const navigate = useNavigate()

  const handleSearchInput = (event) => {
    const inputValue = event.target.value
    setCity(inputValue)
  }
  
  const redirectToCityUrl = () => {
    navigate(`city/${city}`)
  }

  return (
    <div className='flex h-[100vh] flex-col justify-center'>
      <p className='text-center text-white text-8xl mb-10'>Search for a city</p>
      <input type="text" placeholder='London, Mexico City, etc' className=' mb-4 h-9 w-1/3 px-4 py-5 rounded-sm self-center' onChange={handleSearchInput}/>
      <button className=" bg-slate-100 w-1/6 rounded-md  mx-auto py-1 hover:bg-slate-300" onClick={redirectToCityUrl}>Search</button>
    </div>
  )
}

export default Search