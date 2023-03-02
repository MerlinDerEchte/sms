import { useContext, useEffect, useState } from "react"
import { SuedLogoSvg } from "../../../../public/sued-logo";
import { GlobalContext } from "../../../GlobalContext"
import { createContentBackgroundStyles } from "./ContentBackgroundStyles"

export const ContentBackground = () => {

    const [show, setShow] = useState(false);
    const { screenHeight, screenWidth } = useContext(GlobalContext);
    const contentBackgroundStyles = createContentBackgroundStyles({
        screenHeight,
        screenWidth,
    })
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 300)
    }, [])
    return (
        show ?
            (<div className={contentBackgroundStyles}>
                {/* <div className='background-svg-wrapper'>
                    <SuedLogoSvg />
                </div> */}
            </div>
            )
            :
            <>
            </>

    )
}