import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/' className='header-link' activeClassName='header-link_active'>
                    Все посты
                </NavLink>
                <NavLink to='/create-post' className='header-link' activeClassName='header-link_active'>
                    Создать пост
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;