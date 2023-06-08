import { ESectionId } from "enums/sectionIds";
import { ImpressionsTeaser } from "components/ImpressionsTeaser/ImpressionsTeaser";
import { Section } from "../Section";
import { css } from "@emotion/css";
import { colors } from "styles/colors";
import { Gallery } from "components/Gallery/Gallery";
import { useEffect, useState } from "react";
import { Impression } from "types/impression";
import { useQuery } from "@apollo/client";
import { IMPRESSIONS_QUERY, mapContentfulImpressions } from "contentful/contentfulImpression";

export const ImpressionsSection = ({}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [impressions, setImpressions] = useState<Impression[]>([]);
  const [ firstImpressionIndex, setFirstImpressionIndex ] = useState(0);
  
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };
  const openGallery = () => {
    setIsGalleryOpen(true);
  };
  const createImpressionsSectionStyles = () => {
    return css({
      width: "100%",

      ".impression-section-header-wrapper": {
        
        flex: 0,
        display: "block",
        height: 50,
        width: "33vw",
        textAlign: "center",
        background: colors.DARK_BROWN,
        borderRadius: "0 0 15px 0",
        color: colors.DARK_WHITE,
        marginBottom: 20,
      },
      ".impression-section-content-wrapper": {
        cursor: "pointer",
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
      <div className={impressionsSectionStyles} onClick={openGallery}>
        <div className="impression-section-header-wrapper">
          <h2>Impressionen</h2>
        </div>
        <div className="impression-section-content-wrapper">
          <ImpressionsTeaser impressions={impressions} setFirstImpressionIndex={setFirstImpressionIndex}/>
        </div>
      </div>
      {isGalleryOpen && <Gallery impressions={impressions} closeGallery={closeGallery} firstIndex={firstImpressionIndex}/>}
    </Section>
  );
};
