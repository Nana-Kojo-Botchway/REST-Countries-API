import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
    };

    fetchCountryData();
  }, []);

  // const removeCountry = (numericCode) => {
  //     const newCountry = countries.filter((country) => country.numericCode !== numericCode)
  //     setCountries(newCountry)
  // }

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } = country;

          return (
            <article key={numericCode}>
              <div className="flag">
                <Link to={`/countries/${encodeURIComponent(name)}`}>
                  <img src={flag} alt={name} />
                </Link>
              </div>
              <div className="info">
                <h4 className="country-name">
                  {name}
                </h4>
                <h4>
                  Populaion: <span>{population.toLocaleString()}</span>
                </h4>
                <h4 className="country-region">
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <div className="toggle">
                  {/* <button className="btn" onClick={() => removeCountry(numericCode)}>Remove Country</button> */}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
