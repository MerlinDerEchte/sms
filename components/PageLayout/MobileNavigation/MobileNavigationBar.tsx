import { ESectionId } from 'enums/sectionIds';
import { css, keyframes } from '@emotion/css';
import { colors } from 'styles/colors';


export const MobileNavigationBar: React.FC<{ showNavigationMenu: Boolean, isInitialRender: Boolean, closeNavigationBar: () => void }> = ({ showNavigationMenu, isInitialRender, closeNavigationBar }) => {

    const navbarActiveAnimation = keyframes`
        0% {left: -200px;}
        100% { left: 0px}
    `

    const navbarInActionAnimation = keyframes`
    0% { left: 0px}
    100% {left: -200px;}  
    `


    const createNavbarStyles = (showNavigationMenu: Boolean, isInitialRender: Boolean) => {
        return css({
            position: 'absolute',
            left: showNavigationMenu ? 0 : -200,
            right: 0,
            width: 200,
            height: '100vh',
            background: colors.DARK_BROWN,
            color: colors.DARK_WHITE,
            borderRight: `1px solid ${colors.LIGHT_BROWN}`,
            zIndex: 200,
            paddingTop: 50,
            animation: isInitialRender ? 'none' :
                showNavigationMenu ? `${navbarActiveAnimation} 0.2s ease-in-out backwards` : `${navbarInActionAnimation} 0.2s ease-in-out backwards`,



            'nav': {
                position: 'relative',
                paddingLeft: 20,
                height: '100%',
                width: '100%',
                display: 'flex',
                gap: 30,
                flexDirection: 'column',
                fontSize: 25,
                'navigation-item': {
                    flex: 1
                }
            }
        })
    }

    const navbarStyles = createNavbarStyles(showNavigationMenu, isInitialRender);

    const scrollIntoView = (id: string) => {
        const el: HTMLElement | null = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
            closeNavigationBar()
        }
    }

    return (
        <div className={navbarStyles}>
            <nav className="nav" >
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Kontakt)}>Anfahrt & Kontakt</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Teams)}>Teams</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Impressions)}>Impressionen</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Events)}>Events</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.News)}>Aktuelles</div>
                <div className="navigation-item" onClick={() => scrollIntoView(ESectionId.Sponsors)}>Sponsoren</div>
                <div className="navigation-item" onClick={() => scrollIntoView('impressum')}>Impressum</div>
            </nav>
        </div>
    )
}