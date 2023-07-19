import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Country {
  numericCode: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const url = "https://restcountries.com/v2/all";

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
    };

    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } = country;

          return (
            <article key={numericCode} className="container">
              <div className="flag-container">
                <Link to={`/countries/${encodeURIComponent(name)}`}>
                  <img src={flag} alt={name} className="flag-image" />
                </Link>
              </div>
              <div className="info">
                <h4 className="country-name">{name}</h4>
                <h4>
                  Population: <span>{population.toLocaleString()}</span>
                </h4>
                <h4 className="country-region">
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
