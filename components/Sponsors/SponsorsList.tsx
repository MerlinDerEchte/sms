import { css } from "@emotion/css";
import { GlobalContext } from "context/GlobalContext"
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
            justifyContent: 'center', 
            alignItems: 'center',
            width: isMobile ? '100%' : '90%',
            gap: 30,
            /* gap: isMobile ? 30 : 30 */
        })
    }
    const sponsorsListStyles = createSponsorsListStyles();
    return (
        <div className={sponsorsListStyles}>
            <OberlaenderApotheke />
            <LohnerVersicherungen />
            <StadtMuenchen />
            <PhysioteamSendling />
            <MaxBauerSachverstaendiger />
            <FahrschuleRiek />
        </div>
    )



}