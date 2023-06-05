import { useContext, useState } from "react";
import { GlobalContext } from "GlobalContext";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { createPageLayoutStyles } from "./PageLayoutStyles";
import MobileNavigationButton from "./MobileNavigation/MobileNavigationButton";
import { MobileNavigationBar } from "./MobileNavigation/MobileNavigationBar";
interface IPageProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: IPageProps, showNavigationBar:()=>void) => {
  const { screenHeight, screenWidth, isMobile } = useContext(GlobalContext);
  const pageLayoutStyles = createPageLayoutStyles({ screenHeight, screenWidth, isMobile });
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const toggleShowNavigationMenu = () => {
    setIsInitialRender(false)
    if(showNavigationMenu){
      setShowNavigationMenu(false)
    }else{
      setShowNavigationMenu(true)
    }
  }

  return (
    <main className={pageLayoutStyles} id="main">
      {!isMobile && <header className="header-wrapper">
        <Navbar showNavigationBar={showNavigationBar}/>
      </header>
      }
      {isMobile && <MobileNavigationButton showNavigationMenu={showNavigationMenu} isInitialRender={isInitialRender} toggleShowNavigationMenu={toggleShowNavigationMenu}/>}
      {isMobile && <MobileNavigationBar showNavigationMenu={showNavigationMenu} isInitialRender={isInitialRender}/>}
      <div className="content-wrapper">
        {children}
        <Footer />
      </div>
    </main>
  );
};
