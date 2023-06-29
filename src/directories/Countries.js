import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = "https://restcountries.com/v2/all"

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
        }

        fetchCountryData()
    }, [])

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
        setCountries(newCountry)
    }

    return (
        <>
            <section className="grid">
                {countries.map((country) => {
                    const { numericCode, name, population, region, capital, flag } = country

                    return (
                        <article key={numericCode}>
                            <div className="flag">
                                <img src={flag} alt={name} />
                            </div>
                            <div className="info">
                                <h4>
                                    Name: <span>{name}</span>
                                </h4>
                                <h4>
                                    Populaion: <span>{population}</span>
                                </h4>
                                <h4>
                                    Region: <span>{region}</span>
                                </h4>
                                <h4>
                                    Capital: <span>{capital}</span>
                                </h4>
                                <div className="toggle">
                                <Link to={`/countries/${encodeURIComponent(name)}`} className="btn">Learn more</Link>
                                <button className="btn" onClick={() => removeCountry(numericCode)}>Remove Country</button>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Countries
