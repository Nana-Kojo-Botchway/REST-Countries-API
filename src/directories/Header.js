import React, { useState, useEffect } from 'react';

const Header = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const storedLightMode = localStorage.getItem('lightMode');
    if (storedLightMode) {
      setLightMode(JSON.parse(storedLightMode));
    }
  }, []);

  useEffect(() => {
    applyLightMode(lightMode);
  }, [lightMode]);

  const applyLightMode = (mode) => {
    // Toggle light mode for document.body
    document.body.classList.toggle('light-mode', mode);

    // Toggle light mode for search input
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.classList.toggle('light-mode', mode);
    }

    // Toggle light mode for select element
    const selectElement = document.querySelector('.select');
    if (selectElement) {
      selectElement.classList.toggle('light-mode', mode);
    }

    // Toggle light mode for elements with className="info"
    const infoElements = document.querySelectorAll('.info');
    infoElements.forEach((element) => {
      element.classList.toggle('light-mode', mode);
    });

    // Toggle light mode for elements with className="btn-light"
    const btnLightElements = document.querySelectorAll('.btn-light');
    btnLightElements.forEach((element) => {
      element.classList.toggle('light-mode', mode);
    });
  };

  const toggleLightMode = () => {
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    localStorage.setItem('lightMode', JSON.stringify(newLightMode));
  };

  return (
    <>
      <header className={`header ${lightMode ? 'light-mode' : ''}`} onClick={toggleLightMode}>
        <div>
          <p>Where in the world?</p>
        </div>

        <div>
          <i className={`fas fa-moon ${lightMode ? 'light-mode' : ''}`}></i> Light Mode
        </div>
      </header>
    </>
  );
};

export default Header;
