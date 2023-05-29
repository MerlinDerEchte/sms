import { useContext, useState } from "react";
import { GlobalContext } from "GlobalContext";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { createPageLayoutStyles } from "./PageLayoutStyles";
import MobileNavigationButton from "./MobileNavigation/MobileNavigationButton";

interface IPageProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: IPageProps) => {
  const { screenHeight, screenWidth, isMobile } = useContext(GlobalContext);
  const pageLayoutStyles = createPageLayoutStyles({ screenHeight, screenWidth, isMobile });
  const [showNavigationMenu, setShowNavigationMenu] = useState(true);

  const toggleShowNavigationMenu = () => {
    if(showNavigationMenu){
      setShowNavigationMenu(false)
    }else{
      setShowNavigationMenu(true)
    }
  }

  return (
    <main className={pageLayoutStyles} id="main">
      {!isMobile && <header className="header-wrapper">
        <Navbar />
      </header>
      }
      {isMobile && <MobileNavigationButton showNavigationMenu={showNavigationMenu} toggleShowNavigationMenu={toggleShowNavigationMenu}/>}
      <div className="content-wrapper">
        {children}
        <Footer />
      </div>
    </main>
  );
};
