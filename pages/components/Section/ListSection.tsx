import { Section } from "./Section";
import { css } from "@emotion/css";
import { useContext, FC, ReactComponentElement, ReactElement, ReactNode } from "react";
import { GlobalContext } from "../../GlobalContext";
import { colors } from "../../../styles/colors";

export const ListSection: FC<{ caption: string, isSecondary: Boolean, sectionId: string, children: React.ReactNode }> = ({ caption, children, sectionId, isSecondary }) => {


    const createListSectionStyles = () => {

        return css({
            paddingBottom: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '100vw',
            gap: 100,

            '.caption-wrapper': {
                flex: 1,
                width: '33vw',
                overflow: 'hidden',
                '.caption-container': {
                    position: 'relative',
                    display: 'flex',
                    background: colors.DARK_BROWN,
                    color: colors.DARK_WHITE,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            },
            '.content-container': {
                flex: 2,
                width: '66vw',
                position: 'relative',
                paddingTop: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',

            }
        })
    }

    const listSectionStyles = createListSectionStyles();


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