import React from 'react';
import './Header.css'

const Header = ({handleOpenFormPopup}) => {
    return (
        <header>
            <nav>
                <button  className='header-btn' onClick={handleOpenFormPopup}>
                    Создать пост
                </button>
            </nav>
        </header>
    );
};

export default Header;