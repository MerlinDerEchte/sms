import { NextPage } from 'next';
import Link from 'next/link';
import react from 'react';
import { SuedLogoSvg } from '../../../../public/sued-logo';
import { createNavbarStyles } from './NavbarStyles';




export const Navbar: NextPage = () => {

    const navbarStyles = createNavbarStyles();
    return (
        <div className={navbarStyles}>
            <nav className="nav" >
                <Link href="/home">Home</Link>
                <Link href="/news">News</Link>
                <Link href="/teams">Teams</Link>
                <Link href="/schiedsrichter">Schiedsrichter</Link>
            </nav>
        </div>
    )
}