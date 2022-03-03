import React from 'react';

const NavBar = ({menu, movePage}) => {
    return (
        <nav>
            <ul className='nav'>
                { menu.map((m, idx)=> <li key={m.title+idx}><button onClick={()=> movePage(m.link)}>{m.title}</button></li>) }
            </ul>
        </nav>
    );
};

export default NavBar;