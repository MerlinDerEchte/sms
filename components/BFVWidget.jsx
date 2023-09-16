import Script from "next/script"
import { useEffect } from "react";
export const BFVWidgetComponent = () => {


	useEffect(() => {
		const handleBFVWidget = () => {
			if (typeof BFVWidget !== 'undefined') {
				BFVWidget.HTML5.zeigeVereinSpiele("00ES8GNHD400001CVV0AG08LVUPGND5I", "bfv1694863254434", {
					height: "550",
					width: "300",
					selectedTab: BFVWidget.HTML5.vereinTabs.spiele,
					colorResults: "undefined",
					colorNav: "undefined",
					colorClubName: "undefined",
					backgroundNav: "undefined"
				});
			} else {
				// BFVWidget is not yet defined, retry after a delay
				setTimeout(handleBFVWidget, 100); // Retry after 100 milliseconds
			}
		};

		handleBFVWidget();
	}, []);


	return (<>

		<div id="bfv1694863254434">Laden...</div>
	</>
	)
}