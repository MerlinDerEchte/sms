import { NextPage } from 'next';
import { createNavbarStyles } from './NavbarStyles';
import { ESectionId } from 'enums/sectionIds';
import { NavbarItem } from './NavbarItem';

export const Navbar: NextPage = () => {

    const navbarStyles = createNavbarStyles();
 
    return (
        <div className={navbarStyles}>
            <nav className="nav" >
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