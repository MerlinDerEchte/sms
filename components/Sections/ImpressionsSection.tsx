import { ESectionId } from "enums/sectionIds";
import { ImpressionsTeaser } from "components/ImpressionsTeaser/ImpressionsTeaser";
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
import { GlobalContext } from "context/GlobalContext";
import { NewSection } from "../Section/NewSection";

export const ImpressionsSection:React.FC<{isSecondary:boolean}> = ({ isSecondary }) => {
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

      paddingTop: 50,
      paddingBottom: 20,
      width: isMobile ? '100%' : `calc(100vw - ${containerGap}px - ${desktopCaptionContainerWidth}px)`,
      display: 'flex',
      justifyContent: 'center'

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
    <NewSection isSecondary={isSecondary} sectionId={ESectionId.Impressions} >
      <div className={impressionsSectionStyles}>
        <ImpressionsTeaser
          impressions={impressions}
          openGallery={openGallery}
        />
      </div>
      {isGalleryOpen && (
        <Gallery
          impressions={impressions}
          closeGallery={closeGallery}
          firstIndex={firstImpressionIndex}
        />
      )}
    </NewSection>
  );
};
