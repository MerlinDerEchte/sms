import { css } from "@emotion/css";
import { SuedLogoHeader } from "components/SuedLogoHeader/SuedLogoHeader";
import { useContext, useEffect } from "react";
import { GlobalContext } from "context/GlobalContext";
import { ESectionId } from "enums/sectionIds";
import { PageLayoutConstantsMobile } from "constants/PageLayoutConstants";
import { BFVWidgetComponent } from 'components/BFVWidget'
import { NewSection } from "../Section/NewSection";
export const IntroSection = ({ }) => {

	const { isMobile } = useContext(GlobalContext);

	const createIntroStyles = (isMobile: Boolean) => {
		return css({
			position: "relative",
			paddingTop: isMobile ? 150 : 50,
			paddingBottom: 50,
			marginLeft: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
			marginRight: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
			display: "flex",
			flexDirection: "column",
			alignItems: "stretch",
			gap: isMobile ? 100 : 50,

			".welcome-wrapper": {
				flex: "1 0",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 10,

				".welcome-header-wrapper": {
					flex: 0,
					height: 40,
					width: "100%",
					textAlign: 'center',
				},
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
		<NewSection isSecondary={false} sectionId={ESectionId.Intro} hasCaption={false}>
			<div className={introStyles}>
				<div className="sued-logo-wrapper">
					<SuedLogoHeader />
				</div>
				<div className="welcome-wrapper">
					<div className='welcome-header-wrapper'>
						<h1>
							Herzlich Willkommen beim SC München Süd e.V.
						</h1>
					</div>
					<div className="bfv-widget-wrapper">
						<div className="bfv-widget">
							<BFVWidgetComponent />
						</div>
					</div>
				</div>
			</div>
		</NewSection>
	)
}

