import { NextPage } from 'next';
import react, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { ContentBackground } from './ContentBackground/ContentBackground';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { createPageLayoutStyles } from './PageLayoutStyles';

interface IPageProps {
    children: React.ReactNode,
}

export const PageLayout = ({ children }: IPageProps) => {

    const { screenHeight, screenWidth } = useContext(GlobalContext);
    const pageLayoutStyles = createPageLayoutStyles({ screenHeight, screenWidth });

    return (
        <main className={pageLayoutStyles} id='main'>
            <header className='header-wrapper'>
                <Navbar />
            </header>

            <div className='content-wrapper'>
                <ContentBackground />
                {children}
               
                <Footer />
             
            </div>

        </main>
    )
}