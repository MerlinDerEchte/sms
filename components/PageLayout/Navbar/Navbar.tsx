import { NextPage } from 'next';
import { createNavbarStyles } from './NavbarStyles';
import { ESectionId } from 'enums/sectionIds';
import { NavbarItem } from './NavbarItem';
import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

export const Navbar: NextPage = () => {
    const { screenHeight } = useContext(GlobalContext)
    const navbarStyles = createNavbarStyles(screenHeight);
 
    return (
        <div className={navbarStyles}>
            <nav className="nav" >
                <NavbarItem sectionId={ESectionId.NextGames} />
                <NavbarItem sectionId={ESectionId.Events} />
                <NavbarItem sectionId={ESectionId.Kontakt} />
                <NavbarItem sectionId={ESectionId.Impressions} />
                <NavbarItem sectionId={ESectionId.Teams} />
                <NavbarItem sectionId={ESectionId.Sponsors} />
                <NavbarItem sectionId={ESectionId.Impressum} />
            </nav>
        </div>
    )
}