import { css, keyframes } from "@emotion/css";
import { SuedLogoHeader } from "components/SuedLogoHeader/SuedLogoHeader";
import { useContext, useEffect } from "react";
import { GlobalContext } from "context/GlobalContext";
import { ESectionId } from "enums/sectionIds";
import { PageLayoutConstantsMobile } from "constants/PageLayoutConstants";
import { BFVWidgetComponent } from 'components/BFVWidget'
import { NewSection } from "../Section/NewSection";
import { scrollIntoView } from "utils/scrollUtil";

export const IntroSection: React.FC<{ isSecondary: boolean }> = ({ isSecondary }) => {

	const { isMobile } = useContext(GlobalContext);
	const animateMarginTop = keyframes`
0% {
  margin-top: 400px; /* Start with a large margin */
}
100% {
  margin-top: 70px;  /* Shrink to smaller margin */
}
`;

	const createIntroStyles = (isMobile: Boolean) => {
		return css({
			position: "relative",
			paddingTop: isMobile ? 0 : 0,
			paddingBottom: 50,
			minHeight: 'calc(100vh - 50px)',
			marginLeft: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
			marginRight: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "stretch",

			".next-games-wrapper": {
				marginTop: isMobile ? 400 : 800,
				flex: "1 0",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 10,
				animation: `${animateMarginTop} 0.5s 1.5s ease-out forwards`,

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
			},
		});
	}

	const introStyles = createIntroStyles(isMobile);

	return (
		<NewSection isSecondary={isSecondary} sectionId={ESectionId.Intro} hasCaption={false}>
			<div className={introStyles}>
				<div className="sued-logo-wrapper">
					<SuedLogoHeader />
				</div>
				<div className="start-actions-wrapper">
				</div>
			</div>
		</NewSection>
	)
}

