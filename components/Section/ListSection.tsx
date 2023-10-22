import { Section } from "./Section";
import { css } from "@emotion/css";
import { useContext, FC } from "react";
import { GlobalContext } from "GlobalContext";
import { colors } from "styles/colors";
import { PageLayoutConstantsMobile } from "constants/PageLayoutConstants";

export const ListSection: FC<{ caption: string, isSecondary: Boolean, sectionId: string, children: React.ReactNode }> = ({ caption, children, sectionId, isSecondary }) => {

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
        const createBackgroundColor = (isSecondary: Boolean, isMobile: Boolean): string => {
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

        const backgroundColor = createBackgroundColor(isSecondary, isMobile)
        const fontColor = createFontColor(isSecondary, isMobile)

        return css({
            paddingBottom: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            maxWidth: '100vw',
            gap: containerGap,

            '.caption-wrapper': {
                position: 'relative',

                width: isMobile ? 'auto' : desktopCaptionContainerWidth,
                overflow: 'hidden',

                '.caption-container': {
                    position: 'relative',
                    display: 'flex',
                    background: backgroundColor,
                    color: fontColor,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            },
            '.content-container': {
                marginLeft: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 0,

                width: isMobile ? screenWidth - 2 * PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : `calc(100% - ${desktopCaptionContainerWidth}px)`,
                position: 'relative',
                paddingTop: isMobile ? 20 : 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                paddingLeft: isMobile? 0 : 100,
            }
        })
    }

    const listSectionStyles = createListSectionStyles(isMobile, isSecondary);


    return (
        <Section isSecondary={isSecondary} sectionId={sectionId}>
            <div className={listSectionStyles}>
                <div className="caption-wrapper">
                    <div className="caption-container">
                        <h2>
                            {caption}
                        </h2>
                    </div>
                </div>
                <div className="content-container">
                    {children}
                </div>
            </div>
        </Section>
    )
}