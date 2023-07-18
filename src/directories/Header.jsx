import React, { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

  const applyDarkMode = (mode) => {
    // Toggle dark mode for document.body
    document.body.classList.toggle('dark-mode', mode);

    // Toggle dark mode for search input
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.classList.toggle('dark-mode', mode);
    }

    // Toggle dark mode for select element
    const selectElement = document.querySelector('.select');
    if (selectElement) {
      selectElement.classList.toggle('dark-mode', mode);
    }

    // Toggle dark mode for elements with className="info"
    const infoElements = document.querySelectorAll('.info');
    infoElements.forEach((element) => {
      element.classList.toggle('dark-mode', mode);
    });

    // Toggle dark mode for elements with className="btn-light"
    const btnLightElements = document.querySelectorAll('.btn-light');
    btnLightElements.forEach((element) => {
      element.classList.toggle('dark-mode', mode);
    });
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <>
      <header className={`header ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
        <div>
          <p>Where in the world?</p>
        </div>

        <div>
          <i className={`fas fa-moon ${darkMode ? 'dark-mode' : ''}`}></i> Dark Mode
        </div>
      </header>
    </>
  );
};

export default Header;
