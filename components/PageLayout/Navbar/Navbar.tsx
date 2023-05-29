import { NextPage } from 'next';
import { createNavbarStyles } from './NavbarStyles';
import { ESectionId } from 'enums/sectionIds';

export const Navbar: NextPage = () => {

    const navbarStyles = createNavbarStyles();
    const scrollIntoView= (id:string) => {
        const el:HTMLElement|null = document.getElementById(id);
        if(el){
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        }
    }
    return (
        <div className={navbarStyles}>
            <nav className="nav" >
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Intro)}>Home</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Teams)}>Teams</div>
                <div className="navigation-item"  onClick={() => scrollIntoView(ESectionId.Events)}>Events</div>
                <div className="navigation-item"  onClick={() => scrollIntoView(ESectionId.News)}>Aktuelles</div>
                <div className="navigation-item" >Schiedsrichter</div>
                <div className="navigation-item"  onClick={() => scrollIntoView("news")}>Impressionen</div>
                <div className="navigation-item" >Kontakt</div>
            </nav>
        </div>
    )
}