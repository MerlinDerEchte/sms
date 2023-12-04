import { ESectionId } from 'enums/sectionIds';
import { css, keyframes } from '@emotion/css';
import { colors } from 'styles/colors';
import { MobileNavigationItem } from './MobileNavigationItem';


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
            left: showNavigationMenu ? 0 : -250,
            right: 0,
            width: 250,
            height: '100vh',
            background: colors.DARK_BROWN,
            color: colors.DARK_WHITE,
            borderRight: `1px solid ${colors.LIGHT_BROWN}`,
            zIndex: 200,
            paddingTop: 50,
            animation: isInitialRender ? 'none' :
                showNavigationMenu ? `${navbarActiveAnimation} 0.2s ease-in-out backwards` : `${navbarInActionAnimation} 0.2s ease-in-out backwards`,

            '.nav': {
                position: 'relative',
                paddingLeft: 10,
                paddingRight: 10,
                height: '100%',
                width: '100%',
                display: 'flex',
                gap: 10,
                flexDirection: 'column',
                fontSize: 25,
                justifyContent: 'start'
            }
        })
    }

    const navbarStyles = createNavbarStyles(showNavigationMenu, isInitialRender);

    /*   const scrollIntoView = (id: string) => {
          const el: HTMLElement | null = document.getElementById(id);
          const containerEl: HTMLElement | null = document.getElementById('page-content-wrapper');
  
          if (el && containerEl) {
              const topOffset = el.offsetTop - containerEl.offsetTop;
              containerEl.scrollTo({
                  top: topOffset,
                  behavior: "smooth"
              })
              closeNavigationBar()
          }
      } */

    return (
        <div className={navbarStyles}>
            <nav className="nav" >
                <MobileNavigationItem sectionId={ESectionId.Events} navCallback={closeNavigationBar} />
                <MobileNavigationItem sectionId={ESectionId.Kontakt} navCallback={closeNavigationBar} />
                <MobileNavigationItem sectionId={ESectionId.Impressions} navCallback={closeNavigationBar} />
                <MobileNavigationItem sectionId={ESectionId.Teams} navCallback={closeNavigationBar} />
                <MobileNavigationItem sectionId={ESectionId.Sponsors} navCallback={closeNavigationBar} />
                <MobileNavigationItem sectionId={ESectionId.Impressum} navCallback={closeNavigationBar} />
            </nav>
        </div>
    )
}