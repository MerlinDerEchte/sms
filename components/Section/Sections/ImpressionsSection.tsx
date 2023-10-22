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

export const ImpressionsSection = ({ }) => {
  const { isMobile } = useContext(GlobalContext);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [impressions, setImpressions] = useState<Impression[]>([]);
  const [firstImpressionIndex, setFirstImpressionIndex] = useState(0);
  const containerGap = isMobile ? 50 : 100;
  const desktopCaptionContainerWidth = 450;
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };
  const openGallery = (impressionIndex: number = 0) => {
    if (isGalleryOpen) {
      return
    }
    setIsGalleryOpen(true);
    setFirstImpressionIndex(impressionIndex);
  };
  const createImpressionsSectionStyles = () => {
    return css({
      width: "100%",
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',

      ".impression-section-header-wrapper": {
        flex: 0,
        width: isMobile ? '100%' : desktopCaptionContainerWidth,
        display: "flex",
        justifyContent: 'center',
        height: '50px',
        alignItems: "center",
        background: isMobile ? colors.DARK_BROWN : colors.DARK_WHITE,
        borderRadius: isMobile ? 'none' : "0 0 15px 0",
        color: isMobile ? colors.DARK_WHITE : colors.DARK_BROWN,
        marginBottom: 20,
        '.impression-section-header-container': {
          width: isMobile ? '100%' : desktopCaptionContainerWidth,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      ".impression-section-content-wrapper": {
        paddingTop: isMobile ? 50 : 100,
        paddingBottom: 20,
        width: isMobile ? '100%' : `calc(100vw - ${containerGap}px - ${desktopCaptionContainerWidth}px)`,
        display: 'flex',
        justifyContent: 'center'
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
    <Section isSecondary={true} sectionId={ESectionId.Impressions}>
      <div className={impressionsSectionStyles}>
        <div className="impression-section-header-wrapper">
          <div className="impression-section-header-container">
            <h2>Impressionen</h2>
          </div>
        </div>
        <div className="impression-section-content-wrapper">
          <ImpressionsTeaser
            impressions={impressions}
            openGallery={openGallery}
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
