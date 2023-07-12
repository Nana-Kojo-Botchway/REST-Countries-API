import React from 'react';

const Header = () => {
  const changeMode = () => {
    const header = document.querySelector('.header');
    const input = document.querySelector('#search');
    const select = document.querySelector('select');
    const info = document.querySelectorAll('.info');

    document.body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    input.classList.toggle('light-mode');
    select.classList.toggle('light-mode');

    info.forEach((info) => {
      info.classList.toggle('light-mode');
    });
  };

  const handleClick = (e) => {
    const target = e.target;
    if (target.classList.contains('fa-moon')) {
      changeMode();
    }
  };

  return (
    <>
      <header className="header" onClick={handleClick}>
        <div>
          <p>Where in the world?</p>
        </div>

        <div>
          <i className="fas fa-moon"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
