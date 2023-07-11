import React, { useEffect } from 'react'

const Search = () => {
    useEffect(() => {
        const searchInput = document.getElementById('search')
        const selectInput = document.getElementById('select')

        const handleSearch = (e) => {
            const { value } = searchInput
            const countryName = document.querySelectorAll('.country-name')

            countryName.forEach((name) => {
                if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
                    name.parentElement.parentElement.style.display = 'block'
                } else {
                    name.parentElement.parentElement.style.display = 'none'
                }
            })
        }

        const handleRegionFilter = (e) => {
            const { value } = e.target
            const countryRegion = document.querySelectorAll('.country-region')

            countryRegion.forEach((region) => {
                if (value === 'Filter by region' || region.innerText.includes(value)) {
                    region.parentElement.parentElement.style.display = 'grid'
                } else {
                    region.parentElement.parentElement.style.display = 'none'
                }
            })
        }

        searchInput.addEventListener('input', handleSearch)
        selectInput.addEventListener('change', handleRegionFilter)

        return () => {
            searchInput.removeEventListener('input', handleSearch)
            selectInput.removeEventListener('change', handleRegionFilter)
        }
    }, [])

    return (
        <section className="filter">
            <form className="form-control">
                <input type="search" name="search" id="search" placeholder="Search Country" />
            </form>

            <div className="filter-region">
                <select name="select" id="select" className="select">
                    <option value="Filter by region">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Search
