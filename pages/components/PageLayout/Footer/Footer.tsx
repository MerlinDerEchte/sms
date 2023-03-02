import React from "react"
import { SuedLogoSvg } from "../../../../public/sued-logo";
import { createFooterStyles } from "./FooterStyles"

export const Footer: React.FC<{}> = () => {

    const footerStyles = createFooterStyles();

    return (
        <div className={footerStyles}>
            <div className="footer-logo">
                <SuedLogoSvg />
            </div>
            <div className="footer-impressum">
                <ul>
                    <li>
                        SC München Süd
                    </li>
                    <li>
                        Wackersberger Str. 49
                    </li>
                    <li>
                        81371 München
                    </li>
                    <li>
                        1.vorstand@scsued.de
                    </li>
                </ul>
            </div>
        </div>
    )
}