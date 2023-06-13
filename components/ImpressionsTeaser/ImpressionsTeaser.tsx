import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext";
import { useContext, FC, PointerEvent } from "react";
import { Impression } from "types/impression";
import { colors } from "styles/colors";
import { Autocomplete } from "@react-google-maps/api";

export const ImpressionsTeaser: FC<{
  impressions: Impression[];
  openGallery: (index: number) => void;
}> = ({ impressions, openGallery }) => {
  const { screenWidth, isMobile } = useContext(GlobalContext);
  const imageWidth = 300;
  const imageHeight = 300;
  const imageGap = 20;
  const totalWidth = 3 * imageWidth + 2 * imageGap;
  const margin = isMobile ? 25 : (screenWidth - totalWidth) / 2;
  const mobileWidth = screenWidth - 50;
  const mobileHeight = 3 * imageHeight + 2 * imageGap;
  const handleImpressionClick = (e: PointerEvent, index: number) => {
    openGallery(index);
  }
  const createImpressionsTeaserStyles = () => {
    return css({
      width: isMobile ? mobileWidth : totalWidth,
      height: isMobile ? mobileHeight : imageHeight,
      marginLeft: margin,
      display: "flex",
      flexDirection: isMobile ? 'column' : 'row',
      gap: imageGap,

      ".impression-foto-container": {
        flex: 1,
        position: "relative",
        overflow: "hidden",
        height: isMobile ? imageHeight : 'auto',
        img: {
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
        },
        ":hover": {
          cursor: 'pointer',
          border: isMobile ? `` : `1px solid ${colors.DARK_WHITE}`,
          boxShadow: isMobile ? `` : `0px 0px 10px ${colors.DARK_WHITE}`,
        },
      },
    });
  };

  const impressionsTeaserStyles = createImpressionsTeaserStyles();

  return impressions && impressions.length > 1 ? (
    <div className={impressionsTeaserStyles}>
      {impressions.slice(0, 3).map((impression, index) => {
        return (
          <div key={index}
            className="impression-foto-container"
            onPointerUp={(e) => handleImpressionClick(e, index)}
          >
            <img src={impression.fotoLink}></img>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
