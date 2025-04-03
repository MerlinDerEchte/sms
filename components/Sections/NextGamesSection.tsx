import { ESectionId } from "enums/sectionIds";
import { BFVWidgetComponent } from 'components/BFVWidget'
import { NewSection } from "../Section/NewSection";
import { css } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import { isObjectType } from "graphql";

export const NextGamesSection: React.FC<{ isSecondary: boolean }> = ({ isSecondary }) => {

    const createNextGamesSectionStyles = () => {
        return css({
            ".next-games-wrapper": {
                flex: "1 0",
                width: "100%",
                minHeight: 600,
                display: "flex",
                flexDirection: "column",
                gap: 10,

                ".bfv-widget-wrapper": {
                    flex: 1,
                    position: "relative",
                    width: "100%",
                    textAlign: 'center',

                    ".bfv-widget": {
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: "left",
                        paddingTop: 20,
                        paddingBottom: 20,
                    },
                },
            }
        })
    }

    const nextGameStyles = createNextGamesSectionStyles()

    return <NewSection isSecondary={isSecondary} sectionId={ESectionId.NextGames} >
        <div className="next-games-wrapper"  >
            <div className="bfv-widget-wrapper">
                <div className="bfv-widget" id="bfv-widget">
                    <BFVWidgetComponent />
                </div>
            </div>
        </div>
    </NewSection>
}
