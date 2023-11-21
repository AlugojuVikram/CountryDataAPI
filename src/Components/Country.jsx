import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const Country = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    let [userInput, setUserInput] = useState("")

    const fetchdata = () => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)

            })
    }

    const filteredData = data.filter((val) => {
        return val.name.common.toLowerCase().includes(userInput.toLowerCase())
    })

    useEffect(() => {
        fetchdata()
        }, [])

    return (
        <div>
            <SearchBar setUserInput={setUserInput} />
            <div className='main'>
                {
                    (filteredData.length > 0) ? filteredData.map((val) => {
                        return (
                            <div className=" new list-group" >
                                <ul className="list-group ms-5" onClick={() => navigate(`country/${val.cca3}`)}>
                                    <li className=" fine list-group-item text-start d-flex justify-content-between"><h6 className='ko'>{val.name.common}</h6><i className="last fa-solid fa-magnifying-glass"></i></li>
                                    <li className="list-group-item"><b>Capital - </b>{val.capital}</li>
                                    <li className="list-group-item"><b>Continent - </b>{val.continents}</li>
                                    <li className="list-group-item"><b>Country Code (Alpha 2) - </b>{val.cca2}</li>
                                    <li className="list-group-item"><b>Country Code  (Alpha 3) - </b>{val.cca3}</li>
                                    <li className="list-group-item"><b>Population - </b>{val.population}</li>

                                </ul>
                            </div>
                            // <div classNameNameName='dom' onClick={() => navigate(`country/${val.cca3}`)} >
                            //     <h3>{val.name.common}</h3>
                            // </div>
                        )
                    }) : <button className="btn btn-primary" type="button" disabled>
                        <span role="status">Not found......<i class="fa-solid fa-circle-xmark"></i></span>
                    </button>
                }
            </div>
        </div>
    )
}
