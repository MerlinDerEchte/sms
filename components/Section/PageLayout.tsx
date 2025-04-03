import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "context/GlobalContext";
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
  const closeNavigationBar = () => {
    setShowNavigationMenu(false)
  }
  const [isInitialLoadingBufferOver, setIsinitialLoadingBufferOver] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => setIsinitialLoadingBufferOver(true), 500)
  }, [])
  useEffect(() => {
    setTimeout(() => toggleShowNavigationMenu(),1500)
  },[])
  return (
    <main className={pageLayoutStyles} id="main" style={isInitialLoadingBufferOver ? { visibility: 'visible' } : { visibility: 'hidden' }}>
      {!isMobile && <header className="header-wrapper">
        <Navbar />
      </header>
      }
      {isMobile && <MobileNavigationButton showNavigationMenu={showNavigationMenu} isInitialRender={isInitialRender} toggleShowNavigationMenu={toggleShowNavigationMenu} />}
      {isMobile && <MobileNavigationBar showNavigationMenu={showNavigationMenu} isInitialRender={isInitialRender} closeNavigationBar={closeNavigationBar}/>}
      <div id="page-content-wrapper">
        {children}
        <Footer />
      </div>
    </main>
  );
};
