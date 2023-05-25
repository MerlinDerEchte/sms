import { SuedLogoSvg } from "../../../public/sued-logo";
import { GlobalContext } from "../../GlobalContext";
import { createSuedLogoStyles } from "./SuedLogoHeaderStyles";
import { useContext } from 'react';



export const SuedLogoHeader = () => {

    const { isMobile } = useContext(GlobalContext)
    const containerStyles = createSuedLogoStyles(isMobile);

    return (
        <div className={containerStyles}>
            <div className="sued-logo-wrapper">
                <SuedLogoSvg />
            </div>
            <div className="sued-text-wrapper">
               Fussball im Kopf.<br />
            Sendling im Herzen.<br />
               SC München Süd e.V.
            </div>  
        </div>)
}