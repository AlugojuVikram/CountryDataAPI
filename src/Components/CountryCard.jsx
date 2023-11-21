import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CountryCard = () => {

    const { code } = useParams()

    const [apidata, setApiData] = useState([])

    const fetchdata = () => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApiData(data)
            })
    }

   
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className='dot d-flex'>
            <div>
                <div className="table-responsive">
                    <h1>{apidata[0]?.name.common}</h1>
                    <h4 className='mt-4'>Names</h4>
                    <table className="table table-bordered w-100">
                        <tbody>
                            <tr>
                                <th>Common</th>
                                <td >{apidata[0]?.name.common}</td>
                            </tr>
                            <tr>
                                <th>Official</th>
                                <td >{apidata[0]?.name.official}</td>
                            </tr>
                            {/* <tr>
                                <th>Common (Native)</th> */}
                                {/* <td>{nativeName}</td> */}
                            {/* </tr> */}
                            {/* <tr>
                                <th>Official (Native)</th>
                                <td >{}</td>
                            </tr> */}
                            <tr>
                                <th>Alternative Spellings</th>
                                <td >  {apidata[0]?.altSpellings[0]},{apidata[0]?.altSpellings[1]}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td ><a href={apidata[0]?.maps.googleMaps}>Maps</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-responsive">
                    <h4>Geography</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Region</th>
                                <td >{apidata[0]?.region}</td>
                            </tr>
                            <tr>
                                <th>SubRegion</th>
                                <td >{apidata[0]?.subregion}</td>
                            </tr>
                            <tr>
                                <th>Capital</th>
                                <td >{apidata[0]?.capital}</td>
                            </tr>
                            <tr>
                                <th>Demonyms</th>
                                <td >{apidata[0]?.demonyms.eng.f}</td>
                            </tr>
                            <tr>
                                <th>Lat/Lon</th>
                                <td >{apidata[0]?.latlng[0]}</td>
                            </tr>
                            <tr>
                                <th>Area</th>
                                <td>{apidata[0]?.area}km2</td>
                            </tr>
                            {/* <tr>
                                <th>Native language</th>
                                <td className="ng-binding">{apidata[0]?.languages.hin},{apidata[0]?.languages.eng}</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <img src={apidata[0]?.flags.png}></img> 
            </div>
            {/* <div>
        <h3>Name:{apidata[0]?.name.common}</h3>
        <p>Capital:{apidata[0]?.capital}</p>
        <img src={apidata[0]?.flags.png}></img><br/>
        <a href={apidata[0]?.maps.googleMaps}>Google Maps</a>
        </div> */}

        </div>
    )
}
