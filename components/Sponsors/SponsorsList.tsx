import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext"
import { useContext } from "react"
import { OberlaenderApotheke } from "./SponsorListItem/OberlaenderApotheke";
import { StadtMuenchen } from "./SponsorListItem/StadtMuenchen";
import { LohnerVersicherungen } from "./SponsorListItem/LohnerVersicherungen";
import { PhysioteamSendling } from "./SponsorListItem/PhysioTeamSendling";
import { MaxBauerSachverstaendiger } from "./SponsorListItem/MaxBauerSachverstaendiger";
import { FahrschuleRiek } from "./SponsorListItem/FahrschuleRiek";

export const SponsorsList: React.FC = () => {

    const { isMobile } = useContext(GlobalContext);

    const createSponsorsListStyles = () => {
        return css({
            display: 'flex',
            flexWrap: 'wrap',
            position: 'relative',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center', 
            width: '100%',
            gap: isMobile ? 30 : 30
        })
    }
    const sponsorsListStyles = createSponsorsListStyles();
    return (
        <div className={sponsorsListStyles}>
            <LohnerVersicherungen />
            <OberlaenderApotheke />
            <StadtMuenchen />
            <PhysioteamSendling />
            <MaxBauerSachverstaendiger />
            <FahrschuleRiek />
        </div>
    )



}