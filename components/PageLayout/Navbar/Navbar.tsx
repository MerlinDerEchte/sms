import { NextPage } from 'next';
import { createNavbarStyles } from './NavbarStyles';
import { ESectionId } from 'enums/sectionIds';
import { NavbarItem } from './NavbarItem';
import { NavbarItemEvents } from './items/NavbarItemEvents';
import { NavbarItemTeams } from './items/NavbarItemTeams';

export const Navbar: NextPage = () => {

    const navbarStyles = createNavbarStyles();
    const scrollIntoView = (id: string) => {
        const el: HTMLElement | null = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        }
    }
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