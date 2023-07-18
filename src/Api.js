import React, { createContext, useState, useContext } from 'react'

const APIContext = createContext()

export function APIProvider({ children }) {
    const [country, setCountry] = useState(null)
    const [borderCountries, setBorderCountries] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCountryData = async (name) => {
        setLoading(true)
        try {
            const response = await fetch(
                `https://restcountries.com/v2/name/${name}`
            )
            const countries = await response.json()
            setCountry(countries)

            // Fetch border countries details
            const borderCodes = countries[0].borders
            const borderPromises = borderCodes.map(async (code) => {
                const borderResponse = await fetch(
                    `https://restcountries.com/v2/alpha/${code}`
                )
                const borderCountry = await borderResponse.json()
                return borderCountry
            })
            const borderCountries = await Promise.all(borderPromises)
            setBorderCountries(borderCountries)
        } catch (error) {
            console.error('Error fetching country data:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <APIContext.Provider
            value={{ country, borderCountries, loading, fetchCountryData }}
        >
            {children}
        </APIContext.Provider>
    )
}

export function useAPI() {
    return useContext(APIContext)
}