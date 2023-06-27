import React from 'react'

const Search = () => {
    return (
        <section className='filter'>
            <form className="form-control">
                <input type="search" name="search" id="search" placeholder='Search Country' />
            </form>

            <div className='filter-region'>
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
