/** Navbar of the portfolio */

import Logo from "../ui/Logo.tsx";

function Navbar() {
    return (
        <nav className="navbar font-serif text-2xl">
            <Logo />
            <ul className="nav_button_list">
                <li>
                    <a href="/projects">
                        <div className='nav_button'>
                            <p>Projets</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/about">
                        <div className='nav_button'>
                            <p>À propos</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        <div className='nav_button'>
                            <p>Contact</p>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;