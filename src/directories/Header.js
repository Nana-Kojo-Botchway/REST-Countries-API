import React from 'react'

const Header = () => {
    const changeMode = () => {
        const header = document.querySelector('.header')
        const input = document.querySelector('#search')
        const select = document.querySelector('.select')

        document.body.classList.toggle('light-mode')
        header.classList.toggle('light-mode')
        input.classList.toggle('light-mode')
        select.classList.toggle('light-mode')
        
    }

    const handleClick = (e) => {
        if (e.target.classList.contains('fa-moon')) {
            changeMode()
        }
    }

    return (
        <>
            <header className='header' onClick={handleClick}>
                <div>
                    <h1>Where in the world?</h1>
                </div>

                <div>
                    <i className='fas fa-moon'></i> Dark Mode
                </div>
            </header>
        </>
    )
}

export default Header
