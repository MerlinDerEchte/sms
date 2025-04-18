import { SuedLogoSvg } from "public/sued-logo";
import { GlobalContext } from "context/GlobalContext";
import { createSuedLogoStyles } from "./SuedLogoHeaderStyles";
import { useContext } from 'react';
import { EAppStatus } from "types/appStatus";

export const SuedLogoHeader = () => {

    const { isMobile, } = useContext(GlobalContext)
    const containerStyles = createSuedLogoStyles(isMobile);

    return (
        <div className={containerStyles}>
            <div className="sued-logo-wrapper">
                <SuedLogoSvg />
            </div>
            <div className="sued-text-wrapper">
                <div className="first-text">Fussball im Kopf</div>
                <div className="second-text">Sendling im Herzen</div>
            </div>
        </div>)
}