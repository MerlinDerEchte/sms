import { NextPage } from 'next';
import { createNavbarStyles } from './NavbarStyles';




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
                <div className="navigation-item" onClick={() => scrollIntoView("home")}>Home</div>
                <div className="navigation-item" onClick={() => scrollIntoView("teams")}>Teams</div>
                <div className="navigation-item"  onClick={() => scrollIntoView("news")}>Events</div>
                <div className="navigation-item"  onClick={() => scrollIntoView("blogposts")}>Aktuelles</div>
                <div className="navigation-item" >Schiedsrichter</div>
                <div className="navigation-item"  onClick={() => scrollIntoView("news")}>Impressionen</div>
                <div className="navigation-item" >Kontakt</div>
            </nav>
        </div>
    )
}