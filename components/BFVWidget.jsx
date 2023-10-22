import { GlobalContext } from "GlobalContext";
import Script from "next/script"
import { useContext, useEffect } from "react";
export const BFVWidgetComponent = () => {

	const { isMobile } = useContext(GlobalContext)
	useEffect(() => {
		const handleBFVWidget = () => {
			if (typeof BFVWidget !== 'undefined') {
				BFVWidget.HTML5.zeigeVereinSpiele("00ES8GNHD400001CVV0AG08LVUPGND5I", "bfv1694863254434", {
					height: isMobile ? "550px" : "650px",
					width: isMobile ? "300px" : "1000px",
					selectedTab: BFVWidget.HTML5.vereinTabs.spiele,
					colorResults: "rgb(46, 21, 3)",
					colorNav: "rgb(250, 249, 246)",
					colorClubName: "rgb(46, 21, 3)",
					backgroundNav: "rgb(46, 21, 3)"
				});
			} else {
				// BFVWidget is not yet defined, retry after a delay
				setTimeout(handleBFVWidget, 100); // Retry after 100 milliseconds
			}
		};

		handleBFVWidget();
	}, [isMobile]);



	return (<>
		<Script src="https://widget-prod.bfv.de/widget/widgetresource/widgetjs" strategy="beforeInteractive" />

		<div id="bfv1694863254434">Laden...</div>
	</>
	)
}