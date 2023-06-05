import { css } from '@emotion/css';
import { GlobalContext } from 'GlobalContext';
import { useEffect, useState, useContext, FC } from 'react';
import { colors } from 'styles/colors';
import { rootCertificates } from 'tls';



export const Gallery:FC<{ closeGallery:()=>void}> = ({closeGallery}) => {

    const { screenWidth, screenHeight } = useContext(GlobalContext);
    const createGalleryStyles = (screenHeight:number, screenWidth:number) => {

        return css({
            position: 'fixed',
            zIndex: 400,
            background: colors.BLACK,
            top: 0,
            left: 0,
            width: screenWidth,
            height: screenHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 100px',
            '.gallery-image-container':{
                flex: 1,
                widht: '100%',
                opacity: 1,
                height: '100%',
                background: colors.DARK_WHITE
            },
            '.gallery-close':{
                position: 'absolute',
                top: 20,
                right: 50,
                height: 20, 
                width: 20,

                ':hover':{
                    top:25,
                    right: 55,
                    '.gallery-close-bar':{
                        width: 30,
                        height: 4,
                    }
                },
                '.gallery-close-bar': {
                    width: 20,
                    height: 3,
                    background: colors.DARK_WHITE,
                    borderRadius: 5,
                    cursor: 'pointer'  
                },
                '.gallery-close-first-bar':{
                    position: 'absolute',
                    transform: 'rotate(45deg)'
                   
                },
                '.gallery-close-second-bar':{
                    transform: 'rotate(-45deg)',
                    position: 'absolute',
                }

            }
        })
    }

    const galleryStyles = createGalleryStyles(screenHeight, screenWidth)

    return(
        <div className={galleryStyles}>
            <div className="gallery-image-container">

            </div>
            <div className="gallery-close" onClick={closeGallery}>
                <div className="gallery-close-first-bar gallery-close-bar"></div>
                <div className="gallery-close-second-bar gallery-close-bar"></div>
            </div>
        </div>
    )
}