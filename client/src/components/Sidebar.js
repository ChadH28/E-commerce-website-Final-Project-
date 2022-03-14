import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
        <aside className='sidebar sidenav'>
            <h3>Shopping Categories</h3> <hr></hr>
            <button className="sidebar-close-button btn-floating btn-small waves-effect waves-light" onClick={closeMenu}>
                <div>
                    &times;
                </div>
            </button>
            <ul>
                <li>
                    <a className='waves-effect' href='/'>HEADWEAR</a>
                </li>
                <li>
                    <a className="waves-effect" href='/'>TOPS</a>
                </li>
                <li>
                    <a className="waves-effect" href='/'>BOTTOMS</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar