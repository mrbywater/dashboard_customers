import './NavMenu.scss';
import sprite from '../../media/sprite.svg';
import { NAV_MENU_BUTTONS } from '../../constants';
import NavButton from '../formComponents/navButton/NavButton';
import { useState } from 'react';

const NavMenu = () => {
  const [selectedNavButton, setSelectedNavButton] = useState('Customers');

  return (
    <div className="navMenuMainContainer">
      <aside className="sideBar">
        <div>
          <svg>
            <use xlinkHref={`${sprite}#logo`}></use>
          </svg>
          <nav>
            {NAV_MENU_BUTTONS.map(navButton => (
              <NavButton
                key={`nav_button_${navButton.title}`}
                data={navButton.data}
                title={navButton.title}
                selectedNavButton={selectedNavButton}
                setSelectedNavButton={setSelectedNavButton}
              />
            ))}
          </nav>
        </div>
        <div className="customerProfile">
          <img
            src={require('../../media/customerPhoto.png')}
            alt="Customer Photo"
          />
          <div>
            <span>Evano</span>
            <span>Project Manager</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMenu;
