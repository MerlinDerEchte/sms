import { ESectionId } from "enums/sectionIds";
import { ImpressionsTeaser } from "components/ImpressionsTeaser/ImpressionsTeaser";
import { Section } from "../Section";
import { css } from "@emotion/css";
import { colors } from "styles/colors";
import { Gallery } from "components/Gallery/Gallery";
import { useContext, useEffect, useState } from "react";
import { Impression } from "types/impression";
import { useQuery } from "@apollo/client";
import {
  IMPRESSIONS_QUERY,
  mapContentfulImpressions,
} from "contentful/contentfulImpression";
import { GlobalContext } from "GlobalContext";

export const ImpressionsSection = ({}) => {
  const { isMobile } = useContext(GlobalContext);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [impressions, setImpressions] = useState<Impression[]>([]);
  const [firstImpressionIndex, setFirstImpressionIndex] = useState(0);

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };
  const openGallery = (impressionIndex:number = 0) => {
    if(isGalleryOpen){
        return
    }
    setIsGalleryOpen(true);
    setFirstImpressionIndex(impressionIndex);
  };
  const createImpressionsSectionStyles = () => {
    return css({
      width: "100%",

      ".impression-section-header-wrapper": {
        flex: 0,
        height: 50,
        width: isMobile ? ' 100%' : "33vw",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        background: isMobile ? colors.DARK_WHITE : colors.DARK_BROWN,
        borderRadius: isMobile ? 'none' : "0 0 15px 0",
        color: isMobile ? colors.DARK_BROWN : colors.DARK_WHITE,
        marginBottom: 20,
      },
      ".impression-section-content-wrapper": {
        paddingBottom: 20,
      },
    });
  };

  const impressionsSectionStyles = createImpressionsSectionStyles();
  const { data } = useQuery(IMPRESSIONS_QUERY);
  useEffect(() => {
    if (data?.impressionCollection?.items) {
      const newImpressions = mapContentfulImpressions(
        data.impressionCollection.items
      );
      setImpressions(newImpressions);
    }
  }, [data]);

  return (
    <Section isSecondary={false} sectionId={ESectionId.Impressions}>
      <div className={impressionsSectionStyles}>
        <div className="impression-section-header-wrapper">
          <h2>Impressionen</h2>
        </div>
        <div className="impression-section-content-wrapper">
          <ImpressionsTeaser
            impressions={impressions}
            openGallery={ openGallery}
          />
        </div>
      </div>
      {isGalleryOpen && (
        <Gallery
          impressions={impressions}
          closeGallery={closeGallery}
          firstIndex={firstImpressionIndex}
        />
      )}
    </Section>
  );
};
