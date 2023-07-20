import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAPI } from '../Api'
import '../country.css'

interface CountryData {
  numericCode: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  languages: { name: string }[];
}

interface BorderCountry {
  numericCode: string;
  name: string;
}

const Country: React.FC = () => {
  const { name: countryName } = useParams<{ name: string }>()
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
  }: CountryData = country[0]

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
      <section className="country">
        <article key={numericCode}>
          <div className="more-details">
            <div className="flag">
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
                <div className="borders">
                  {borderCountries.length > 0 ? (
                    borderCountries.map((border: BorderCountry) => (
                      <ul id="border" key={border.numericCode}><li>{border.name}</li></ul>
                    ))
                  ) : (
                    <p>No border countries available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Country
