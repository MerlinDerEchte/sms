import { ESectionId } from "enums/sectionIds";
import { ImpressionsTeaser } from "components/ImpressionsTeaser/ImpressionsTeaser";
import { Section } from "../Section";
import { css } from "@emotion/css";
import { colors } from "styles/colors";
import { Gallery } from "components/Gallery/Gallery";
import { useState } from "react";

export const ImpressionsSection = ({}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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
        marginBottom: 20,
      },
    });
  };
  const impressionsSectionStyles = createImpressionsSectionStyles();
  return (
    <Section isSecondary={false} sectionId={ESectionId.Impressions}>
      <div className={impressionsSectionStyles} onClick={openGallery}>
        <div className="impression-section-header-wrapper">
          <h2>Impressionen</h2>
        </div>
        <div className="impression-section-content-wrapper">
          <ImpressionsTeaser />
        </div>
      </div>
      {isGalleryOpen && <Gallery closeGallery={closeGallery} />}
    </Section>
  );
};
