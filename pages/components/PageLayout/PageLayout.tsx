import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { createPageLayoutStyles } from "./PageLayoutStyles";

interface IPageProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: IPageProps) => {
  const { screenHeight, screenWidth, isMobile } = useContext(GlobalContext);
  const pageLayoutStyles = createPageLayoutStyles({ screenHeight, screenWidth, isMobile });

  return (
    <main className={pageLayoutStyles} id="main">
      {!isMobile && <header className="header-wrapper">
        <Navbar />
      </header>
      }
      <div className="content-wrapper">
        {children}
        <Footer />
      </div>
    </main>
  );
};
