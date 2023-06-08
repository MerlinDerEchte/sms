import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext";
import { useEffect, useState, useContext, FC, PointerEvent } from "react";
import { colors } from "styles/colors";
import { rootCertificates } from "tls";
import { Impression } from "types/impression";

export const Gallery: FC<{
  impressions: Impression[];
  closeGallery: () => void;
  firstIndex?: number;
}> = ({ impressions, closeGallery, firstIndex = 0 }) => {
  const { screenWidth, screenHeight, isMobile } = useContext(GlobalContext);
  const [selectedImpressionIndex, setSelectedImpressionIndex] =
    useState<number>(firstIndex);

  const increaseSelectedImpressionIndex = () => {
    const newSelectedImpressionIndex =
      (selectedImpressionIndex + 1) % impressions.length;
    setSelectedImpressionIndex(newSelectedImpressionIndex);
  };
  const decreaseSelectedImpressionIndex = () => {
    const newSelectedImpressionIndex =
      selectedImpressionIndex > 0
        ? selectedImpressionIndex - 1
        : impressions.length - 1;
    setSelectedImpressionIndex(newSelectedImpressionIndex);
  };
  const handleCloseGallery = (e: PointerEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    closeGallery();
  };
  const createGalleryStyles = (screenHeight: number, screenWidth: number) => {
    const imageContainerWidth = screenWidth - 200;
    const imageContainerHeight = screenHeight - 150;
    const mobileImageContainerWidth = screenWidth;

    return css({
      position: "fixed",
      zIndex: 1000,
      background: colors.BLACK,
      top: 0,
      left: 0,
      width: screenWidth,
      height: screenHeight,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      ".gallery-image-container": {
        boxShadow: isMobile
          ? "none"
          : `0px 0px 10px ${colors.DARK_BROWN} inset`,
        width: isMobile ? mobileImageContainerWidth : imageContainerWidth,
        opacity: 1,
        height: imageContainerHeight,
        background: colors.DARK_WHITE,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        img: {
          maxHeight: imageContainerHeight - 10,
          maxWidth: isMobile
            ? mobileImageContainerWidth
            : imageContainerWidth - 10,
        },
      },
      ".gallery-impression-text-container": {
        width: isMobile ? mobileImageContainerWidth : imageContainerWidth,
        background: colors.DARK_WHITE,
        color: colors.DARK_BROWN,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        p: {
          margin: 0,
          padding: 0,
        },
      },
      ".gallery-next-image-container": {
        height: 100,
        width: 50,
        position: "absolute",
        top: isMobile ? screenHeight - 100 : (screenHeight - 100) / 2,
        right: 25,
        cursor: "pointer",
        "::before": {
          content: "''",
          position: "absolute",
          top: (100 - 40) / 2,
          right: 15,
          width: 40,
          height: 40,
          borderRight: `3px solid ${
            isMobile ? colors.DARK_BROWN : colors.DARK_WHITE
          }`,
          borderTop: `3px solid ${
            isMobile ? colors.DARK_BROWN : colors.DARK_WHITE
          }`,
          transform: "rotate(45deg)",
        },
        ":hover": {
          "::before": {
            borderRight: isMobile
              ? `3px solid ${isMobile ? colors.DARK_BROWN : colors.DARK_WHITE}`
              : `5px solid ${colors.DARK_WHITE}`,
            borderTop: isMobile
              ? `3px solid ${isMobile ? colors.DARK_BROWN : colors.DARK_WHITE}`
              : `5px solid ${colors.DARK_WHITE}`,
          },
        },
      },
      ".gallery-previous-image-container": {
        height: 100,
        width: 50,
        position: "absolute",
        top: isMobile ? screenHeight - 100 : (screenHeight - 100) / 2,
        left: 25,
        cursor: "pointer",
        "::before": {
          content: "''",
          position: "absolute",
          top: (100 - 40) / 2,
          left: 15,
          width: 40,
          height: 40,
          borderLeft: `3px solid ${
            isMobile ? colors.DARK_BROWN : colors.DARK_WHITE
          }`,
          borderBottom: `3px solid ${
            isMobile ? colors.DARK_BROWN : colors.DARK_WHITE
          }`,
          transform: "rotate(45deg)",
        },
        ":hover": {
          "::before": {
            borderLeft: isMobile
              ? `3px solid ${isMobile ? colors.DARK_BROWN : colors.DARK_WHITE}`
              : `5px solid ${colors.DARK_WHITE}`,
            borderBottom: isMobile
              ? `3px solid ${isMobile ? colors.DARK_BROWN : colors.DARK_WHITE}`
              : `5px solid ${colors.DARK_WHITE}`,
          },
        },
      },
      ".gallery-close": {
        position: "absolute",
        top: 20,
        right: isMobile ? 20 : 50,
        height: 20,
        width: 20,
        cursor: "pointer",
        ":hover": {
          top: isMobile ? 20 : 25,
          right: isMobile ? 20 : 55,
          ".gallery-close-bar": {
            width: isMobile ? 20 : 30,
            height: isMobile ? 3 : 4,
          },
        },
        ".gallery-close-bar": {
          width: 20,
          height: 3,
          background: colors.DARK_WHITE,
          borderRadius: 5,
        },
        ".gallery-close-first-bar": {
          position: "absolute",
          transform: "rotate(45deg)",
        },
        ".gallery-close-second-bar": {
          transform: "rotate(-45deg)",
          position: "absolute",
        },
      },
    });
  };

  const galleryStyles = createGalleryStyles(screenHeight, screenWidth);

  return (
    <div className={galleryStyles} onPointerDown={e => {e.preventDefault(); e.stopPropagation()}} onPointerUp={e => {e.preventDefault(); e.stopPropagation()}}>
      <div className="gallery-image-container">
        {impressions && impressions.length > selectedImpressionIndex && (
          <img
            src={impressions[selectedImpressionIndex].fotoLink}
            alt="impression"
          ></img>
        )}
      </div>
      <div
        className="gallery-previous-image-container"
        onClick={decreaseSelectedImpressionIndex}
      ></div>
      <div
        className="gallery-next-image-container"
        onClick={increaseSelectedImpressionIndex}
      ></div>
      <div className="gallery-impression-text-container">
        <p>{impressions[selectedImpressionIndex].description} </p>
      </div>

      <div
        className="gallery-close"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleCloseGallery(e);
        }}
      >
        <div className="gallery-close-first-bar gallery-close-bar"></div>
        <div className="gallery-close-second-bar gallery-close-bar"></div>
      </div>
    </div>
  );
};
