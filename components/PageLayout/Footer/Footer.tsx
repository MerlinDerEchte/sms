import { useContext, FC } from "react"
import { SuedLogoSvg } from "public/sued-logo";
import { createFooterStyles } from "./FooterStyles"
import { GlobalContext } from "context/GlobalContext";
import { ESectionId } from "enums/sectionIds";

export const Footer: FC<{}> = () => {
    const { isMobile } = useContext(GlobalContext)
    const footerStyles = createFooterStyles(isMobile);

    return (
        <div className={footerStyles} id={ESectionId.Impressum}>

            <div className="footer-caption-wrapper">
                <div className="footer-caption-container">
                    <h2 >Impressum </h2>
                </div>

            </div>
            <div className="footer-content-wrapper">

                <div className="footer-logo">
                    <SuedLogoSvg />
                </div>
                <div className="footer-impressum">
                    <ul>
                        <li>
                            SC München Süd e.V.
                        </li>
                        <li>
                           Wackersberger Str.49
                        </li>
                        <li>
                            81371 München
                        </li>
                        <li>
                            Vorstand: Ludwig Lohner
                        </li>
                        <li>
                            1.vorstand@scsued.de 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}