import { SuedLogoSvg } from "../../../public/sued-logo";
import { createSuedLogoStyles } from "./SuedLogoHeaderStyles"




export const SuedLogoHeader = () => {


    const containerStyles = createSuedLogoStyles();
    return (
        <div className={containerStyles}>
            <div className="sued-logo-wrapper">
                <SuedLogoSvg />
            </div>
            <div className="sued-text-wrapper">
               Fussball im Kopf.<br />
            Sendling im Herzen.<br />
               SC München Süd
            </div>  
        </div>)
}