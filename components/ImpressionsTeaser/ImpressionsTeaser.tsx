import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext";
import { useContext, useState, useEffect } from "react";
import { Impression } from "types/impression";
import { colors } from "styles/colors";
import { useQuery } from "@apollo/client";
import {
  IMPRESSIONS_QUERY,
  mapContentfulImpressions,
} from "contentful/contentfulImpression";

export const ImpressionsTeaser = ({}) => {
  const [impressions, setImpressions] = useState<Impression[]>([]);
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
            left: '50%',
            top: '50%',
            translate: '-50% -50%'
        },
        ":hover": {
          border: `2px solid ${colors.DARK_BROWN}`,
          boxShadow: `0px 0px 10px ${colors.DARK_BROWN}`,
        },
      },
    });
  };
  const { data } = useQuery(IMPRESSIONS_QUERY);

  const impressionsTeaserStyles = createImpressionsTeaserStyles();

  useEffect(() => {
    if (data?.impressionCollection?.items) {
      const newImpressions = mapContentfulImpressions(
        data.impressionCollection.items
      );
      setImpressions(newImpressions);
    }
  }, [data]);
  return (
    impressions &&
    impressions.length > 1 && (
      <div className={impressionsTeaserStyles}>
        <div className="impression-foto-container">
          <img src={impressions[0].fotoLink}></img>
        </div>
        <div className="impression-foto-container">
          <img src={impressions[1].fotoLink}></img>
        </div>
        <div className="impression-foto-container">
        <img src={impressions[2].fotoLink}></img>
        </div>
      </div>
    )
  );
};
