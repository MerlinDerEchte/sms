import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext";
import { useContext, FC } from "react";
import { Impression } from "types/impression";
import { colors } from "styles/colors";

export const ImpressionsTeaser: FC<{
  impressions: Impression[];
  setFirstImpressionIndex: ( index:number ) => void;
}> = ({ impressions, setFirstImpressionIndex }) => {
  const { screenWidth } = useContext(GlobalContext);
  const imageWidth = 300;
  const imageHeight = 300;
  const imageGap = 20;
  const totalWidth = 3 * imageWidth + 2 * imageGap;
  const margin = (screenWidth - totalWidth) / 2;

  const createImpressionsTeaserStyles = () => {
    return css({
      width: totalWidth,
      height: imageHeight,
      marginLeft: margin,
      display: "flex",
      gap: imageGap,
      ".impression-foto-container": {
        flex: 1,
        position: "relative",
        overflow: "hidden",

        img: {
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
        },
        ":hover": {
          border: `2px solid ${colors.DARK_BROWN}`,
          boxShadow: `0px 0px 10px ${colors.DARK_BROWN}`,
        },
      },
    });
  };

  const impressionsTeaserStyles = createImpressionsTeaserStyles();

  return impressions && impressions.length > 1 ? (
    <div className={impressionsTeaserStyles}>
      {impressions.slice(0, 3).map((impression, index) => {
        return (
          <div
            className="impression-foto-container"
            onClick={() => setFirstImpressionIndex(index)}
          >
            <img src={impression.fotoLink}></img>
          </div>
        );
      })}
    </div>
  ) : (
    /*  <div className="impression-foto-container">
        <img src={impressions[1].fotoLink}></img>
      </div>
      <div className="impression-foto-container">
        <img src={impressions[2].fotoLink}></img>
      </div>
   */
    <></>
  );
};
