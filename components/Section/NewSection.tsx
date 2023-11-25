import { css } from "@emotion/css";
import { useContext, FC, useEffect, useState, useRef } from "react";
import { GlobalContext } from "GlobalContext";
import { colors } from "styles/colors";
import { PageLayoutConstantsMobile } from "constants/PageLayoutConstants";
import { SectionContext } from "./SectionContext";

function isInView(element: HTMLElement): Boolean {
    const rect = element.getBoundingClientRect();
    console.log(rect)
    return (
        rect.top >= 0 && rect.left >= 0 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const NewSection: FC<{ caption?: string, isSecondary: boolean, sectionId: string, children: React.ReactNode, hasCaption?: Boolean }> = ({ caption = "", children, sectionId, isSecondary, hasCaption = true }) => {
    
    const sectionContextValue = { isSecondary: isSecondary };
    const { isMobile, screenWidth } = useContext(GlobalContext)
    const containerGap = isMobile ? 50 : 0;
    const desktopCaptionContainerWidth = 450;


    const createListSectionStyles = (isMobile: Boolean, isSecondary: Boolean) => {

        const createFontColor = (isSecondary: Boolean, isMobile: Boolean): string => {
            if (!isMobile && !isSecondary) {
                return colors.DARK_WHITE
            }
            if (!isMobile && isSecondary) {
                return colors.DARK_BROWN
            }
            if (isMobile && isSecondary) {
                return colors.DARK_WHITE
            }
            return colors.DARK_BROWN
        }
        const createCaptionBackgroundColor = (isSecondary: Boolean, isMobile: Boolean): string => {
            if (!isMobile && !isSecondary) {
                return colors.DARK_BROWN
            }
            if (!isMobile && isSecondary) {
                return colors.DARK_WHITE
            }
            if (isMobile && isSecondary) {
                return colors.DARK_BROWN
            }
            return colors.DARK_WHITE
        }

        const captionBackgroundColor = createCaptionBackgroundColor(isSecondary, isMobile)
        const captionFontColor = createFontColor(isSecondary, isMobile)

        return css({
            paddingBottom: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100vw',
            gap: containerGap,
            background: isSecondary ? colors.DARK_BROWN : colors.DARK_WHITE,
            color: isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN,

            svg: {
                fill: isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN,
            },
            '.caption-wrapper': {
                position: 'relative',
                width: isMobile ? 'auto' : desktopCaptionContainerWidth,
                overflow: 'hidden',

                '.caption-container': {
                    position: 'relative',
                    display: 'flex',
                    background: captionBackgroundColor,
                    color: captionFontColor,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            },
            '.content-container': {
                marginLeft: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 0,
                width: isMobile ? screenWidth - 2 * PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : `100%`,
                position: 'relative',
                paddingTop: isMobile ? 20 : 100,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'start',
                paddingLeft: isMobile ? 0 : 0,
            }
        })
    }

    const listSectionStyles = createListSectionStyles(isMobile, isSecondary);


    return (
        <SectionContext.Provider value={sectionContextValue} >
        <section className={listSectionStyles} id={sectionId}>
            {hasCaption && <div className="caption-wrapper">
                <div className="caption-container">
                    <h2>
                        {caption}
                    </h2>
                </div>
            </div>
            }
            <div className="content-container">
                {children}
            </div>
        </section>
        </SectionContext.Provider>

    )
}