import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

const Country = () => {
    const [country, setCountry] = useState(null)
    const { name } = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v2/name/${name}`
            )
            const country = await response.json()
            setCountry(country)
        }

        fetchCountryData()
    }, [name])

    if (!country) {
        return null
    }

    return (
        <>
            <Link to="/" className='btn btn-light'>
                <i className='fas fa-arrow-left'></i> Back Home
            </Link>
            <section className="country">
                {country.map((c) => {
                    const { numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = c
                    return (
                        <article key={numericCode}>

                            <div className="more-details">
                                <div className="flag">
                                    <img src={flag} alt={name} />
                                </div>

                                <div className="country-info">
                                        <h2>{name}</h2>
                                    <div className="modalInfo">
                                    <div className='innerLeft inner'>
                                        <h5>Native Name: <span>{nativeName}</span></h5>
                                        <h5>Population: <span>{population.toLocaleString()}</span></h5>
                                        <h5>Region: <span>{region}</span></h5>
                                        <h5>Sub Region: <span>{subregion}</span></h5>
                                        <h5>Capital: <span>{capital}</span></h5>
                                    </div>

                                    <div className='innerRight inner'>
                                        <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                                        <h5>Currencies: <span>{currencies[0].name}</span></h5>
                                        <h5>Languages: <span>{languages[0].name}</span></h5>
                                    </div>
                                    </div>
                            <div className='class-borders'>
                                <p>Border Countries: <div className="borders">
                                    {borders && borders.length > 0 ? (
                                        borders.map((border) => (
                                            <ul id='border' key={border}>
                                                <li>{border}</li>
                                            </ul>
                                        ))
                                    ) : (
                                        <p>No border countries available.</p>
                                    )}
                                </div> </p>
                            </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Country
