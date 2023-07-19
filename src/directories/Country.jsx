import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAPI } from '../Api'
import '../country.css'

const Country = () => {
    const { name: countryName } = useParams()
    const { country, borderCountries, fetchCountryData } = useAPI()

    useEffect(() => {
        fetchCountryData(countryName)
    }, [countryName, fetchCountryData])

    if (!country) {
        return <div>Loading...</div>
    }

    const {
        numericCode,
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
    } = country[0]

    return (
        <>
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i> Back
            </Link>
            <section className="country">
                <article key={numericCode}>
                    <div className="more-details">
                        <div className="country-flag">
                            <img src={flag} alt={name} />
                        </div>

                        <div className="country-info">
                            <h2>{name}</h2>
                            <div className="modalInfo">
                                <div className="innerLeft inner">
                                    <h5>
                                        Native Name: <span>{nativeName}</span>
                                    </h5>
                                    <h5>
                                        Population: <span>{population.toLocaleString()}</span>
                                    </h5>
                                    <h5>
                                        Region: <span>{region}</span>
                                    </h5>
                                    <h5>
                                        Sub Region: <span>{subregion}</span>
                                    </h5>
                                    <h5>
                                        Capital: <span>{capital}</span>
                                    </h5>
                                </div>

                                <div className="innerRight inner">
                                    <h5>
                                        Top Level Domain: <span>{topLevelDomain}</span>
                                    </h5>
                                    <h5>
                                        Currencies: <span>{currencies[0].name}</span>
                                    </h5>
                                    <h5>
                                        Languages: <span>{languages[0].name}</span>
                                    </h5>
                                </div>
                            </div>

                            <div className="class-borders">
                                <h5>Border Countries:</h5>
                                <div className="borders">{borderCountries.length > 0 ? borderCountries.map((border) => (
                                    <ul id="border" key={border.numericCode}><li>{border.name}</li></ul>
                                )) : <p>No border countries available.</p>}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Country
